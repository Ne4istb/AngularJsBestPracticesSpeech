// todo-list.html
//...
<div>Count: {{vm.getUnfinishedTasksCount()}}</div>
//...

// todo-list-controller.js
function todoListController(todoService) {
   //...
   vm.unfinishedTasksCount = getUnfinishedTasksCount();

   function getUnfinishedTasksCount() {

      var unfinished = vm.todos.filter(function (task) {
         return !task.done;
      });

      return unfinished.length;
   }
   //...
}