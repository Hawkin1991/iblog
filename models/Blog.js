var mongodb = require('./mongodb');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var blogSchema = new Schema({
	blogId: Number,
	classId: Number,
	title : String,
	coverImage : String,
	datetime : String,
	description: String,
	read: Number,
	comment: Number,
	reward: Number
});

var blogModel = mongoose.model("blog", blogSchema);
var blogDAO = function(){};

blogDAO.prototype.findAll = function(callback) {
	blogModel.find().exec(function(err, result) {
        if(err) {
            console.log('Error:'+ err);
        }
        callback(err, result);
	});
};

blogDAO.prototype.findByClassId = function(classId, callback) {
	blogModel.find({classId:classId}, function(err, obj){
		if(err) {
            console.log('Error:'+ err);
        }
		callback(err, obj);
	});
};

blogDAO.prototype.findByblogId = function(blogId, callback) {
	blogModel.findOne({blogId:blogId}, function(err, obj){
		callback(err, obj);
	});
};

blogDAO.prototype.updateById = function(blogId, data) {
	blogModel.update({blogId: blogId}, data, function(err, result) {
        if(err) {
            console.log('Error:'+ err);
        }
	});
};

module.exports = new blogDAO();