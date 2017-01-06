var express = require('express');
var Blog = require('../models/Blog.js');
var Url = require('url');
var fs = require('fs');
var Markdown = require('markdown-js');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('bloglist', {id: 'blog'});
});

/* GET blog listing. */
router.get('/list', function(req, res, next) {
	var params = Url.parse(req.url, true).query;
	if(params.id == 0) {
		Blog.findAll(function(err, blogs){
			if(err) {
				return;
			}
			res.status(200).json({
				blogs: blogs
			});
		});
	} else {
		Blog.findByClassId(params.id, function(err, blogs){
			if(err) {
				return;
			}
			res.status(200).json({
				blogs: blogs
			});
		});
	}	
});

/* GET blog detail. */
router.get('/article', function(req, res, next) {
	var params = Url.parse(req.url, true).query;
	if(params.ajax == 'ture') {
		Blog.findByblogId(params.blogId, function(err, blog){
			if(err) {
				return;
			}
			blog.read += 1;
			var contentMd = fs.readFileSync('./views/blogs/' + params.blogId + '.md', 'utf8');
			var content = Markdown.makeHtml(contentMd);
			res.status(200).json({
				blog: blog,
				content: content
			});
			Blog.updateById(params.blogId, blog);
		});
	} else {
		res.render('blog', {id: 'blog'});
	}	
});
	

module.exports = router;
