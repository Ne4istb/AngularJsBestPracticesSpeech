function todoListController(todos, todoService, currentUser) {

   var vm = this;

   vm.todos = todos;
   vm.unfinishedTasksCount = getUnfinishedTasksCount();
   vm.addTask = addTask;
   vm.search = search;

   function getUnfinishedTasksCount() { ... }
   function addTask() { ... }
   function search() { ... }
}