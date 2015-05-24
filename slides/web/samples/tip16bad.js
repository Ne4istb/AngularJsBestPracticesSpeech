function TodoService($q, $http) {

   var baseUrl = "http://localhost:8080/todos/";

   var create = function (item) {

      var deferred = $q.defer();

      $http.post(baseUrl, item)
         .then(function (response) {
            deferred.resolve(response.data);
         })
         .catch(function (response){
            deferred.reject(response.data);
         });

      return deferred.promise;
   };
   //...
}