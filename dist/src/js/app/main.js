/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// 依赖 angular  
	// 依赖 index  route controll service app...
	__webpack_require__(1);
	// require("app");
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(5);
	// 模块   
	__webpack_require__(6);
	
	var AppConfig = __webpack_require__(3);
	// console.log(angular.module(applicationModuleName)); 
	angular.element(document).ready(function() {
		angular.bootstrap(document, [AppConfig.applicationModuleName]); 
	});
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.angular;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var app = __webpack_require__(3).baseModule; 
	 
	function MainCtrl($rootScope, $scope, $location,httpRequest) { 
	    // $modal, $anchorScroll, $state, UserService, SessionService, $injector 
	    $scope.main.userName = "admin";
	    // BusinessDate=" + req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize
	    // httpRequest.getdemoAPI({ date : "2014-01-01" , pageindex : 1 , pagesize : 15 }, { done:"自定义成功提示" });
	}; 
	app.controller('MainCtrl', ["$rootScope", "$scope", "$location" ,MainCtrl]); // ,"httpRequest"
	// Error: [$injector:unpr] Unknown provider: httpRequestProvider <- httpRequest <- MainCtrl  注入错误 
	 

/***/ },
/* 3 */
/***/ function(module, exports) {

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
	 

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var app = __webpack_require__(3).baseModule; 
	// webpack 中需要加载 jquery 
	function icheck($timeout) { 
	    return {
	        restrict: 'A', 
	        require: 'ngModel',
	        link: function ($scope, element, $attrs, ngModel) {
	            return $timeout(function () {
	                var value;
	                value = $attrs['value'];
	
	                $scope.$watch($attrs['ngModel'], function (newValue) {
	                    $(element).iCheck('update');
	                })
	
	                return $(element).iCheck({
	                    checkboxClass: 'icheckbox_square-green',
	                    radioClass: 'iradio_square-green'
	
	                }).on('ifChanged', function (event) {
	                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
	                        $scope.$apply(function () {
	                            return ngModel.$setViewValue(event.target.checked);
	                        });
	                    }
	                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
	                        return $scope.$apply(function () {
	                            return ngModel.$setViewValue(value);
	                        });
	                    }
	                });
	            });
	        }
	    };
	}
	
	function chosen ($timeout) { 
	    return {
	        restrict: 'AE',
	        require: 'ngModel',
	        link: function ($scope, element, $attrs, ngModel) {
	
	              var selected = [];
	
	             element.chosen().change(function (event,option) {
	//                if(ngModel.$modelValue) {
	//                    console.log(ngModel.$modelValue);
	//                }
	////                selected.push( option.deselected || option.selected );
	////
	////               ngModel.$modelValue = selected.toString();
	//
	////                 $scope.$apply(function () {
	//////                    return  ngModel.$setViewValue(selected.toString());  //
	////                });
	//
	         });
	
	
	            $timeout(function () {
	                element.trigger("chosen:updated");
	
	               // 是否有设置外部数据集
	                var models;
	                if($attrs.model) {
	                    models = $scope[$attrs.model];
	                } else {
	                    return;
	                }
	               // //选中业务逻辑
	                (function () {
	                    function setSelected(str) {
	                        var elements = element[0].children;
	                        for(var i=0; i < elements.length; i++) {
	                            if(elements[i].text == str ) {
	                               //  console.log(elements[i].text);
	                                return elements[i].selected = true;
	                            }
	                        }
	                    }
	                    //  存在决议 设置选中
	                    if(ngModel.$modelValue && ngModel.$modelValue != "[]" ){
	                        ngModel.$modelValue = ngModel.$modelValue.replace(/[\[\]]| */g,'');
	//                        ngModel.$modelValue = ngModel.$modelValue.replace("]","");
	//                        ngModel.$modelValue = ngModel.$modelValue.replace("[","");
	                        var arr =  ngModel.$modelValue.split(",");
	                        for(var n = 0; n< arr.length; n++) {
	                            setSelected(arr[n]);
	                        }
	                        element.trigger("chosen:updated");
	                    }
	                })();
	                // end  选中
	
	
	            })
	
	        }
	    };
	}
	
	
	function sliderbox(sliderControl) {
	    return {
	        restrict: 'EA',
	        transclude: true,
	        replace: true,
	        template: '<div class="ui_slider">\
	                    <div class="ui_slider_top clearfix"> <span ng-click="sliderbox.close()" class="btn btn-white close_btn">关闭</span> <h2 class="title">{{ sliderbox.title }}</h2> </div>\
	                        <div ng-hide="sliderbox.templateSrc" class="ui_slider_transclude clearfix" ng-transclude>\
	                        </div>\
	                        <div class="ui_slider_nginclude" ng-include="sliderbox.templateSrc"></div>\
	                    </div> ',
	        link: function ($scope, elem, attrs) {  
	            $scope.sliderbox = {};
	            $scope.sliderbox.title = "";
	            $scope.sliderbox.close = function () {
	                sliderControl.toggle();
	                $scope.sliderbox.templateSrc = '';
	                $scope.BtnIng = null;
	            };
	            /* init */
	            var render = (function () {
	                var $ui_slider = $(".ui_slider");
	                var $ui_mask = $('<div class="ui-slider-mask hide"></div>');
	                var $mask = $(".ui-slider-mask").length > 0 ? $(".ui-slider-mask") : false;
	                var timer;
	                var timeControl = function (fn) {
	                    if (timer) return;
	                    timer = setTimeout(function () {
	                        clearTimeout(timer);
	                        timer = null;
	                        fn.apply(this, arguments);
	                    }, 800);
	                };
	                return {
	                    resize: function () {
	                        timeControl(function () {
	                            var outerHeight = $("#page-wrapper")[0].scrollHeight;
	                            var contentHeight = outerHeight - 2 * 50;
	                            $(".ui_slider_content").height(contentHeight);
	                        });
	                    },
	                    init: function () {
	                        timeControl(function () {
	                            if (!$mask) {
	                                $("#wrapper").append($ui_mask);
	                                $mask = $ui_mask;
	                            } 
	                            $(window).resize(function () {
	                                render.resize();
	                            });
	                        });
	                    },
	                    toggle: function (options) {
	                        if ($ui_slider.hasClass("ui_slider_open")) {
	                            $ui_slider.removeClass("ui_slider_open");
	                             $mask.addClass("hide").removeClass("fadeIn");
	                            $("body").removeClass("ui-slider-active");
	
	                        } else {
	                            $ui_slider.addClass("ui_slider_open");
	                             $mask.removeClass("hide").addClass("fadeIn");
	                            $("body").addClass("ui-slider-active");
	                            if (options) {
	                                sliderControl.settitle(options.title);
	                                sliderControl.setTemplateSrc(options.templateSrc);
	                            } else {
	                                sliderControl.setTemplateSrc("");
	                            }
	                        }
	                    }
	
	                };
	
	            })();
	            render.init();
	
	            sliderControl.toggle = render.toggle;
	            /* api */
	            sliderControl.settitle = function (name) {
	                $scope.sliderbox.title = name;
	            };
	            sliderControl.setTemplateSrc = function (src) {
	                $scope.sliderbox.templateSrc = src;
	                render.resize();
	            };
	        },
	        // controller: function ($scope) { 
	        // }
	    };
	}
	
	
	/**
	 *
	 * Pass all functions into module
	 */
	app.directive('icheck', ["$timeout",icheck])
	    .directive('chosen', ["$timeout",chosen])
	    .directive('sliderbox',["sliderControl",sliderbox]);
	 

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var app = __webpack_require__(3).baseModule; 
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
	       

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var module = { 
		name : "./creditinfobundles"
	}
	// var directive = require(module.name + ".directive.js");
	
	var app = __webpack_require__(3).registerModule("creditinfobundles",['ui.router', 'ui.bootstrap']); 
	module.exports = console.log(app);
	var controller = __webpack_require__(7)(module.name + ".controller");
	var routes = __webpack_require__(9)(module.name + ".routes");
	var directive = __webpack_require__(11)(module.name + ".directive");
	// Use Applicaion configuration module to register a new module 
	 
	app.config(["$stateProvider", "$urlRouterProvider" , routes]); // , "$ocLazyLoadProvider"
	app.controller('creditinfobundles', ['$scope','$filter', '$location', '$http', 'httpRequest', 'logger', 'sliderControl',controller]) // .directive('directive', directive);
	
	   
	//module.exports= mod;   "$stateProvider", "$urlRouterProvider" , "$ocLazyLoadProvider"  

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./creditinfobundles.controller": 8
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 7;


/***/ },
/* 8 */
/***/ function(module, exports) {

	// define(["angular","creditinfobundles/creditinfobundles.register" ,"mock.angular"], function (angular) {  // "mock.angular" mock angular 数据模拟器 
	// 'use strict';
	//   var creditinfobundles = angular.module('creditinfobundles');
	//   var Mock = require("mock.angular");
	//    // mock
	//   Mock.mockjax(creditinfobundles);
	
	
	// 单元测试 
	//  1 函数依赖是否都传入 
	//  2 内容逻辑 
	
	
	var controller = function($scope, $filter, $location, $http ,httpRequest, logger, sliderControl) { 
	        //modal
	        $scope.open = function () {
	            sliderControl.toggle({
	                title: "摘要",
	                templateSrc: "modules/creditinfobundles/views/common/detail.html" //modules/creditinfobundles/views/list.html"
	            });
	        };
	
	
	        // template
	        var htmlUrl = { 
	            "listview" : "modules/creditinfobundles/views/common/listview.html",
	            "timelineview" : "modules/creditinfobundles/views/common/timelineview.html"
	        }
	        //default template
	        $scope.template = { url : htmlUrl.timelineview , active : "timeline" };
	        //视图切换
	        $scope.viewChange = (function () {
	            var ret = {};
	            ret.list = function () {
	              $scope.template = {
	                url : htmlUrl.listview ,
	                active : "list"
	              }
	            }
	            ret.timeline = function () {
	              $scope.template = {
	                url :  htmlUrl.timelineview,
	                active : "timeline"
	              }
	
	            }
	            return ret;
	        })();
	        // timeline 详情点击
	        $scope.showdetial = function () {
	            $scope.open();
	        }
	
	
	        var preDate = new Date();
	        var strPreDate = preDate.getFullYear() + "-" + (preDate.getMonth() + 1 < 10 ? "0" + (preDate.getMonth() + 1) : (preDate.getMonth() + 1) ) + "-" + (preDate.getDate() < 10 ? "0" + preDate.getDate() : preDate.getDate());
	        $scope.currentDate = strPreDate;
	
	        // $scope.sortItems = {}; //存放排序字段 状态
	        // $scope.sortCurrentitem = {name: "suspendFlag", status: true}
	        // var orderBy = $filter('orderBy');
	        // $scope.sortTable = function (str) {
	        //     $scope.sortCurrentitem.name = str;
	        //     toggleArrow();
	        //     function toggleArrow() {
	        //         if ($scope.sortItems[str] == null) {
	        //             $scope.sortCurrentitem.status = false;
	        //         } else {
	        //             $scope.sortCurrentitem.status = $scope.sortItems[str];
	        //         }
	        //         $scope.sortCurrentitem.status = $scope.sortCurrentitem.status ? false : true;
	        //         for (var a in $scope.sortItems) {
	        //             $scope.sortItems[a] = null;
	        //         }
	        //         $scope.sortItems[str] = $scope.sortCurrentitem.status;
	        //     }
	        //     $scope.totalCollection = orderBy($scope.totalCollection, $scope.sortCurrentitem.name, $scope.sortCurrentitem.status);
	
	        // };
	        // 日期改变事件 
	        // $scope.dateChange = function () {
	        //     getPostdatabundles();
	        // };
	
	        //
	        function getPostdatabundles() {
	            if($scope.currentDate.length !== 10 ) return console.log("报文日期格式不正确");
	
	            httpRequest.getPostdatabundles({ pageindex :  $scope.currentPage  , pagesize : $scope.numPerPage,  businessDate : $scope.currentDate }).then(function (data) {
	
	                    $scope.totalCollection = data.postDataBundleInfos;
	                   // console.log($scope.totalCollection);
	                    $scope.totalCount = data.total;
	                    
	                    if ( !$scope.totalCollection && !($scope.totalCount < 1) ) return;
	                    // 绑定需要排序的字段 和排序状态
	                    // for (var a in $scope.totalCollection[0]) { 
	                    //     $scope.sortItems[a] = null;
	                    // }
	
	                    $scope.currentRow = $scope.totalCollection[0];
	           
	
	                //}
	            });
	
	
	        }
	        // 列表数据初始化
	        getPostdatabundles();// 初始化 分页方法不需要原本是在分页方法中调用 
	        // 列表点击事件
	        $scope.rowClick = function (item) {
	                 $scope.currentRow = item;
	                 $scope.open();
	        };
	
	        //列表分页数据
	        // (function () {
	        //     $scope.numPerPageOpt = [15, 20, 30, 50, 100];
	        //     $scope.numPerPage = $scope.numPerPageOpt[0];
	        //     $scope.currentPage = 1;
	        //     $scope.select = function (page) {
	
	        //         $scope.currentPage = page || $scope.currentPage;
	        //         // req.date + "&PageIndex=" + req.pageindex + "&PageSize=" + req.pagesize
	
	        //         getPostdatabundles();
	        //         // httpreq.success().error(function () {
	        //         //     return logger.logError('列表请求失败！');
	        //         // });
	        //     }
	        //     $scope.select();
	        //     //切换一页显示的条数
	        //     $scope.onNumPerPageChange = function () {
	        //         $scope.currentPage = 1
	        //         $scope.select();
	        //         return;
	        //     };
	        // })();
	
	        $scope.search = function () {
	            $scope.select(); 
	        }
	
	
	        // 菜单
	        $scope.toolbar = {
	                showdetial : function () {
	                        if(!$scope.currentRow.id) {
	                            return logger.logError("请选中一行报文.");
	                        } 
	                        httpRequest.getPostdatabundlesById($scope.currentRow.ID).then(function (data) {
	
	                           $scope.bundlesDetial = data.PostDataBundleInfo;
	                          // console.log("报文id" + $scope.bundlesDetial.ID );
	                           $scope.open();
	
	                        });
	                },
	                report : function () {
	                     if(!$scope.currentRow.id) {
	                            return logger.logError("请选中一行报文.");
	                     }
	                    // console.log("报文id" + $scope.currentRow.ID );
	                     httpRequest.putPostdatabundle($scope.currentRow.ID,{done: "上报成功"});
	                }
	        }
	
	}
	
	module.exports = controller;
	
	  // creditinfobundles.controller('creditinfobundles', ['$scope','$filter', '$location', '$http' ,  'httpRequest', 'logger', 'sliderControl', // '$stateParams',  'Authentication', 'Articles',
	     
	  // ]);
	
	
	
	
	// });


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./creditinfobundles.routes": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 9;


/***/ },
/* 10 */
/***/ function(module, exports) {

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./creditinfobundles.directive": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 11;


/***/ },
/* 12 */
/***/ function(module, exports) {

	// define(["angular","jquery","creditinfobundles/creditinfobundles.register"], function (angular,$) {
	
	
	
	/**
	 * 左侧滑动编辑层
	 * @returns {{restrict: string, controller: *[], templateUrl: string, replace: boolean}}
	 * 调用方法
	 *     sliderControl.toggle({
	            title: '分支基本信息',
	            templateSrc: 'views/templates/branch-basic.html'
	        });
	 */
	// require("sliderControl"); 
	module.exports = function sliderbox(sliderControl) { 
	    return {
	        restrict: 'EA',
	        transclude: true,
	        replace: true,
	        template: '<div class="ui_slider">\
	                    <div class="ui_slider_top clearfix"> <span ng-click="sliderbox.close()" class="btn btn-white close_btn">关闭</span> <h2 class="title">{{ sliderbox.title }}</h2> </div>\
	                        <div ng-hide="sliderbox.templateSrc" class="ui_slider_transclude clearfix" ng-transclude>\
	                        </div>\
	                        <div class="ui_slider_nginclude" ng-include="sliderbox.templateSrc"></div>\
	                    </div> ',
	        link: function ($scope, elem, attrs) { 
	            console.log($scope);
	            $scope.sliderbox = {};
	            $scope.sliderbox.title = "";
	            $scope.sliderbox.close = function () {
	                sliderControl.toggle();
	                $scope.sliderbox.templateSrc = '';
	                $scope.BtnIng = null;
	            };
	            /* init */
	            var render = (function () {
	                var $ui_slider = $(".ui_slider");
	                var $ui_mask = $('<div class="ui-slider-mask hide"></div>');
	                var $mask = $(".ui-slider-mask").length > 0 ? $(".ui-slider-mask") : false;
	                var timer;
	                var timeControl = function (fn) {
	                    if (timer) return;
	                    timer = setTimeout(function () {
	                        clearTimeout(timer);
	                        timer = null;
	                        fn.apply(this, arguments);
	                    }, 800);
	                };
	                return {
	                    resize: function () {
	                        timeControl(function () {
	                            var outerHeight = $("#page-wrapper")[0].scrollHeight;
	                            var contentHeight = outerHeight - 2 * 50;
	                            $(".ui_slider_content").height(contentHeight);
	                        });
	                    },
	                    init: function () {
	                        timeControl(function () {
	                            if (!$mask) {
	                                $("#wrapper").append($ui_mask);
	                                $mask = $ui_mask;
	                            }
	
	                            $(window).resize(function () {
	                                render.resize();
	                            });
	                        });
	                    },
	                    toggle: function (options) {
	                        if ($ui_slider.hasClass("ui_slider_open")) {
	                            $ui_slider.removeClass("ui_slider_open");
	                            $mask.addClass("hide").removeClass("fadeIn");
	                            $("body").removeClass("ui-slider-active");
	
	                        } else {
	                            $ui_slider.addClass("ui_slider_open");
	                            $mask.removeClass("hide").addClass("fadeIn");
	                            $("body").addClass("ui-slider-active");
	                            if (options) {
	                                sliderControl.settitle(options.title);
	                                sliderControl.setTemplateSrc(options.templateSrc);
	                            } else {
	                                sliderControl.setTemplateSrc("");
	                            }
	                        }
	                    }
	
	                };
	
	            })();
	            render.init();
	
	            sliderControl.toggle = render.toggle;
	            /* api */
	            sliderControl.settitle = function (name) {
	                $scope.sliderbox.title = name;
	            };
	            sliderControl.setTemplateSrc = function (src) {
	                $scope.sliderbox.templateSrc = src;
	                render.resize();
	            };
	        },
	        // controller: function ($scope) {
	        //     // $scope.bundlesDetial = "1111111111111111111" 
	        // }
	    };
	} 
	
	//var creditinfobundles = angular.module('creditinfobundles');  
	/**
	 *
	 * Pass all functions into module
	 */
	// creditinfobundles.directive('sliderbox', sliderbox)
	    
	    
	// });

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map