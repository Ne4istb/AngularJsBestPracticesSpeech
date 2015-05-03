'use strict';

angular.module('todo')
.directive('todoItem', todoItem);

todoItem.$inject = ['todoService'];

function todoItem(todoService) {

	var link = function (scope) {

		scope.updateItem = function(){
			todoService.update(scope.task.id, scope.task);
		};

		scope.deleteItem = function(){
			todoService
				.delete(scope.task.id)
				.then(notifyItemRemoved);
		};

		var notifyItemRemoved = function(){
			scope.$emit('todo.itemRemoved', scope.task.id);
		};
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