'use strict';

angular.module('todo', [])
.controller('TodoListCtrl', todoListController);

todoListController.$inject = ['$q', '$filter', '$scope', 'todos', 'todoService', 'currentUser'];

function todoListController($q, $filter, $scope, todos, todoService, currentUser) {

	var vm = this;

	vm.todos = todos;
	vm.unfinishedTasksCount = getUnfinishedTasksCount();
	vm.userName = $filter('uppercase')(currentUser.name);
	vm.addTask = addTask;
	vm.searchTodos = searchTodos;

	function addTask() {
		validateItem(vm.newTask)
		.then(prepareData)
		.then(createItem)
		.then(onItemCreated)
		.catch(onCreateItemError);
	}

	function validateItem(task) {

		if (!task)
			return $q.reject('New task is empty');

		// Some extra validation

		return $q.when(task)
	}

	function prepareData(task) {

		var newTodoItem = {task: task, type: "urgent", done: false};

		// Some more preparation

		return $q.when(newTodoItem);
	}

	function createItem(itemData) {
		return todoService.create(itemData);
	}

	function onItemCreated(item) {

		vm.todos.unshift(item);

		vm.newTask = undefined;
		vm.unfinishedTasksCount = getUnfinishedTasksCount();
	}

	function onCreateItemError(error) {
		console.log(error);
	}

	function getUnfinishedTasksCount() {

		var unfinished = vm.todos.filter(function (task) {
			return !task.done;
		});

		return unfinished.length;
	}

	function searchTodos(){
		todoService.list(vm.searchPattern).then(function(todos){
			vm.todos = todos;
		});
	}

	function onItemRemoved(event, id){

		var index = getItemIndex(id);

		if (index >= 0)
			vm.todos.splice(index, 1);
	}

	function getItemIndex(id) {
		return vm.todos.map(function (e) {
			return e.id;
		}).indexOf(id);
	}

	$scope.$on('todo.itemRemoved', onItemRemoved);
}

