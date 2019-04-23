"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const loginController = require("./controllers/login");
//const express = require('express');
//const path = require('path');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
// Make use of environment variables defined in .env
dotenv.config({ path: ".env.example" });
var app = express();
//const port = process.env.PORT || '5000';
app.set("port", process.env.PORT || 5000);
//app.set("views", path.join(__dirname, "../api"));
// Declare Express App
//const app = express();
//const app = express();
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    ;
    console.log('Listening on port ' + 5000);
});
//const login = require('./api/login');
//app.use('/api/login', login);
app.get("/", loginController.getHello);
app.post("/", loginController.postWorld);
/*app.use(function (req, response, next) {
  const err = new Error('Not Found');
  //err.status = 404;
  next(err);
});*/
exports.default = app;
//# sourceMappingURL=app.js.map