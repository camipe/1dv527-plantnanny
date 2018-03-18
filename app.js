const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dataCollector = require('./tasks');

// create app
const app = express();

// setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static content from public folder
app.use(express.static('public'));

// log requests
app.use(morgan('dev'));

// enable cors from all origins
app.use(cors());

// read sensor data on a schdule
dataCollector.collectData(10000);

// setup routes

app.get('/', (req, res) => {
  console.log('hej');
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/api/v1', routes);

// export
module.exports = app;
