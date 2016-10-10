var PostModel = require('../src/PostModel.js');
var express = require('express');
var router = express.Router();

function getAllPost(req, res){
  PostModel.getAllPost(res);
}

function getPostByUserId(req, res)
{
	PostModel.getPostByUserId(req.params.user_id, res);
}

function addNewPost(req,res)
{
  UserModel.addPost(req, res);
}

router.route('/posts').get(getAllPost).post(getAllPost);

router.route('/posts/:user_id').get(getPostByUserId);

router.route('/posts/create').post(addNewPost);

module.exports = router;
