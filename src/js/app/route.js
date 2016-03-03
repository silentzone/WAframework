var app = require("config").baseModule; 
function route($stateProvider , $urlRouterProvider ) {   // $ocLazyLoadProvider 确实是否是 全局变量 
    $urlRouterProvider.otherwise("creditinfobundles/list");  // /#/creditinfobundles/list
    $stateProvider
        //框架顶部导航
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
            // resolve: {
            //         loadPlugin: ["$ocLazyLoad",function ($ocLazyLoad) {
            //             return $ocLazyLoad.load([
            //                 // {
            //                 //     name: 'datePicker',
            //                 //     files: ['resource/css/plugins/datapicker/angular-datapicker.css','resource/js/plugins/datapicker/angular-datepicker.js']
            //                 // },
            //                 {
            //                    files: [ 'resource/css/plugins/clockpicker/clockpicker.css', 'resource/js/plugins/clockpicker/clockpicker.js']  
            //                    // 'resource/css/plugins/clockpicker/clockpicker.css', 
            //                    //  resource\css\plugins\colorpicker/colorpicker.css
            //                 }
            //         ]);
            //      }]
            // }
        })
        .state('index.login', {
            url: "/login",
            templateUrl: "views/pages/login.html"
           //  data: { pageTitle: '登录' }
        }); 
}
app.config(["$stateProvider", "$urlRouterProvider"  ,route // , "$ocLazyLoadProvider"
]).run(["$rootScope", "$state", function ($rootScope, $state) {   // , "$ocLazyLoadProvider"        , $ocLazyLoadProvider
    $rootScope.$state = $state;
}]);   
       