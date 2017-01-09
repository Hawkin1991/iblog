var mongoose = require('mongoose');
var host = '115.29.50.192';
// var host = 'localhost';

var dbOptions = {
	db: { native_parser: true },
	server: { poolSize: 5 },
	replset: { rs_name: 'myReplicaSetName' },
	user: 'zhj',
	pass: '!#123qwe'
}

var db = mongoose.connect('mongodb://' + host + ':1212/myweb', dbOptions, function(err, db) {
	console.log("connect mongodb sucess!");
});

exports.mongoose = mongoose;
exports.db = db;