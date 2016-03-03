var app = require("config").baseModule; 
// var _params = require(./param).hosts;
app.service("sliderControl", [function () { 
    return {
        name : "sliderControl"
    };
}])
/**
 * 请求类   function request  (httpApi, msg)
 * msg      对象设置方式      { done:"自定义成功提示", erro : "自定义失败消息"  } // 如果不设置 erro 则弹出系统真实错误消息
 * msg      回调设置方式      httpRequest.get_API(req,function (msg) { console.log(msg) }); // 既可以获取失败又可获取成功
 * boolean  设置方式          httpRequest.get_API(req,false); //关闭成功提示 为空也可以关闭
 */
.factory("httpRequest", ["$q", '$http', 'logger', function ($q, $http, logger) {
    var successMsg = function (message) {
        return {  status: true, msg: message || "请求成功!", log: logger.logSuccess };
    };
    var erroMsg = function (message) {
        return { status: false, msg: message || "请求失败!", log: logger.logError };
    };
    var _request = function (httpApi, msg) { 
        //消息处理对象,  返回消息,
        var msgProxy = function (getMsgBo, responsMsg) {
            var MsgBo = getMsgBo(responsMsg);
            var requestStateus = MsgBo.status;
            if (msg) { //httprequest msg对象
                // true, {} , function
                switch (true) {
                    case  typeof msg == "function":
                        return msg(MsgBo.msg);
                    case  msg.hasOwnProperty("done") && requestStateus :
                        MsgBo = getMsgBo(msg.done);
                        break;
                    case  msg.hasOwnProperty("erro") && !requestStateus:
                        MsgBo = getMsgBo(msg.erro);
                        break;
                }
            } else {
                // false  , undefine //  设置为不弹出成功提示
                // 关闭提示 但是如果失败需要提示
                if (requestStateus) {
                    return;
                }
            }
            MsgBo.log(MsgBo.msg); 
        };
        

        var deferred = $q.defer();
        httpApi().success(function (response, code, config) {
           // if (response.success) {
                
                deferred.resolve(response);
                msgProxy(successMsg);
                //     deferred.resolve(response);
                //     msgProxy(successMsg);
                // } else {
                //     deferred.resolve(response); // 这里应该是 reject 但是如果是 reject 获取数据就会失败 目前 呼叫绑定接口状态为反的
                //     if (!response.data.responseStatus) {
                //         console.log("错误 ：服务层 response.success 为 false 却没有返回 data.responseStatus.message 对象 ");
                //         msgProxy(erroMsg);
                //     } else {
                //         msgProxy(erroMsg, response.response.data.responseStatus.message);
                //     } 
                // }
            // } else {
           //     deferred.reject(response); 
            //    msgProxy(erroMsg); // 这里调试一下看看到底返回啥   "API请求不成功 response.success 不成功

            // }
        }).error(function (response, headers, config) {
            deferred.reject(response);
            msgProxy(erroMsg, response);  //  .ResponseStatus.Message 请求失败返回嵌套response 和成功不一样
        });
        return deferred.promise;
    };

    // set 方法 将支持模块继承 和扩展 httprequest  类 
    // this.set = function ({  getdemoAPI: function (req, msg) {  }) {
        // 检查 this.API 列表是否已经有 同名api 已经有的 则会覆盖 并console.log 警告信息
    // } 

    // return 

    return { 
        getPostdatabundles: function (req, msg) { 
            return _request(function () {  
                return $http({url: _params[0].host + '/postdatabundles', params: req });
                 // .then(function (res) { 
                 //    console.log(res);
                 // }); 
                // return $http.get(_params[0].host + "/postdatabundles" + req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize); 
            }, msg);
        },
        getPostdatabundlesById: function (PostId, msg) {
            return _request(function () {
                // http://172.16.3.1:7122/api/postdatabundles/byid/{PostId}?api_key=special-key   
                return $http({url: _params[0].host + '/postdatabundles/byid/' + PostId });
                 // .then(function (res) { 
                 //    console.log(res);
                 // }); 
                // return $http.get(_params[0].host + "/postdatabundles" + req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize); 
            }, msg);
        },
        // /postdatabundles/status
        putPostdatabundle: function (PostId, msg) {
            return _request(function () {
                // http://172.16.3.1:7122/api/postdatabundles/byid/{PostId}?api_key=special-key   
                return $http({ 
                    url: _params[0].host + '/postdatabundles/status' , // PUT /postdatabundles/status
                    method:'PUT',
                    data : { PostId : PostId }
                 });
                 // .then(function (res) { 
                 //    console.log(res);
                 // }); 
                // return $http.get(_params[0].host + "/postdatabundles" + req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize); 
            }, msg);
        }
       

    };
}]);