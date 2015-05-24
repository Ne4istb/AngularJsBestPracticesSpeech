// todo-item-directive.js
function todoItem() {
   var link = function (scope, element) {
      //...
      var onItemRemoved = function () {

         var todoList = scope.$parent.$parent.todos;

         var index = getItemIndex(todoList, id);

         if (index >= 0)
            controllerScope.todos.splice(index, 1);
      };
   };
   //...
}