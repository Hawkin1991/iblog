var mongodb = require('./mongodb');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var albumSchema = new Schema({
	href: String,
	title : String,
	coverImage : String,
	images : [{title: String,
				description: String,
				source: String}],
	createDate : String,
	readCount : Number,
	commentCount : Number,
	rewardCount : Number
});

var albumModel = mongoose.model("album", albumSchema);
var albumDAO = function(){};

albumDAO.prototype.insert = function(obj, callback) {
	albumModel.insert(obj, function(err, result){
		callback(err, result);
	});
};

albumDAO.prototype.findByhref = function(href, callback) {
  albumModel.findOne({href:href}, function(err, obj){
    callback(err, obj);
  });
};

albumDAO.prototype.findAll = function(callback) {
	albumModel.find().exec(function(err, result) {
        if(err) {
            console.log('Error:'+ err);
        }
        callback(err, result);
  });
};

module.exports = new albumDAO();

//{ href: String, title : String, coverImage : String, images : { source : String }, create_date : { type: Date, default: Date.now}, readCount : Integer, commentCount : Integer, rewardCount : Integer }