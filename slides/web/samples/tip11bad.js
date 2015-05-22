// todo-item-directive.js
function todoItem() {
   var link = function (scope, element) {
      //...
      var onItemRemoved = function () {

         var controllerScope = scope.$parent.$parent;

         var index = getItemIndex(controllerScope.todos, id);

         if (index >= 0)
            controllerScope.todos.splice(index, 1);
      };
   };
   //...
}