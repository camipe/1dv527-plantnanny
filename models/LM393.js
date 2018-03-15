const mongoose = require('mongoose');

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

module.exports = mongoose.model('LM393', lm393Schema);
