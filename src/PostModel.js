var db_provider = require('../db_provider.js');
var db = db_provider.getDbProvider();
var exporter = db_provider.getExporter();

exports.getAllPost = function(res)
{
   var tests = [];

db.serialize(function() {

  db.each("SELECT * FROM post ORDER BY id ASC", function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests);
  });
});
}

exports.getPostByUserId= function(user_id,res){
  var tests = [];

db.serialize(function() {

  db.each("SELECT * FROM user WHERE post_user_id = $post_user_id ORDER BY id ASC",[user_id],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests);
  });
});
}

exports.addPost= function(req,res){
  var tests = [];

db.serialize(function() {
  db.run("INSERT INTO post (post_user_id,caption,image) VALUES (?,?,?)",[req.body.post_user_id,req.body.caption,req.body.image]);
  db.each("SELECT * FROM post WHERE post_user_id = ? ORDER BY id ASC",[req.body.post_user_id],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests.length > 0);
  });
});
}
