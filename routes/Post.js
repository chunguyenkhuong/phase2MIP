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

function getPostByTag(req, res)
{
	PostModel.getPostByTag(req.params.tag, res);
}

function addNewPost(req,res)
{
  PostModel.addPost(req, res);
}

router.route('/posts').get(getAllPost).post(getAllPost);

router.route('/posts/:username').get(getPostByUsername);
router.route('/posts/tag/:tag').get(getPostByTag);


router.route('/posts/create').post(addNewPost);

module.exports = router;
