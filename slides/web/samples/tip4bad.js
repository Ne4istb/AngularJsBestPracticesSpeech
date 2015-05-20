// todo-list-controller.js
function todoListController($http) {

   var baseUrl = "http://localhost:8080/todos/";

   var vm = this;
   vm.todos = [];

   $http
      .get(baseUrl)
      .then(function (response) {
         vm.todos = response.data;
      });
}