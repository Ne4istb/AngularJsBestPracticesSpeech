function addTask() {

   validateItem(vm.newTask, function (task) {
      prepareData(task, function (itemData) {
         return createItem(itemData, onItemCreated);
      });
   }, onCreateItemError);

}

function validateItem(task, success, error) {}
function prepareData(task, callback) {}
function createItem(itemData, success) {}
function onItemCreated(response) {}
function onCreateItemError(error) {}
