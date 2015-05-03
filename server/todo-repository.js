var uuid = require('uuid');
var notFoundError = require('./not-found-error');

TodoRepository = function () {

	var todos = [
		{id: "642809f3-d756-4bbe-9459-9c064b941bf6", task: "Write some code", type: "urgent", done: false},
		{id: "6bd1f835-8a3e-4250-ac86-d0f76957fd7f", task: "Sleep", type: "low", done: false},
		{id: "926aa610-0d39-4877-b28b-c4f6b7d87206", task: "Play with cat", type: "urgent", done: true},
		{id: "dc8bbdb9-dbdf-4f37-b01c-39f330ae8d80", task: "Bear with friends", type: "high", done: false}
	];

	this.list = function (query) {

		if (!query)
			return todos;

		var searchString = query.toLowerCase();

		return todos.filter(function (item) {
			var task = item.task.toLowerCase();
			return task.indexOf(searchString) >= 0;
		});
	};

	function getItemIndex(id) {
		var index = todos.map(function (e) {
			return e.id;
		}).indexOf(id);

		if (index < 0)
			throw new notFoundError("Todo with id " + id + " not found");

		return index;
	}

	this.get = function (id) {
		var index = getItemIndex(id);
		return todos[index];
	};

	this.update = function (id, item) {

		var index = getItemIndex(id);

		todos[index] = item;
		todos[index].id = id;
		return todos[index];
	};

	this.remove = function (id) {
		var index = getItemIndex(id);
		todos.splice(index, 1);
	};

	this.add = function (item) {

		item.id = uuid.v4();
		todos.unshift(item);

		return item;
	};
};

var todoRepository = new TodoRepository();
module.exports = todoRepository;