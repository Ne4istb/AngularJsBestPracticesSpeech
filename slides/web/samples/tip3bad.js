function todoListController(
   $scope, todos, todoService, currentUser) {

   $scope.todos = todos;
   $scope.tasksCount = getTasksCount();
   $scope.addTask = function () { ... };
   $scope.search = function () { ... };

   function getTasksCount() { ... }
}