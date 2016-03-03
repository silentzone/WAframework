// define(["angular","creditinfobundles/creditinfobundles.register" ,"mock.angular"], function (angular) {  // "mock.angular" mock angular 数据模拟器 
// 'use strict';
//   var creditinfobundles = angular.module('creditinfobundles');
//   var Mock = require("mock.angular");
//    // mock
//   Mock.mockjax(creditinfobundles);


// 单元测试 
//  1 函数依赖是否都传入 
//  2 内容逻辑 


var controller = function($scope, $filter, $location, $http ,httpRequest, logger, sliderControl) { 
        //modal
        $scope.open = function () {
            sliderControl.toggle({
                title: "摘要",
                templateSrc: "modules/creditinfobundles/views/common/detail.html" //modules/creditinfobundles/views/list.html"
            });
        };


        // template
        var htmlUrl = { 
            "listview" : "modules/creditinfobundles/views/common/listview.html",
            "timelineview" : "modules/creditinfobundles/views/common/timelineview.html"
        }
        //default template
        $scope.template = { url : htmlUrl.timelineview , active : "timeline" };
        //视图切换
        $scope.viewChange = (function () {
            var ret = {};
            ret.list = function () {
              $scope.template = {
                url : htmlUrl.listview ,
                active : "list"
              }
            }
            ret.timeline = function () {
              $scope.template = {
                url :  htmlUrl.timelineview,
                active : "timeline"
              }

            }
            return ret;
        })();
        // timeline 详情点击
        $scope.showdetial = function () {
            $scope.open();
        }


        var preDate = new Date();
        var strPreDate = preDate.getFullYear() + "-" + (preDate.getMonth() + 1 < 10 ? "0" + (preDate.getMonth() + 1) : (preDate.getMonth() + 1) ) + "-" + (preDate.getDate() < 10 ? "0" + preDate.getDate() : preDate.getDate());
        $scope.currentDate = strPreDate;

        // $scope.sortItems = {}; //存放排序字段 状态
        // $scope.sortCurrentitem = {name: "suspendFlag", status: true}
        // var orderBy = $filter('orderBy');
        // $scope.sortTable = function (str) {
        //     $scope.sortCurrentitem.name = str;
        //     toggleArrow();
        //     function toggleArrow() {
        //         if ($scope.sortItems[str] == null) {
        //             $scope.sortCurrentitem.status = false;
        //         } else {
        //             $scope.sortCurrentitem.status = $scope.sortItems[str];
        //         }
        //         $scope.sortCurrentitem.status = $scope.sortCurrentitem.status ? false : true;
        //         for (var a in $scope.sortItems) {
        //             $scope.sortItems[a] = null;
        //         }
        //         $scope.sortItems[str] = $scope.sortCurrentitem.status;
        //     }
        //     $scope.totalCollection = orderBy($scope.totalCollection, $scope.sortCurrentitem.name, $scope.sortCurrentitem.status);

        // };
        // 日期改变事件 
        // $scope.dateChange = function () {
        //     getPostdatabundles();
        // };

        //
        function getPostdatabundles() {
            if($scope.currentDate.length !== 10 ) return console.log("报文日期格式不正确");

            httpRequest.getPostdatabundles({ pageindex :  $scope.currentPage  , pagesize : $scope.numPerPage,  businessDate : $scope.currentDate }).then(function (data) {

                    $scope.totalCollection = data.postDataBundleInfos;
                   // console.log($scope.totalCollection);
                    $scope.totalCount = data.total;
                    
                    if ( !$scope.totalCollection && !($scope.totalCount < 1) ) return;
                    // 绑定需要排序的字段 和排序状态
                    // for (var a in $scope.totalCollection[0]) { 
                    //     $scope.sortItems[a] = null;
                    // }

                    $scope.currentRow = $scope.totalCollection[0];
           

                //}
            });


        }
        // 列表数据初始化
        getPostdatabundles();// 初始化 分页方法不需要原本是在分页方法中调用 
        // 列表点击事件
        $scope.rowClick = function (item) {
                 $scope.currentRow = item;
                 $scope.open();
        };

        //列表分页数据
        // (function () {
        //     $scope.numPerPageOpt = [15, 20, 30, 50, 100];
        //     $scope.numPerPage = $scope.numPerPageOpt[0];
        //     $scope.currentPage = 1;
        //     $scope.select = function (page) {

        //         $scope.currentPage = page || $scope.currentPage;
        //         // req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize

        //         getPostdatabundles();
        //         // httpreq.success().error(function () {
        //         //     return logger.logError('列表请求失败！');
        //         // });
        //     }
        //     $scope.select();
        //     //切换一页显示的条数
        //     $scope.onNumPerPageChange = function () {
        //         $scope.currentPage = 1
        //         $scope.select();
        //         return;
        //     };
        // })();

        $scope.search = function () {
            $scope.select(); 
        }


        // 菜单
        $scope.toolbar = {
                showdetial : function () {
                        if(!$scope.currentRow.id) {
                            return logger.logError("请选中一行报文.");
                        } 
                        httpRequest.getPostdatabundlesById($scope.currentRow.ID).then(function (data) {

                           $scope.bundlesDetial = data.PostDataBundleInfo;
                          // console.log("报文id" + $scope.bundlesDetial.ID );
                           $scope.open();

                        });
                },
                report : function () {
                     if(!$scope.currentRow.id) {
                            return logger.logError("请选中一行报文.");
                     }
                    // console.log("报文id" + $scope.currentRow.ID );
                     httpRequest.putPostdatabundle($scope.currentRow.ID,{done: "上报成功"});
                }
        }

}

module.exports = controller;

  // creditinfobundles.controller('creditinfobundles', ['$scope','$filter', '$location', '$http' ,  'httpRequest', 'logger', 'sliderControl', // '$stateParams',  'Authentication', 'Articles',
     
  // ]);




// });
