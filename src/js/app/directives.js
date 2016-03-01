define(["app/init", "jquery"], function (angular,$) {
  
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
angular
    .module('MLP')  
    .directive('icheck', ["$timeout",icheck])
    .directive('chosen', ["$timeout",chosen])
    .directive('sliderbox',["sliderControl",sliderbox])
    
    
});