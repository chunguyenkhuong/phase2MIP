var db_provider = require('../db_provider.js');
var db = db_provider.getDbProvider();
var exporter = db_provider.getExporter();

exports.getAllUser = function(res)
{

   var tests = [];

db.serialize(function() {

  db.each("SELECT * FROM user ORDER BY id ASC", function(err, row) {
      tests.push(row);
      console.log(row);
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

exports.addUser= function(req,res){
  var tests = [];

  

db.serialize(function() {
  db.run("INSERT INTO user (username,password,firstname,lastname) VALUES (?,?,?,?)",["khuongchu","khuong","Khuong","Chu"]);
  db.each("SELECT * FROM user WHERE username = $username ORDER BY id ASC",['khuongchu'],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests);
  });
});
}
