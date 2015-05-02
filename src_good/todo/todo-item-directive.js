'use strict';

angular.module('todo')
.directive('todoItem', todoItem);

function todoItem() {

	var link = function (scope) {
		scope.changeMode = function(){
			scope.editMode = !scope.editMode;
		}
	};

	return {
		restrict: 'E',
		templateUrl: 'todo/todo-item.html',
		scope: {
			task: '='
		},
		link: link
	};
}