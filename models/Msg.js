var mongodb = require('./mongodb');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;

var msgSchema = new Schema({
	uin: String,
	content : String,
	date : String,
	time : String,
	replies : [{suin: String,
				ruin: String,
				// datetime: { type: String, default: moment(new Date()).format('YYYY-MM-DD HH:mm:ss') },
				date : String,
				time : String,
				content: String}]
});

var msgModel = mongoose.model("msg", msgSchema);
var msgDAO = function(){};

msgDAO.prototype.insert = function(obj, callback) {
	var msg = new msgModel(obj);
	msg.save(function(err, result){
		callback(err, result);
	});
};

msgDAO.prototype.updateById = function(_id, msg) {
	msgModel.update({_id: _id}, msg, function(err, result) {
        if(err) {
            console.log('Error:'+ err);
        }
	});
};

msgDAO.prototype.findById = function(id, callback) {
  msgModel.findOne({_id:id}, function(err, obj){
    callback(err, obj);
  });
};

msgDAO.prototype.findAll = function(callback) {
	msgModel.find().exec(function(err, result) {
        if(err) {
            console.log('Error:'+ err);
        }
        callback(err, result);
  });
};

module.exports = new msgDAO();
