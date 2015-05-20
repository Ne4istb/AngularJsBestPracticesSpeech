angular.module('todo', [])
    .controller('TodoListCtrl', todoListController);

function todoListController($scope) {
    //..

	var onTodosChanged = function () {
		//...
	};

	$scope.$watch('todos', onTodosChanged, true);
}