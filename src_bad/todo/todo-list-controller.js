'use strict';

angular.module('todo', [])
.controller('TodoListCtrl', function ($scope, $http, $document) {

	var baseUrl = "http://localhost:8080/todos/";

	$scope.todos = [];

	$http.get(baseUrl).then(function (response) {
		$scope.todos = response.data;
	});

	$scope.addTask = function () {
		blurNewTaskInput();
		createNewTodoItem();
	};

	var blurNewTaskInput = function () {
		var textFields = $document.find('input');
		textFields[0].blur();
	};

	var createNewTodoItem = function () {

		var newTodoItem = {task: $scope.newTask, type: "urgent", done: false};

		return $http.post(baseUrl, newTodoItem).then(function (response) {
			var item = response.data;
			$scope.todos.unshift(item);
			$scope.newTask = undefined;
		});
	};

	$scope.getUnfinishedTasksCount = function () {

		var unfinished = $scope.todos.filter(function (task) {
			return !task.done;
		});

		return unfinished.length;
	}
});

