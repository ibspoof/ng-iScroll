ng-iScroller
============

AngularJS Module that enables iScroll 4.x to work using a directive

[Demo](http://ibspoof.github.com/demos/ng-iscroll/)

[Demo in JSFiddle](http://jsfiddle.net/C7k3d/1/)

Note: Recommended to be used with iOS or Andriod device

Dependencies
------------
- [AngularJS 1.0.x](http://angularjs.org/)
- [iScroll 4.x](https://github.com/cubiq/iscroll)


Reporting Issues
-------------
- Issues can be reported at the Github project.

Usage
---------

* Include ng-iscroll.js or ng-iscroll.min.js in your html header or existing file before your application main js file
* Add 'ng-iscroll' to your Angular app's dependencies
 * Example ```var App = angular.module('App', ['ng-iscroll']);```

* Add directive `ng-iscroll` to the ```<div id="wrapper">```
 * Example: ```<div id="wrapper" ng-iscroll>```
 * Note: the 'id' and 'ng-iscroll' must on the same div element for this directive to work correctly
	 
	 
Options
-------------

If you want to delay the iScroll binding due to having animations or using another JS Library to modify the Angular view you can add a timeout value by using ```ng-iscroll='{timeoutValue}'```.  The default timeout is 5ms.
	

