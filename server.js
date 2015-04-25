var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('uuid');

var app = express();
app.use(bodyParser.json({type: 'application/json'}));

TodoRepository = function () {

	var todos = [
		{id: "642809f3-d756-4bbe-9459-9c064b941bf6", task: "Write some code", type: "urgent", done: false},
		{id: "6bd1f835-8a3e-4250-ac86-d0f76957fd7f", task: "Sleep", type: "low", done: false},
		{id: "926aa610-0d39-4877-b28b-c4f6b7d87206", task: "Play with cat", type: "urgent", done: true},
		{id: "dc8bbdb9-dbdf-4f37-b01c-39f330ae8d80", task: "Bear with friends", type: "high", done: false}
	];

	this.list = function () {
		return todos;
	};

	function getItemIndex(id) {
		var index = todos.map(function (e) {
			return e.id;
		}).indexOf(id);

		if (index < 0)
			throw new NotFoundError("Todo with id " + id + " not found");

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
		todos.push(item);

		return item;
	};
};

function NotFoundError(message) {
	this.name = "NotFoundError";
	this.message = (message || "");
}

NotFoundError.prototype = Error.prototype;

var repository = new TodoRepository();

app.get('/todos/:id', function (request, response, next) {
	try {
		var result = repository.get(request.params.id);
		response.send(result);
	}
	catch (error) {
		next(error);
	}
});

app.delete('/todos/:id', function (request, response, next) {
	try {
		repository.remove(request.params.id);
		response.status(204).end();
	}
	catch (error) {
		next(error);
	}
});

app.put('/todos/:id', function (request, response, next) {

	try {
		var result = repository.update(request.params.id, request.body);
		response.send(result);
	}
	catch (error) {
		next(error);
	}
});

app.post('/todos', function (request, response) {
	var addedItem = repository.add(request.body);
	response.status(201).send(addedItem);
});

app.get('/todos', function (request, response) {
	var todoList = repository.list();
	response.send(todoList);
});

app.use(function(error, request, response, next) {

	if (error instanceof NotFoundError)
		response.status(404).send(error.message);
	else
		response.status(500).send(error.message);
});

app.listen(8080);
