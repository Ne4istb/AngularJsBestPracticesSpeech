// todo-list.html
//...
<div ng-repeat="tag in vm.tags">
    <div>{{tag.name}}</div>
    //...
</div>
//...

// todo-list-controller.js
function todoListController(todoService) {
    //...
    vm.tags = [
        {name: "First tag"},
        {name: "Second tag"},
        {name: "Another tag"},
        {name: "Last tag"},
    ];
    //...
}