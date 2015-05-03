'use strict';

angular.module('todo')
	.service('todoService', TodoService);

	function TodoService($http) {

		var baseUrl = "http://localhost:8080/todos/";

		var list = function (query) {

			var config={};

			if (query)
				config.params = { query: query };

			return $http.get(baseUrl, config).then(function (response) {
				return response.data;
			});
		};

		var create = function (item) {
			return $http.post(baseUrl, item).then(function (response) {
				return response.data;
			});
		};

		var update = function (id, item) {
			return $http.put(baseUrl + id, item).then(function (response) {
				return response.data;
			});
		};

		var remove = function(id){
			return $http.delete(baseUrl + id);
		};

		return {
			list: list,
			create: create,
			update: update,
			delete: remove
		};
	}