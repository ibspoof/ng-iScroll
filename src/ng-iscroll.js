angular.module('ng-iscroll', []).directive('ngIscroll', function() {
	return {
		replace: false,
		restrict: 'A',
		link: function(scope, element, attr){
			
			var ngScroll_timeout = 5;
			
			function setScroll() {
				myScroll = new iScroll(document.querySelector('#wrapper'), {
					nap: true,
					momentum: true,
					hScrollbar: false
				});
			}
			
			if (attr.ngIscroll !== "" && typeof(attr.ngIscroll)=='number') {
				ngScroll_timeout = attr.ngIscroll;
			}
			
            scope.$watch(attr.ngIscroll, function(value){
				fixSize();
				setTimeout(setScroll, ngScroll_timeout);
			});	
			
		}
	};
});