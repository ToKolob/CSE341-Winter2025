var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World, olha nois de novo chachando!');
})

app.get('/nunes', function (req, res) {
  res.send('My name is Nunes');
})

var server = app.listen(3000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})