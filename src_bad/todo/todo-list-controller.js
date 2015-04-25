'use strict';

angular.module('todo', [])
.controller('TodoListCtrl', function ($scope, $http, $document) {

	$scope.todos = [];

	$http.get("http://localhost:8080/todos/").then(function (response) {
		$scope.todos = response.data;
	});

	$scope.addTask = function(){
		var textFields = $document.find('input');
		textFields[0].blur();
	};
});

