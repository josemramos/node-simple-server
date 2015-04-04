var express = require('express');
var jade = require('jade');
var app = express();
var port = 3000;

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index',
    { title: 'Test'});
});

app.get('/page-two', function(req, res){
  res.render('page-two',
    { title: 'Page Two'});
});


app.listen(port);