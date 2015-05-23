//todo-list.html
//...
<div ng-repeat="task in todos">
    <todo-item task="task"></todo-item>
</div>
//...

//todo-list-controller.js
//...
vm.todos = reorderTodoList(vm.todos);
function reorderTodoList(list){
   var result = [];
   list.forEach(function(item){
      if(!item.done) result.push(item);
   });
   list.forEach(function(item){
      if(item.done) result.push(item);
   });
   return result;
}
//...
