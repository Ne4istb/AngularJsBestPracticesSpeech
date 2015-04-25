'use strict';

angular.module('todo')
.service('todoService', TodoService);

function TodoService($http) {

	var baseUrl = "http://localhost:8080/todos/";

	function list() {
		return $http.get(baseUrl).then(function (response) {
			return response.data;
		});
	}

	return {
		list: list
	};
}