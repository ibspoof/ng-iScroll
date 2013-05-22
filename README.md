ng-iScroller
============

AngularJS Module that enables iScroll 4.x to work using a directive

Demos
------------

See demo/ Directory

or

[Demo in JSFiddle](http://jsfiddle.net/C7k3d/1/)

Note: Recommended to be used with iOS or Android devices only


Dependencies
------------
- [AngularJS 1.0.x](http://angularjs.org/)
- [iScroll 4.x](https://github.com/cubiq/iscroll)   Version 4.2.x Recommended


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
<del> * Note: the 'id' and 'ng-iscroll' must on the same div element for this directive to work correctly</del>
 * See demo/demo_multiple_iscrolls.htm for how to use multiple iScroll divs on the same page


Options
-------------

Binding Delay: 
If you want to delay the iScroll binding due to having animations or using another JS Library to modify the Angular view you can add a timeout value by using the attribute ```ng-iscroll-delay='{delayInMiliseconds}'```.  The default delay is 5ms.
Note: the old method of setting the delay ```ng-iscroll='{delayInMiliseconds}'``` is still supported.

Forms:
Forms within an iScroll has certain issues with editing Text values or Select boxes.  To enable support for forms add the following option to the wrapper div: ```ng-iscroll-form='true'``` the default is set to 'false'

See demos/ directory for examples of both


Special Thanks
---------------

Thanks to the following help for submitting bugs and suggesting new features:

[Rodrigo Mesquita de Abreu](https://github.com/rodmabreu)

[Robert](https://github.com/rtpm)

[Andre Meyering](https://github.com/archer96)

[Brandon Benson](https://github.com/bensane)
