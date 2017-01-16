var express = require('express');
var Url = require('url');
var moment = require("moment");
var Msg = require('../models/Msg.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	var params = Url.parse(req.url, true).query;
	console.log(params);
	if (params.ajax == 'true') {
		Msg.findAll(function (err, msgs) {
			if (err) {
				
			}
			res.json(msgs);
		});
	} else {
		res.render('msg', {
			id: 'msg'
		});
	}
});

router.post('/add', function (req, res, next) {
	var json = req.body;
	var now = new Date();
	var msg = {
		uin: json.uin,
		content: json.content,
		date: moment(now).format('YYYY-MM-DD'),
		time: moment(now).format('HH:mm:ss')
	}
	Msg.insert(msg, function (err, result) {
		if (err) {
			return;
		}
		// console.log("result:" + result);
		res.json(result);
	});

});

router.post('/replay', function (req, res, next) {
	
});

module.exports = router;
