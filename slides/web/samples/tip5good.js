// app.js
//...
$routeProvider.when('/todo-list', {
   templateUrl: 'todo/todo-list.html',
   controller: 'TodoListCtrl',
   controllerAs: 'vm',
   resolve: {
      todos: function (todoService) {
         return todoService.list();
      }
   }
});
//...

// todo-list-controller.js
function todoListController(todos) {
   var vm = this;
   vm.todos = todos;
   //...
}