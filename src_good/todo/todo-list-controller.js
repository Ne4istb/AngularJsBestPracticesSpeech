'use strict';

angular.module('todo', [])
	.controller('TodoListCtrl', todoListController);

	todoListController.$inject = ['todos', 'todoService'];

	function todoListController(todos, todoService) {

		var vm = this;

		vm.todos = todos;
		vm.unfinishedTasksCount = getUnfinishedTasksCount();

		vm.addTask = addTask;

		function addTask() {

			var newTodoItem = {task: vm.newTask, type: "urgent", done: false};

			todoService
				.create(newTodoItem)
				.then(function onTodoItemCreated(item) {
					vm.todos.unshift(item);
					vm.newTask = undefined;
					vm.unfinishedTasksCount = getUnfinishedTasksCount();
				});
		}

		function getUnfinishedTasksCount (){

			var unfinished = vm.todos.filter(function (task) {
				return !task.done;
			});

			return unfinished.length;
		}
	}

