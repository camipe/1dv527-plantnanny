const mongoose = require('mongoose');
const sensor = require('node-dht-sensor');

mongoose.Promise = global.Promise;

const dht22Schema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: 'temperature is required',
  },
  humidity: {
    type: Number,
    required: 'humidity is required',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

dht22Schema.methods.read = function readSensorData() {
  return new Promise((resolve, reject) => {
    sensor.read(22, 12, (err, temperature, humidity) => {
      if (err) return reject(err);
      this.temperature = temperature;
      this.humidity = humidity;
      return resolve();
    });
  });
};

module.exports = mongoose.model('DHT22', dht22Schema);
