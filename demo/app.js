var App = angular.module('App', ['ng-iscroll']);

App.controller('Controller', function ($scope)
{
    // Defines additional options such as onScrollEnd and other runtime settings
    // exposed by iScroll can be defined per id attribute
    $scope.$parent.myScrollOptions = {
        snap: false,
        on: [
            { scrollEnd: function (e) {
                alert('finished scrolling wrapper');
            }},
        ]
    };

    // expose refreshiScroll() function for ng-onclick or other meth
    $scope.refreshiScroll = function ()
    {
        $scope.$parent.myScroll['wrapper'].refresh();
    };


});
