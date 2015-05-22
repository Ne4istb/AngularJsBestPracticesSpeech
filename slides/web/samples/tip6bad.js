// todo-list.html
//...
<form class="todo-item" ng-submit="vm.addTask()">
   <input id="new-task" ng-model="vm.newTask"/>
</form>
//...

// todo-list-controller.js
function todoListController($document, todoService) {
   //...
   vm.addTask = function () {
      blurNewTaskInput();
      createNewTodoItem();
   };
   var blurNewTaskInput = function () {
      var textFields = $document.find('input');
      textFields[0].blur();
   };
   //...
}