// app.js
//...
$routeProvider.when('/todo-list', {
   templateUrl: 'todo/todo-list.html',
   controller: 'TodoListCtrl'
});
//...

// todo-list-controller.js
function todoListController(todoService) {

   var vm = this;

   todoService.list().then(function (result) {
      vm.todos = result;
   });
   //...
}