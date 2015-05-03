'use strict';

angular.module('todo')
.directive('todoItem', todoItem);

todoItem.$inject = ['$http'];

function todoItem($http) {

	var baseUrl = "http://localhost:8080";

	var link = function (scope, element) {

		var updateItem = function () {
			$http.put(baseUrl + '/todos/' + scope.task.id, scope.task);
		};

		var deleteItem = function () {
			$http.delete(baseUrl + '/todos/' + scope.task.id).then(onItemRemoved);
		};

		var onItemRemoved = function () {

			var controllerScope = scope.$parent.$parent;

			var index = getItemIndex(controllerScope.todos, id);

			if (index >= 0)
				controllerScope.todos.splice(index, 1);
		};

		var getItemIndex = function(list, id) {
			return list.map(function (e) {return e.id; }).indexOf(id);
		};

		element.find('input').on('change', updateItem);
		angular.element(element[0].querySelector('.delete-item')).on('click', deleteItem);
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