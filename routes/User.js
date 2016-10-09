var UserModel = require('../src/UserModel.js');
var express = require('express');
var router = express.Router();

function getAllUser(req, res){
  UserModel.getAllUser(res);
}

function getUserByUsername(req, res)
{
	UserModel.getUserByUsername(req.params.username, res);
}

function addNewUser(req,res)
{
  UserModel.addUser(req, res);
}

function UserLogin(req,res)
{
  UserModel.login(req, res);
}

router.route('/users').get(getAllUser).post(getAllUser);

router.route('/users/:username').get(getAllUser);

router.route('/users/create').post(addNewUser);
router.route('/users/login').post(UserLogin);

module.exports = router;
