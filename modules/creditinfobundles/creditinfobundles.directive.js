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