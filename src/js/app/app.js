var AppConfig = require("config"); 
// var angular = require("angular");
// webpack 中配置 angularjs 等 第三方库加载 

// var app = AppConfig.registerModule(AppConfig.applicationModuleName,AppConfig.applicationModuleVendorDependencies); 
// console.log(AppConfig);
module.exports = angular.module(AppConfig.applicationModuleName,AppConfig.applicationModuleVendorDependencies);
 