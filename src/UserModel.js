var db_provider = require('../db_provider.js');
var db = db_provider.getDbProvider();
var exporter = db_provider.getExporter();

exports.getAllUser = function(res)
{
   var tests = [];

db.serialize(function() {

  db.each("SELECT * FROM user ORDER BY id ASC", function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests);
  });
});
}

exports.getUserByUsername= function(username,res){
  var tests = [];

db.serialize(function() {

  db.each("SELECT * FROM user WHERE username = $username ORDER BY id ASC",[username],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests);
  });
});
}

exports.login= function(req,res){
  var tests = [];

db.serialize(function() {
  db.each("SELECT * FROM user WHERE username = ? AND password = ? LIMIT 1",[req.body.username,req.body.password],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
    if(tests.length > 0)
    {
      res.json(tests[0]);
    }
    else
    {
      res.json(false);
    }
  });
});
}

exports.addUser= function(req,res){
  var tests = [];

db.serialize(function() {
  db.run("INSERT INTO user (username,password,firstname,lastname) VALUES (?,?,?,?)",[req.body.username,req.body.password,req.body.firstname,req.body.lastname]);
  db.each("SELECT * FROM user WHERE username = ? ORDER BY id ASC",[req.body.username],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests.length > 0);
  });
});
}
