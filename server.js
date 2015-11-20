var express = require('express');
var request = require('request');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {

  var mjURL = 'http://fake-intel:9090/intelligence/1986565xx';

  request(mjURL, function (error, response, body) {
    if (!error) {
      res.setHeader('content-type', 'text/javascript');
      res.send(body)
    }else{
      res.send('Couldnt reach MockingJay at', mjURL);
    }
  })
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
