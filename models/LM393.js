const mongoose = require('mongoose');
const mcpadc = require('mcp-spi-adc');

mongoose.Promise = global.Promise;

const lm393Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: 'value is required',
  },
  rawValue: {
    type: Number,
    required: 'rawValue is required',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

lm393Schema.methods.read = function readSensorData() {
  return new Promise((resolve, reject) => {
    const tempSensor = mcpadc.open(6, (err) => {
      if (err) return reject(err);
      tempSensor.read((err2, reading) => {
        if (err2) return reject(err);
        this.value = reading.value;
        this.rawValue = reading.rawValue;
        return resolve();
      });
    });
  });
};

module.exports = mongoose.model('LM393', lm393Schema);
