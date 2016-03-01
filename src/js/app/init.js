define(["angular","app/base"], function (angular,base) {
	 var AppConfig = base;
	 angular.module(AppConfig.applicationModuleName, AppConfig.applicationModuleVendorDependencies)
	 // .config(function($stateProvider,$urlRouterProvider) {
		// 	$stateProvider.state('start', {
		// 		url: '/start',
		// 		templateUrl: "views/common/content_top_navigation.html"
		// 	})
	 // });
	 return angular; 
}); 