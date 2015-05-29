'use strict';

angular.module('todo')
	.directive('blurOnSubmit', blurOnSubmit);

	function blurOnSubmit() {

		return function (scope, element) {

			var blurInputs = function () {

				var textFields = element.find('input');

				for (var i=0; i < textFields.length; i++)
					textFields[i].blur();
         };

         element.bind('submit', blurInputs);
		};
	}