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


angular.module('ng-iscroll', []).directive('ngIscroll', function ()
{
    return {
        replace: false,
        restrict: 'A',
        link: function (scope, element, attr)
        {
            // default timeout
            var ngiScroll_timeout = 5;


            // default options
            var ngiScroll_opts = {
                snap: true,
                momentum: true,
                hScrollbar: false
            };

            // scroll key /id
            var scroll_key = attr.ngIscroll;

            if (scroll_key === '') {
                scroll_key = attr.id;
            }

            // if ng-iscroll-form='true' then the additional settings will be supported
            if (attr.ngIscrollForm !== undefined && attr.ngIscrollForm == 'true') {
                ngiScroll_opts.useTransform = false;
                ngiScroll_opts.onBeforeScrollStart = function (e)
                {
                    var target = e.target;
                    while (target.nodeType != 1) target = target.parentNode;

                    if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
                        e.preventDefault();
                };
            }

            if (scope.$parent.myScrollOptions) {
                for (var i in scope.$parent.myScrollOptions) {
                    if (i === scroll_key) {
                        for (var k in scope.$parent.myScrollOptions[i]) {
                            ngiScroll_opts[k] = scope.$parent.myScrollOptions[i][k];
                        }
                    } else {
                        ngiScroll_opts[i] = scope.$root.myScrollOptions[i];
                    }
                }
            }

            // iScroll initialize function
            function setScroll()
            {
                if (scope.$parent.myScroll === undefined) {
                    scope.$parent.myScroll = [];
                }

                scope.$parent.myScroll[scroll_key] = new iScroll(element[0], ngiScroll_opts);
            }

            // new specific setting for setting timeout using: ng-iscroll-timeout='{val}'
            if (attr.ngIscrollDelay !== undefined) {
                ngiScroll_timeout = attr.ngIscrollDelay;
            }

            // watch for 'ng-iscroll' directive in html code
            scope.$watch(attr.ngIscroll, function ()
            {
                setTimeout(setScroll, ngiScroll_timeout);
            });

			// add ng-iscroll-refresher for watching dynamic content inside iscroll
			if(attr.ngIscrollRefresher !== undefined) {
				scope.$watch(attr.ngIscrollRefresher, function ()
				{
					if(scope.$parent.myScroll[scroll_key] !== undefined) scope.$parent.myScroll[scroll_key].refresh();
				});
			}
        }
    };
});
