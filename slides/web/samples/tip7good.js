// todo-list.html
//...
<div>Count: {{vm.unfinishedCount}}</div>
//...

// todo-list-controller.js
function todoListController(todoService) {
   //...
   vm.unfinishedCount = getUnfinishedTasksCount();

   function getUnfinishedTasksCount() {

      var unfinished = vm.todos
         .filter(function (task) {
            return !task.done;
         });

      return unfinished.length;
   }
   //...
}