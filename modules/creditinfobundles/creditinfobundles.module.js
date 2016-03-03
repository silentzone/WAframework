var module = { 
	name : "./creditinfobundles"
}
// var directive = require(module.name + ".directive.js");

var app = require("config").registerModule("creditinfobundles",['ui.router', 'ui.bootstrap']); 
module.exports = console.log(app);
var controller = require(module.name + ".controller");
var routes = require(module.name + ".routes");
var directive = require(module.name + ".directive");
// Use Applicaion configuration module to register a new module 
 
app.config(["$stateProvider", "$urlRouterProvider" , routes]); // , "$ocLazyLoadProvider"
app.controller('creditinfobundles', ['$scope','$filter', '$location', '$http', 'httpRequest', 'logger', 'sliderControl',controller]) // .directive('directive', directive);

   
//module.exports= mod;   "$stateProvider", "$urlRouterProvider" , "$ocLazyLoadProvider"  