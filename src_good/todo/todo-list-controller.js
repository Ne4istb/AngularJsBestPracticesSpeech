'use strict';

angular.module('todo', [])
.controller('TodoListCtrl', todoListController);

todoListController.$inject = ['todos'];

function todoListController(todos) {
	var vm = this;
	vm.todos = todos;
}

