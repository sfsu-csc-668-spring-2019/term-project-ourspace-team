const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//import React from 'react';
//import App from './client/src';

// Make use of environment variables defined in .env
require('dotenv').config();

const port = process.env.PORT || '5000';
// Declare Express App
const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/hello', (req, res) => {
console.log("api/hello hit");
res.send({ express: 'Hello From Express' });
//res.send("Hello");
});

app.post('/api/world', (req, res) => {
//console.log(req.body.post);
console.log("/api/world hit");
res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  };
  console.log('Listening on port ' + port);
});

app.get('*', (req, res) =>{
  res.send({something: 'Hello my friend'});
});

module.exports = app;