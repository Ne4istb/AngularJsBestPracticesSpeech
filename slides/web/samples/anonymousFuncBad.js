angular.module('todo', [])
.controller('TodoListCtrl', function ($scope) {
	//...
	$scope.$watch('todos', function () {
		//...
	}, true);
});