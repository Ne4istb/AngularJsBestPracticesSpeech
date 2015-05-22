// todo-list.html
//...
<div>Count: {{vm.unfinishedTasksCount}}</div>
//...

// todo-list-controller.js
function todoListController(todoService) {
   //...
   vm.getUnfinishedTasksCount = getUnfinishedTasksCount;

   function getUnfinishedTasksCount() {

      var unfinished = vm.todos.filter(function (task) {
         return !task.done;
      });

      return unfinished.length;
   }
   //...
}