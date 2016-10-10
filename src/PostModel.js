var db_provider = require('../db_provider.js');
var db = db_provider.getDbProvider();
var exporter = db_provider.getExporter();

exports.getAllPost = function(res)
{
   var tests = [];

db.serialize(function() {

  db.each("SELECT * FROM post ORDER BY id DESC", function(err, row) {
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
  req.body.image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAB6CAMAAAAFxMRBAAAAWlBMVEX///9dXV1ZWVlUVFROTk5KSkpRUVG0tLTt7e35+fnp6enc3NxERETz8/PV1dW5ublra2uJiYmjo6N0dHSDg4Orq6vBwcHHx8dkZGSVlZXj4+N7e3udnZ3Pz8+ofVoXAAAC00lEQVRoge2ZjbKiMAyFodTKjyDCFdGr7/+aG7i6C0NbctoyOzvLeYBvMqdpkqZRtGvXrl27du3a9ReUFbfueOxuRRaa/HrGB5mMkof++QpHThslRTyRkKpJg6DLp0zihRL5LP3ZndCgR7zoPNHZRerRg+TF62zT2hD2O/jaw/k0FjY2nWzsTC+TFTbRE9dj7VfZRO/d2Ber3799v7iwb5Y8mUrecHbW89hx3OMJeWWZMhpzRdklFz0IzZiz4rPVGYS3jDT8SLQY+wEETqHnEPyIwY8Q/AK4Qr5AFylrEXYct0iql1DgFDqSjDlkOXiiBbOufCSL/wK+qecluyT+CGp2WY3Ba6ikf2E39AthA61idAVrF1i6QMmCmo5ZHkUN4EvSYOwoR+BYryDd+d3/jrKjlJ2MwmEYvTJLgILHlkG8AQBt/W+lrNCV44RenNbZJ+z+TPRapZ88XqSVtPouVOXOpsmrt6R70j982FRk7sbYxd1/C2AavrAxS6uqNfqStF6OU3FUlhMVCi2HU+X2B/TwhIYL4kedPRHH4KXjduF+WEMPOuAFl0aXllsVW/iFnnPe5m9retD4Ym1fMaMLqHpV6/uKGT0BMr4CR0Uynk1HB+hB3Lkod2ATnXWqJTibf6Q4GcnPwbk4OyPefkin9Z0R9i6fa+2VXniwiW5Nmax2NPxHwjpLN16BU+iW7vFwyvCppHke+PYyZZD4NrFfrO5g18E0goGPT71qPbsKEDiFrq+P5tkKkdD3VOd7P1eiYxdBXCFfdNf0GCpyXYXBtn1maQfUMOhBGjjjAcTTaclOA50nnejyfefS8vXSDAI3z2r7R2r5idEFykTKxeVUfQ4HX34EhLpD2lv078I39XzTbNk0z6twN3TZ6DatLZtWxVAtlLqFBo5ttS1s3b4b22qbpd13h0oXTbKQQsF17ECmG74YuN/ldpk+09n/5TZNH4y/AMGMJIueHkxsAAAAAElFTkSuQmCC';

db.serialize(function() {
  db.run("INSERT INTO post (post_user_id,caption,image) VALUES (?,?,?)",[req.body.post_user_id,req.body.caption,req.body.image]);
  db.each("SELECT * FROM post WHERE post_user_id = ? ORDER BY id ASC",[req.body.post_user_id],function(err, row) {
      tests.push(row);
  }, function() { // this callback is executed when the query completed
     res.json(tests.length > 0);
  });
});
}
