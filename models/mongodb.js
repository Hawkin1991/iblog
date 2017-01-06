var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/myweb', function(err, db) {
	console.log("connect mongodb sucess!");
});

exports.mongoose = mongoose;
exports.db = db;