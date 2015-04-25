'use strict';

angular.module('todo')
	.directive('blurOnSubmit', blurOnSubmit);

	function blurOnSubmit() {

		return function (scope, element) {

			var textFields = element.find('input');

			element.bind('submit', function() {
				textFields[0].blur();
			});
		};
	}