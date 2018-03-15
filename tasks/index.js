const mongoose = require('mongoose');

const DHT22 = mongoose.model('DHT22');
const LM393 = mongoose.model('LM393');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const collectData = (interval) => {
  setInterval(async () => {
    const temp = getRandomInt(100);
    const humid = getRandomInt(100);
    const soil = getRandomInt(100);
    const rawSoil = getRandomInt(1023);

    const airData = { temperature: temp, humidity: humid };
    const soilData = { value: soil, rawValue: rawSoil };

    const dht22 = new DHT22(airData);
    const lm393 = new LM393(soilData);

    await dht22.save();
    await lm393.save();

    console.log(dht22);
    console.log(lm393);
  }, interval);
};

module.exports = collectData;
