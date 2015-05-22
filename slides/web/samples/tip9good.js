// todo-list.html
//...
<input type="text" class="search-input"
   ng-model="vm.searchPattern"
   ng-change="vm.searchTodos()"
   ng-model-options="{ debounce: {'default': 300, 'blur': 0} }"
   placeholder="search"/>
//...