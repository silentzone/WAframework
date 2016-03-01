// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for "app" ones, which are in a sibling
// directory.
require.config({
    baseUrl: "resource/js",
    paths: {
        // "main" : "app",
        "jquery" : "jquery/jquery-2.1.1.min",
        "angular" : "angular/angular",
        "bootstrap" : "bootstrap/bootstrap.min",
        "ocLazyLoad" :  "plugins/oclazyload/dist/ocLazyLoad.min",
        "ui-router" : "ui-router/angular-ui-router.min",
        "ui-bootstrap" : "bootstrap/ui-bootstrap-tpls-0.12.0.min",
        "icheck"  : "plugins/iCheck/icheck.min",
        //"sweetAlert": "plugins/sweetalert/sweetalert.min",
       // "ngSweetAlert": "plugins/sweetalert/angular-sweetalert.min",
        // lib
        //"metisMenu" : "plugins/metisMenu/jquery.metisMenu",
        //"slimscroll" : "plugins/slimscroll/jquery.slimscroll.min",
        "pace" :"plugins/pace/pace.min",
        //"soundmanager2" : "plugins/sound/soundmanager2",
        "chosen" : "plugins/chosen/chosen.jquery",
        "datetimepicker" :"plugins/datetimepicker/bootstrap-datetimepicker",
        "datetimepicker-zh-CN" :"plugins/datetimepicker/bootstrap-datetimepicker.zh-CN",
        "blueimpApi" : "plugins/blueimp/blueimp-gallery",
        "blueimp-gallery" : "plugins/blueimp/jquery.blueimp-gallery",
        // "angular-mocks" : "angular/angular-mocks", // unit test only
        "param": "param",
         "inspinia" : "inspinia",
        // plug
        //"BMapAPI" : "BMapAPI",  // "http://api.map.baidu.com/api?v=2.0&ak=NzvT0ldO7tjdbGFfRXQGm0Hn",
        //"BMAP" : "plugins/baiduMap/api",
        "toastr" : "plugins/toastr/toastr",
        "angular-animate" : "angular/angular-animate",

        // module
        "creditinfobundles" : "../../modules/creditinfobundles",
        // mock
        'mock':'http://mockjs.com/dist/mock'
    },
    map: {
        '*': {
            'css': '../../resource/lib/css.js' // or whatever the path to require-css is
        }
    },
    shim: {
        "angular" :  {  deps :["jquery"],exports: "angular" },
      //  "angular-mocks" :{ deps : ["angular"] },
      //  "angular-animate" :
        "jquery" : { exports: "$" },
        "bootstrap" : ["jquery"],
        "ui-router": ["angular"],
        "ui-bootstrap" : ["angular"],
        "inspinia" : ["jquery"],
       //  "icheck" : ["angular","jquery"],
       // "BMapAPI" : ["jquery"],
       //  "BMAP" : ["jquery","BMapAPI"],
       //  "pace": ["jquery"] ,
       // "chosen":  ["jquery"],
        "datetimepicker": {deps: ["jquery"] },
        "datetimepicker-zh-CN": {  deps: ["datetimepicker", "jquery"] }
    }
});

 //  "app/config",   main.controller.js

require([
        // angularjs
        "angular", "jquery",  "bootstrap" ,"ui-router", "ui-bootstrap" ,"toastr",  "inspinia",
        //mock
        'mock', 'mockDate',   //  fake Date
        //app
        "app/base", "app/init", "app/route",  "app/service", "app/main.controller", "app/directives",
        //Modules
        "creditinfobundles/creditinfobundles.register" ,"creditinfobundles/creditinfobundles.controller" , "creditinfobundles/creditinfobundles.routes",//  "creditinfobundles/creditinfobundles.directives",
        //plug
        "datetimepicker", "datetimepicker-zh-CN",
        //css
        "css!/resource/css/plugins/toastr/toastr.min.css",
        "css!/resource/js/plugins/datetimepicker/bootstrap-datetimepicker.min.css",
        "css!/resource/css/plugins/timeline/style.css",
        "css!/resource/css/plugins/ui-slider/style.css",
        "css!/resource/css/animate.css",
        "css!/resource/css/style.css"
    ]
    ,function (angular) {
        var AppConfig = require("app/base");
        angular.bootstrap(document, [AppConfig.applicationModuleName]);
    }
);
