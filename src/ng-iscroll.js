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
                nap: true,
                momentum: true,
                hScrollbar: false
            };

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

            // iScroll initialize function
            function setScroll()
            {
                myScroll = new iScroll(element[0], ngiScroll_opts);
            }

            // support for old method of setting timeout
            if (attr.ngIscroll !== "") {
                ngiScroll_timeout = attr.ngIscroll;
            }

            // new specific setting for setting timeout using: ng-iscroll-timeout='{val}'
            if (attr.ngIscrollDelay !== undefined) {
                ngiScroll_timeout = attr.ngIscrollDelay;
            }

            // watch for 'ng-iscroll' directive in html code
            scope.$watch(attr.ngIscroll, function (value)
            {
                setTimeout(setScroll, ngiScroll_timeout);
            });

        }
    };
});
