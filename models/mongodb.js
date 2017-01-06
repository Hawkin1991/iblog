var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/myweb', function(err, db) {
	console.log("连接成功");
});

exports.mongoose = mongoose;
exports.db = db;