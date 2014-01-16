var App = angular.module('App', ['ng-iscroll']);

App.controller('Controller', function ($scope)
{
    $scope.$parent.myScrollOptions = {
        'testWrap2': {
            snap: false,
            on: [
                { scrollEnd: function (e) {
                    alert('finished scrolling wrapper');
                }},
            ]
        },
        'wrapper3': {
            snap: false,
            on: [
                { scrollEnd: function (e) {
                    alert('finished scrolling wrapper');
                }},
            ]
        }
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
