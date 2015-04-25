'use strict';

angular.module('main', [])
.controller('MainCtrl', mainController);

mainController.$inject = ['todos'];

function mainController(todos) {
	var vm = this;
	vm.todos = todos;
}

