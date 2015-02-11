if (!global.hasOwnProperty('db')) {
	var mongoose = require('mongoose');

	var dbName = 'chatMEAN';

	// This is only application is executed on the local machine
	mongoose.connect('mongodb://localhost/' + dbName);

	global.db = {
		mongoose: mongoose,
		User: require('./User')(mongoose)
	}
};

module.exports = global.db;