/*!
Copyright (c) 2013 Brad Vernon <bradbury.vernon@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
angular.module("ng-iscroll",[]).directive("ngIscroll",function(){return{replace:!1,restrict:"A",link:function(scope,element,attr){function setScroll(){void 0===scope.$parent.myScroll&&(scope.$parent.myScroll=[]),scope.$parent.myScroll[scroll_key]=new IScroll(element[0],ngiScroll_opts)}var ngiScroll_timeout=5,ngiScroll_opts={snap:!0,momentum:!0,hScrollbar:!1,mouseWheel:!0},scroll_key=attr.ngIscroll;if(""===scroll_key&&(scroll_key=attr.id),void 0!==attr.ngIscrollForm&&"true"==attr.ngIscrollForm&&(ngiScroll_opts.useTransform=!1,ngiScroll_opts.onBeforeScrollStart=function(e){for(var target=e.target;1!=target.nodeType;)target=target.parentNode;"SELECT"!=target.tagName&&"INPUT"!=target.tagName&&"TEXTAREA"!=target.tagName&&e.preventDefault()}),scope.$parent.myScrollOptions)for(var i in scope.$parent.myScrollOptions)if(i===scroll_key)for(var k in scope.$parent.myScrollOptions[i])ngiScroll_opts[k]=scope.$parent.myScrollOptions[i][k];else ngiScroll_opts[i]=scope.$root.myScrollOptions[i];void 0!==attr.ngIscrollDelay&&(ngiScroll_timeout=attr.ngIscrollDelay),scope.$watch(attr.ngIscroll,function(){setTimeout(setScroll,ngiScroll_timeout)})}}});