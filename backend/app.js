const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Make use of environment variables defined in .env
require('dotenv').config();

const port = process.env.PORT || '5000';
// Declare Express App
const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  };
  console.log('Listening on port ' + port);
});

module.exports = app;