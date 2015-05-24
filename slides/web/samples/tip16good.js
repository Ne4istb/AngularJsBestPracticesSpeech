function TodoService($http) {

   var baseUrl = "http://localhost:8080/todos/";

   var create = function (item) {
      return $http.post(baseUrl, item)
         .then(function (response) {
            return response.data;
         });
   };
   //...
}