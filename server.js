var express = require('express');
var request = require('request');
var redis = require("redis");

var redisClient = redis.createClient('6379', 'redis')
var app = express();

app.get('/', function (req, res) {

    var mjURL = 'http://fake-intel:9090/chrisrules';

    request(mjURL, function (error, response, body) {
        redisClient.set('some key', 'Chris is the best');
        if (!error) {
            res.setHeader('content-type', 'text/javascript');
            res.send(body);
        } else {
            res.send('Couldnt reach MockingJay at', mjURL);
        }
        redisClient.get('some key', function (err, reply) {
            console.log('Got this important information from redis', reply)
        })
    })
});

var PORT = 8080;

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
