var UserModel = require('../src/UserModel.js');
var express = require('express');
var router = express.Router();

function getAllUser(req, res){
  UserModel.getAllUser(res);
}

function getUserByUsername(req, res)
{
	UserModel.addUser(req, res);
}

function addNewUser(req,res)
{

}

router.route('/users')
	.get(getAllUser);

router.route('/users/:username').get(getUserByUsername);

module.exports = router;
