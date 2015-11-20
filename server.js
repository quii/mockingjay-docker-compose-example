"use strict";

var express = require('express');
var request = require('request');
var redis = require("redis");

const redisClient = redis.createClient('6379', 'redis');
const app = express();
const mjURL = 'http://fake-intel:9090/chrisrules';

redisClient.set('some key', 'Chris is the best');

app.use((req, res, next) =>{
    res.setHeader('content-type', 'text/javascript');
    next();
})

app.get('/', (req, res) => {

    request(mjURL, (error, response, body) => {

        if (!error) {
            res.send(body);
        } else {
            res.send('Couldnt reach MockingJay at', mjURL);
        }

        redisClient.get('some key', (err, reply) => console.log('Got this important information from redis', reply));
    });

});

const PORT = 8080;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
