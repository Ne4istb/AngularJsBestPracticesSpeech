// todo-list.html
//...
<div ng-repeat="tag in vm.tags">
   <div>{{tag}}</div>
   //...
</div>
//...

// todo-list-controller.js
function todoListController(todoService) {
   //...
   vm.tags = [
      "First tag",
      "Second tag",
      "Another tag",
      "Last tag"
   ];
   //...
}