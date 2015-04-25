'use strict';

angular.module('main', [])
.controller('MainCtrl', function ($scope, $http) {

	$scope.todos = [];

	$http.get("http://localhost:8080/todos/").then(function (response) {
		$scope.todos = response.data;
	});
});

