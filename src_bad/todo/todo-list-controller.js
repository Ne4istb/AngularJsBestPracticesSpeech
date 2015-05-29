'use strict';

angular.module('todo', [])
.controller('TodoListCtrl', function ($scope, $http, $document) {

	var baseUrl = "http://localhost:8080";

	$scope.$watch('todos', function(){
		$scope.todos = reorderTodoList($scope.todos);
	},true);

	$scope.todos = [];

	$http.get(baseUrl + '/todos').then(function (response) {
		$scope.todos = reorderTodoList(response.data);
	});

	var reorderTodoList = function(list){
		var result = [];
		list.forEach(function(item){
			if(!item.done)
				result.push(item);
		});

		list.forEach(function(item){
			if(item.done)
				result.push(item);
		});

		return result;
	};

	$http.get(baseUrl + '/user').then(function (response) {
		$scope.userName = response.data.name;
	});

	$scope.addTask = function () {
		blurNewTaskInput();
		createNewTodoItem();
	};

	var blurNewTaskInput = function () {
		var newTaskInput = angular.element($document[0].querySelector('#new-task'))[0];
		newTaskInput.blur();
	};

	var createNewTodoItem = function () {

		validateItem($scope.newTask, function (task) {
			prepareData(task, function (itemData) {
				return createItem(itemData).then(onItemCreated);
			});
		}, onCreateItemError);

	};

	var validateItem = function (task, success, error) {

		if (!task) {
			error('New task is empty');
			return;
		}

		// Some extra validation

		success(task);
	};

	var prepareData = function (task, callback) {

		var newTodoItem = {task: task, type: "urgent", done: false};

		// Some more preparation

		callback(newTodoItem);
	};

	var createItem = function (itemData) {
		return $http.post(baseUrl + '/todos', itemData);
	};

	var onItemCreated = function (response) {
		$scope.todos.unshift(response.data);
		$scope.newTask = undefined;
	};

	var onCreateItemError = function (error) {
		console.log(error);
	};

	$scope.getUnfinishedCount = function () {

		var unfinished = $scope.todos.filter(function (task) {
			return !task.done;
		});

		return unfinished.length;
	};

	$scope.searchTodos = function () {

		var config = {
			params: {query: $scope.searchPattern}
		};

		$http.get(baseUrl + '/todos', config).then(function (response) {
			$scope.todos = reorderTodoList(response.data);
		});
	};
});

