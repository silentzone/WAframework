 define(["app/init"], function (angular) { 
    function config($stateProvider , $urlRouterProvider  ) { //  
         
        $urlRouterProvider.otherwise("creditinfobundles/list");  // /#/creditinfobundles/list
        $stateProvider
            //框架顶部导航
            .state('index', {
                abstract: true,
                url: "/index",
                templateUrl: "views/common/content.html"
            })
            .state('index.login', {
                url: "/login",
                templateUrl: "views/pages/login.html",
               //  data: { pageTitle: '登录' }
            }); 
            

    }
    var AppConfig = require("app/base");
    angular
        .module(AppConfig.applicationModuleName)
        .config(["$stateProvider","$urlRouterProvider" ,config]) // , "$urlRouterProvider"
        .run(["$rootScope", "$state",function ($rootScope, $state) {  
              $rootScope.$state = $state;
        }]);   
});        