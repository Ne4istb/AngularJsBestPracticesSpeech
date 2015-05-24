function addTask(task) {
   validateItem(task)
       .then(prepareData)
       .then(createItem)
       .then(onItemCreated)
       .catch(onCreateItemError);
}

function validateItem(task) {}
function prepareData(task) {}
function createItem(itemData) {}
function onItemCreated(item) {}
function onCreateItemError(error) {}