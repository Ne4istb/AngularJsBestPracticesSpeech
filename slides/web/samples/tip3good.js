//app.js
//...
$routeProvider.when('/todo-list', {
   templateUrl: 'todo/todo-list.html',
   controller: 'TodoListCtrl',
   controllerAs: 'vm'
});
//...

//todo-list-controller.js
function todoListController(todos, todoService, currentUser) {

   var vm = this;

   vm.todos = todos;
   vm.unfinishedCount = getUnfinishedTasksCount();
   vm.addTask = addTask;
   vm.search = search;

   function getUnfinishedTasksCount() { ... }
   function addTask() { ... }
   function search() { ... }
}