define(["angular","ui-router","ui-bootstrap"], function (angular) {
// Init 
  var AppConfig = (function () { 
    var applicationModuleName = 'MLP';
    var applicationModuleVendorDependencies = [  'ui.router', 'ui.bootstrap', ]; // 'ui.utils', 'ngResource',
   
    var registerModule = function (moduleName, dependencies) { 
      angular.module(moduleName, dependencies || []);
   
      angular.module(applicationModuleName).requires.push(moduleName);
    }; 
    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule
    };
  })();

   return AppConfig; 
});