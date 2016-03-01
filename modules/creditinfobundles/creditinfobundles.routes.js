define(["angular","creditinfobundles/creditinfobundles.register" ], function (angular) { 
// 'use strict';
// // Setting up route
	angular.module('creditinfobundles').config(["$stateProvider", 
	  function ($stateProvider) {
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
              templateUrl: "modules/creditinfobundles/views/list.html"
            }) 
	  }
	]); 
});