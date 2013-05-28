var App = angular.module('App', ['ng-iscroll']);

App.controller('Controller', function ($scope)
{
    $scope.$parent.myScrollOptions = {
        'testWrap2': {
            snap: false,
            onScrollEnd: function ()
            {
                alert('finshed scrolling wrapper2');
            }},
        'wrapper3': {
            snap: false,
            onScrollEnd: function ()
            {
                alert('finshed scrolling wrapper3');
            }}
    };


    $scope.refreshiScroll3 = function ()
    {
        $scope.$parent.myScroll['wrapper3'].refresh();
        alert('wrapper3 refreshed');
    };


    $scope.refreshiScroll2 = function ()
    {
        $scope.$parent.myScroll['testWrap2'].refresh();
        alert('testWrap2 refreshed');
    };
});