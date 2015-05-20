// todo-list-controller.js
function todoListController(todoService) {

   var vm = this;
   vm.todos = [];

   todoService.list().then(function (result) {
      vm.todos = result;
   });
   //...
}

// todo-service.js
function TodoService($http) {
   var baseUrl = "http://localhost:8080/todos/";
   var list = function () {
      return $http
         .get(baseUrl, config)
         .then(function (response) {
            return response.data;
         });
   };
   return {
      list: list
   };
}