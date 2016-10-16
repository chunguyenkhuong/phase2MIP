var PostModel = require('../src/PostModel.js');
var express = require('express');
var router = express.Router();

function getAllPost(req, res){
  PostModel.getAllPost(res);
}

function getPostByUsername(req, res)
{
	PostModel.getPostByUsername(req.params.username, res);
}

function addNewPost(req,res)
{
  PostModel.addPost(req, res);
}

router.route('/posts').get(getAllPost).post(getAllPost);

router.route('/posts/:username').get(getPostByUsername);

router.route('/posts/create').post(addNewPost);

module.exports = router;
