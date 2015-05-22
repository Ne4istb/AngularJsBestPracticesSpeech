// todo-item.html
//...
<input type="text" ng-model="task.task"/>
<div class="delete-item"></div>
//...

// todo-item-directive.js
function todoItem() {
   var link = function (scope, element) {
      //...
      element.find('input').on('change', updateItem);
      angular
         .element(element[0].querySelector('.delete-item'))
         .on('click', deleteItem);
   };
   return {
      restrict: 'E',
      templateUrl: 'todo/todo-item.html',
      link: link
   };
}