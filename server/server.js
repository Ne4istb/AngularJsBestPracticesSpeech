var express = require('express');
var bodyParser = require('body-parser');
var todoRepository = require('./todo-repository');
var users = require('./user-repository');
var notFoundError = require('./not-found-error');

var app = express();
app.use(bodyParser.json({type: 'application/json'}));

app.get('/user', function (request, response) {
	var result = users.getCurrentUser();
	response.send(result);
});

app.get('/todos/:id', function (request, response, next) {
	try {
		var result = todoRepository.get(request.params.id);
		response.send(result);
	}
	catch (error) {
		next(error);
	}
});

app.delete('/todos/:id', function (request, response, next) {
	try {
		todoRepository.remove(request.params.id);
		response.status(204).end();
	}
	catch (error) {
		next(error);
	}
});

app.put('/todos/:id', function (request, response, next) {

	try {
		var result = todoRepository.update(request.params.id, request.body);
		response.send(result);
	}
	catch (error) {
		next(error);
	}
});

app.post('/todos', function (request, response) {
	var addedItem = todoRepository.add(request.body);
	response.status(201).send(addedItem);
});

app.get('/todos', function (request, response) {
	var query = request.query.query;
	var todoList = todoRepository.list(query);
	response.send(todoList);
});

app.use(function(error, request, response, next) {

	if (error instanceof notFoundError)
		response.status(404).send(error.message);
	else
		response.status(500).send(error.message);
});


app.use('/bad', express.static('src_bad'));
app.use('/good', express.static('src_good'));
app.use('/node_modules', express.static('node_modules'));

app.listen(8080);
