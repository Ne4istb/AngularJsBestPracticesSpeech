// todo-list.html
//...
<form blur-on-submit ng-submit="vm.addTask()">
   <input id="new-task" ng-model="vm.newTask"/>
</form>
//...

// blur-on-submit-directive.js
function blurOnSubmit() {
   return function (scope, element) {

      var textFields = element.find('input');

      element.bind('submit', function() {
         textFields[0].blur();
      });
   };
}