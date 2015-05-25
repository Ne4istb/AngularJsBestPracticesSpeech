// todo-list-controller.js
function todoListController($scope, todoService) {
   //...

   function onItemLoaded(newValue){

      if (!newValue)
         return;

      //process new value
      //value will not be changed anymore

      itemWatcher();
   }

   var itemWatcher = $scope.$watch('item', onItemLoaded);
   //...
}