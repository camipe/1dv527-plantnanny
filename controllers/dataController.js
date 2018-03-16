const mongoose = require('mongoose');

const DHT22 = mongoose.model('DHT22');
const LM393 = mongoose.model('LM393');

exports.getAir = async (req, res) => {
  const airData = await DHT22.find();
  res.json(airData);
};

exports.getSoil = async (req, res) => {
  const soilData = await LM393.find();
  res.json(soilData);
};
