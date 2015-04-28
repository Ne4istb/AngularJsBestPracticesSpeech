'use strict';

angular.module('todo', [])
    .controller('TodoListCtrl', function ($scope, $http, $document) {

        var baseUrl = "http://localhost:8080/todos/";

        $scope.todos = [];

        $http.get(baseUrl).then(function (response) {
            $scope.todos = response.data;
        });

        $scope.addTask = function () {
            blurNewTaskInput();
            createNewTodoItem();
        };

        var blurNewTaskInput = function () {
            var textFields = $document.find('input');
            textFields[0].blur();
        };

        var createNewTodoItem = function () {

            validateItem($scope.newTask, function (task) {
                prepareData(task, function (itemData) {
                    return createItem(itemData).then(onItemCreated);
                });
            }, onCreateItemError);

        };

        var validateItem = function (task, success, error) {

            if (!task) {
                error('New task is empty');
                return;
            }

            // Some extra validation

            success(task);
        };

        var prepareData = function (task, callback) {

            var newTodoItem = {task: task, type: "urgent", done: false};

            // Some more preparation

            callback(newTodoItem);
        };

        var createItem = function (itemData) {
            return $http.post(baseUrl, itemData);
        };

        var onItemCreated = function (response) {
            $scope.todos.unshift(response.data);
            $scope.newTask = undefined;
        };

        var onCreateItemError = function (error) {
            console.log(error);
        };

        $scope.getUnfinishedTasksCount = function () {

            var unfinished = $scope.todos.filter(function (task) {
                return !task.done;
            });

            return unfinished.length;
        }
    });

