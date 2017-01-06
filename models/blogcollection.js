var mongodb = require('./mongodb');
var schema = mongodb.mongoose.Schema;

var blogCollectionSchema = new Schema({
name : String,
count : Integer
});

var blogCollection = mongodb.mongoose.model("blogCollection", blogCollectionSchema);
var blogCollectionDAO = function(){};

blogCollectionDAO.prototype.save = function(obj, callback) {
  var instance = new blogCollection(obj);
  instance.save(function(err){
    callback(err);
  });
};

module.exports = new blogCollectionDAO();