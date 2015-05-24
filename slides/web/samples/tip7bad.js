// todo-list.html
//...
<div>Count: {{vm.getUnfinishedCount()}}</div>
//...

// todo-list-controller.js
function todoListController(todoService) {
   //...
   vm.getUnfinishedCount = getUnfinishedTasksCount();

   function getUnfinishedTasksCount() {

      var unfinished = vm.todos
         .filter(function (task) {
            return !task.done;
         });

      return unfinished.length;
   }
   //...
}