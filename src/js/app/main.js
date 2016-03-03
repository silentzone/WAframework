// 依赖 angular  
// 依赖 index  route controll service app...
require("angular");
// require("app");
require("./controller");
require("./directives");
require("./route");
// 模块   
require("modules/creditinfobundles/creditinfobundles.module");

var AppConfig = require("config");
// console.log(angular.module(applicationModuleName)); 
angular.element(document).ready(function() {
	angular.bootstrap(document, [AppConfig.applicationModuleName]); 
});

