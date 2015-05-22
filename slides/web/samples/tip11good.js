// todo-item-directive.js
function todoItem() {
   var link = function (scope, element) {
      //...
      var onItemRemoved = function () {
         scope.$emit('todo.itemRemoved', scope.task.id);
      };
   };
   //...
}

// todo-list-controller.js
function todoListController($scope, todos) {
   //...
   function onItemRemoved(event, id){
      var index = getItemIndex(id);
      if (index >= 0)
         vm.todos.splice(index, 1);
   }
   $scope.$on('todo.itemRemoved', onItemRemoved);
}
