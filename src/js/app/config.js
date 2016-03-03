// var AppConfig = (function () { 
//     var applicationModuleName = 'MLP';
//     var applicationModuleVendorDependencies = [ 'ui.router', 'ui.bootstrap' ]; // 'ui.utils', 'ngResource',
   
//     var registerModule = function (moduleName, dependencies) { 
//       angular.module(moduleName, dependencies || []);
   
//        angular.module(applicationModuleName).requires.push(moduleName);
//        return angular.module(applicationModuleName);

//     }; 
//     return {
//       applicationModuleName: applicationModuleName,
//       applicationModuleVendorDependencies: applicationModuleVendorDependencies,
//       registerModule: registerModule
//     };
// })();

var AppConfig = (function () { 
	var applicationModuleName = 'MLP';
	var applicationModuleVendorDependencies = ['ui.router', 'ui.bootstrap' ]
	//init  
	angular.module(applicationModuleName, applicationModuleVendorDependencies);
	var Config = function () {  
		this.applicationModuleName = applicationModuleName;  
 		this.applicationModuleVendorDependencies = applicationModuleVendorDependencies; 
 		
 		this.baseModule = angular.module(applicationModuleName);

 		Config.prototype.registerModule = function (moduleName,dependencies) { 
 
 			angular.module(applicationModuleName).requires.push(moduleName); 
 			angular.module(moduleName ,dependencies || []); // ,dependencies || []
 			return angular.module(moduleName);
 		}; 
 		 
	}
	return new Config(); 
})();

// AppConfig.applicationModuleName = 'MLP';
// AppConfig.applicationModuleVendorDependencies = ['ui.router', 'ui.bootstrap' ];
// AppConfig.registerModule = function (moduleName, dependencies) { 
//       angular.module(moduleName, dependencies || []); 
//       angular.module(applicationModuleName).requires.push(moduleName);
// }; 
module.exports = AppConfig
 