UserRepository = function () {

	this.getCurrentUser = function () {
		return {
			name: 'Nechitb'
		};
	};
};

var userRepository = new UserRepository();
module.exports = userRepository;