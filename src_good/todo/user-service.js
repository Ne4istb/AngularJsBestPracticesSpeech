'use strict';

angular.module('todo')
	.service('userService', UserService);

	function UserService($http) {

		var baseUrl = "http://localhost:8080/user/";

		var getCurrentUser = function () {
			return $http.get(baseUrl).then(function (response) {
				return response.data;
			});
		};

		return {
			getCurrentUser: getCurrentUser
		};
	}