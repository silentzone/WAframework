define(["app/init"], function () {
    var AppConfig = require("app/base");
    /**
     * MainCtrl - controller
     */


    function MainCtrl($rootScope, $scope, $location,httpRequest) { // $modal, $anchorScroll, $state, UserService, SessionService, $injector
        console.log("MainCtrl"); 
        $scope.main.userName = "admin";
        // BusinessDate=" + req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize
   //     httpRequest.getdemoAPI({ date : "2014-01-01" , pageindex : 1 , pagesize : 15 }, { done:"自定义成功提示" });
    };

    angular
        .module(AppConfig.applicationModuleName)
        .controller('MainCtrl', ["$rootScope", "$scope", "$location" ,"httpRequest",MainCtrl]);


});
