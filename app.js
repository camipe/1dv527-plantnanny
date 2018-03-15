const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// create app
const app = express();

// setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// log requests
app.use(morgan('dev'));

// enable cors from all origins
app.use(cors());

// read sensor data on a schdule
// save sensor data to database

// setup routes
app.use('/api/v1', routes);

// export
module.exports = app;
