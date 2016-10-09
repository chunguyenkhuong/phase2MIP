var express = require('express');
var posts = require('./routes/Post.js');
var users = require('./routes/User.js');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 80));
app.use(cors());
app.use('/', posts);
app.use('/', users);
app.get('/', function(req, res) {
	res.send("Hello world");
});
app.listen(app.get('port'), function() {

console.log('Node app is running on port', app.get('port'));

});
