<div ng-repeat="task in vm.todos | orderBy: 'done'">
    <todo-item task="task"></todo-item>
</div>
