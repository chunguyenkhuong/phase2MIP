var PostsData = require('../src/PostsData');
var express = require('express');
var router = express.Router();

function getPosts(req, res){
	res.json(PostsData.getPosts());
}

router.route('/posts')
	.get(getPosts);

module.exports = router;
