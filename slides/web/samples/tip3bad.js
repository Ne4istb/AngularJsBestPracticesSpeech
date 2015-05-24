//app.js
//...
$routeProvider.when('/todo-list', {
   templateUrl: 'todo/todo-list.html',
   controller: 'TodoListCtrl',
});
//...

//todo-list-controller.js
function todoListController(
   $scope, todos, todoService, currentUser) {

   $scope.todos = todos;
   $scope.tasksCount = getTasksCount();
   $scope.addTask = function () { ... };
   $scope.search = function () { ... };

   function getTasksCount() { ... }
}