const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dht22Schema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: 'temperature is required',
  },
  humidity: {
    type: Number,
    required: 'temperature is required',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DHT22', dht22Schema);
