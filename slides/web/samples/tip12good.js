// todo-item.html
//...
<input type="text"
   ng-model="task.task"
   ng-model-options="{ updateOn: 'blur' }"
   ng-change="updateItem()"/>

<div class="delete-item" ng-click="deleteItem()"></div>
//...
