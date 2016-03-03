var app = require("config").baseModule; 
 
function MainCtrl($rootScope, $scope, $location,httpRequest) { 
    // $modal, $anchorScroll, $state, UserService, SessionService, $injector 
    $scope.main.userName = "admin";
    // BusinessDate=" + req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize
    // httpRequest.getdemoAPI({ date : "2014-01-01" , pageindex : 1 , pagesize : 15 }, { done:"自定义成功提示" });
}; 
app.controller('MainCtrl', ["$rootScope", "$scope", "$location" ,MainCtrl]); // ,"httpRequest"
// Error: [$injector:unpr] Unknown provider: httpRequestProvider <- httpRequest <- MainCtrl  注入错误 
 