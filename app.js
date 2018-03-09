const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const sensor = require('node-dht-sensor');
const mcpadc = require('mcp-spi-adc');

setInterval(() => {
    sensor.read(22, 12, (err, temp, hum) => {
    if (!err) {
	var tempSensor = mcpadc.open(0, function (err) {
            if (err) throw err;
            tempSensor.read(function (err, reading) {
                if (err) throw err;
                console.log(reading.rawValue);
		console.log('temp: ' + temp.toFixed(1) + 'C');
		console.log('humidty: ' + hum.toFixed(1) + '%');
            });
    };
}, 5000);

var tempSensor = mcpadc.open(0, function (err) {
  if (err) throw err;
  tempSensor.read(function (err, reading) {
    if (err) throw err;
    console.log(reading.rawValue);
    });
});

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
