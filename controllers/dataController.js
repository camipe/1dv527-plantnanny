const mongoose = require('mongoose');
const Plant = require('../models/Plant');

const DHT22 = mongoose.model('DHT22');
const LM393 = mongoose.model('LM393');

// get historical air data
exports.getAir = async (req, res) => {
  const airData = await DHT22.find();
  res.json(airData);
};

// get historical soil data
exports.getSoil = async (req, res) => {
  const soilData = await LM393.find();
  res.json(soilData);
};

// get map/blueprint of the thing
exports.getMap = async (req, res) => {
  res.json(Plant);
};
