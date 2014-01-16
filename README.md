ng-iScroller v1.2
============

AngularJS Module that enables iScroll 5 to work using a directive.

Demos
------------

See demo/ Directory
Note: Recommended to be used with iOS or Android devices only


Dependencies
------------
- [AngularJS 1.0.x](http://angularjs.org/)
- [iScroll 5.x](https://github.com/cubiq/iscroll)


Reporting Issues
-------------
- Issues can be reported at the Github project.


Features
-------------

* Option to set time delay on binding of iScroll to dom
* Support for multiple iScrolls per page
	* See demo/demo_multiple_iscrolls.htm for how to use multiple iScroll divs on the same page
* Support for setting iScroll specific options via App Controller (v1.1)
	* See demo/app.js or demo/app_multi.js for how
* Support for iScroll 'refresh' and other functions via App Controller (v1.1)
* iScroll Options can be set via App Controller (v1.1)


Usage
---------

* Include ng-iscroll.js or ng-iscroll.min.js in your html header or existing file before your application main js file
* Add 'ng-iscroll' to your Angular app's dependencies
 * Example ```var App = angular.module('App', ['ng-iscroll']);```

* Add directive `ng-iscroll` to the ```<div id="wrapper">```
 * Example: ```<div id="wrapper" ng-iscroll>```


Options
-------------
#### HTML Directive Settings

**Binding Delay**:
If you want to delay the iScroll binding due to having animations or using another JS Library to modify the Angular view you can add a timeout value by using the attribute ```ng-iscroll-delay='{delayInMiliseconds}'```.  The default delay is 5ms.
Note: the old method of setting the delay ```ng-iscroll='{delayInMiliseconds}'``` is still supported.

**Naming of Instance**:
When multiple iScrolls are present on a single page and each needs different runtime settings or functions there is a need to identify each instance.  This is done either by setting the 'ng-iscroll="{instanceName}"' or if not set it will default to the id of the div.

*Note:* This breaks version 1.0's usage of the ng-iscroll value to define the delay in dom binding.  Please update your code to use ng-iscroll-delay to change the default delay.

See demos/ directory for examples of both


#### Angular Controller Settings

iScroll exposes both runtime and other functions that can change the appearance or behavior of the iScroll.  These can be set via the AppController to further configure iScroll.

Example:

HTML:
```
<div id="wrapper" ng-iscroll='wrapper' ng-iscroll-delay='50'>
	<button ng-click="refreshiScroll()">Refresh</button>
</div>
```

AppController:
```
$scope.$parent.myScrollOptions = {
    'list_wrapper': {
        snap: false,
        scrollbars: 'custom',
        fadeScrollbars: true,
        probeType: 2,
        interactiveScrollbars: true,
        on: [
            { beforeScrollStart: function () {
                if (this.y === 0) {
                    $scope.yStartFromZero = true;
                }

            }},
            { scrollEnd: function () {
                if ($scope.yStartFromZero && this.directionY === -1) {
                    this._execEvent("pullToRefresh");
                }
                $scope.yStartFromZero = false;
                $scope.infiniteScroll = false;
            }},
            { pullToRefresh: function () {
                console.log('Pull to Refresh!');
            }},
            { scroll: function () {
                if (!$scope.infiniteScroll && !search.loading && !search.endlist && (this.y <= this.maxScrollY + 800)) {
                    $scope.infiniteScroll = true;
                    search.__search();
                }
            }}
        ]
    }
};
$scope.refreshiScroll = function ()
{
	$scope.$parent.myScroll['wrapper'].refresh();
	alert('wrapper refreshed');
};
```

For more examples see the demo directory.


License
--------------

ng-IScroll is released under the [MIT License](http://opensource.org/licenses/MIT).


Special Thanks
---------------

Thanks to the following help for submitting bugs and suggesting new features:

[Rodrigo Mesquita de Abreu](https://github.com/rodmabreu)

[Robert](https://github.com/rtpm)

[Andre Meyering](https://github.com/archer96)

[Brandon Benson](https://github.com/bensane)

[João Ribeiro](https://github.com/JonnyBGod)
