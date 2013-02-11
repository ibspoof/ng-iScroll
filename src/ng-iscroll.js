angular.module('ng-iscroll', []).directive('ngIscroll', function() {
	return {
		replace: false,
		restrict: 'A',
		link: function(scope, element, attr){
			scope.$watch(attr.ngIscroll, function(value){
				new iScroll(document.querySelector('#wrapper'), {
					snap: true,
					momentum: true,
					hScrollbar: true
				});
			});
		}
	};
});