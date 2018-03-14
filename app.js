const express = require('express');
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

// setup routes
app.use('/', (req, res) => {
  res.json({
    status: 'WORKING',
  });
});

// export
module.exports = app;
