"use strict";

var express = require('express');
var request = require('request');
var redis = require("redis");

const redisClient = redis.createClient('6379', 'redis');
const app = express();
const mjURL = 'http://fake-intel:9090/chrisrules';

redisClient.set('some key', 'Chris is the best');

app.use((_, res, next) =>{
    res.setHeader('content-type', 'text/javascript');
    next();
});

app.get('/', (req, res) => {

    callAPI()
        .then(body => res.send(body))
        .catch(err =>res.send("Uh oh"));

    redisClient.get('some key', (err, reply) => console.log('Got this important information from redis', reply));

});

function callAPI(){
    return new Promise((resolve, reject) =>{
        request(mjURL, (error, response, body) => {
            if(!error){
                resolve(body);
            }else{
                reject(error);
            }
        });
    });
}

const PORT = 8080;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
