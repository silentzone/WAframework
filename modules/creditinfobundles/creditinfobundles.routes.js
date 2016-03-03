// define(["angular","creditinfobundles/creditinfobundles.register" ], function (angular) { 

// var mod = require("./creditinfobundles.module");
// console.log(mod);
// 'use strict';
// // Setting up route
//mod.config(["$stateProvider", "$ocLazyLoad",
 
 module.exports =  function ($stateProvider , $urlRouterProvider ) {  // , $ocLazyLoadProvider
    console.log("stateProvider" + $stateProvider);
  	// console.log($stateProvider);
    // Articles state routing
      $stateProvider
        //框架顶部导航
        .state('creditinfobundles', {
            abstract: true,
            url: "/creditinfobundles",
            templateUrl: "views/common/content.html"
            // templateUrl: "views/common/content_top_navigation.html"
            // templateProvider : function () { 
            //   console.log(1111); return "1111111";
            // }
         }) 
         .state('creditinfobundles.list', { 
          url: '/list',
          templateUrl: "modules/creditinfobundles/views/list.html",
            resolve: {
                // lazyLoader: function($q, $ocLazyLoad) {
                //       return $ocLazyLoad.load([
                //             {
                //                 files: [
                //                     'src/js/plugins/sound/inlineplayer.js'
                //                 ]
                //             }
                //       ]);   
                // }
            }
 

        }) 
  }
//]); 
// });


// $stateProvider.state('creditinfobundles', {
//         abstract: true,
//         url: "/creditinfobundles",
//         templateUrl: "views/common/content.html"
//         // templateUrl: "views/common/content_top_navigation.html"
//         // templateProvider : function () { 
//         //   console.log(1111); return "1111111";
//         // }
//     }) 
//     .state('creditinfobundles.list', {
//     url: '/list',
//     templateUrl: "modules/creditinfobundles/views/list.html",
//     resolve: {
//         lazyLoader: function($q, $ocLazyLoad) {
//             // var defer = $q.defer();
//             // require.ensure([], function() {
//             //     //var module = require('./tweet.module');
//             //    // $ocLazyLoad.load({ name: module.name });
//             //    // defer.resolve(module);
//             // });
//             // return defer.promise;
//         }
//     }
// }) 

// $routeProvider.when('/pp/:region?', {
//         templateUrl: require('./tweet-list.html'),
//         controller: 'TweetListController',
//         title: '冒泡',
//         resolve: {
//             lazyLoader: function($q, $ocLazyLoad) {
//                 var defer = $q.defer();
//                 require.ensure([], function() {
//                     var module = require('./tweet.module');
//                     $ocLazyLoad.load({ name: module.name });
//                     defer.resolve(module);
//                 });
//                 return defer.promise;
//             }
//         }
// });