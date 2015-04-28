'use strict';

angular.module('todo', [])
    .controller('TodoListCtrl', todoListController);

todoListController.$inject = ['$q', 'todos', 'todoService'];

function todoListController($q, todos, todoService) {

    var vm = this;

    vm.todos = todos;
    vm.unfinishedTasksCount = getUnfinishedTasksCount();

    vm.addTask = addTask;


    function addTask() {
        validateItem(vm.newTask)
            .then(prepareData)
            .then(createItem)
            .then(onItemCreated)
            .catch(onCreateItemError);
    }

    function validateItem(task) {

        if (!task)
            return $q.reject('New task is empty');

        // Some extra validation

        return $q.when(task)
    }

    function prepareData(task) {

        var newTodoItem = {task: task, type: "urgent", done: false};

        // Some more preparation

        return $q.when(newTodoItem);
    }

    function createItem(itemData) {
        return todoService.create(itemData);
    }

    function onItemCreated(item) {

        vm.todos.unshift(item);

        vm.newTask = undefined;
        vm.unfinishedTasksCount = getUnfinishedTasksCount();
    }

    function onCreateItemError(error) {
        console.log(error);
    }

    function getUnfinishedTasksCount() {

        var unfinished = vm.todos.filter(function (task) {
            return !task.done;
        });

        return unfinished.length;
    }
}

