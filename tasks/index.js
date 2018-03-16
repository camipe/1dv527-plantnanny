const mongoose = require('mongoose');

const DHT22 = mongoose.model('DHT22');
const LM393 = mongoose.model('LM393');

const collectData = (interval) => {
  setInterval(async () => {
    const dht22 = new DHT22();
    await dht22.read();
    await dht22.save();

    const lm393 = new LM393();
    await lm393.read();
    await lm393.save();

    console.log(dht22);
    console.log(lm393);
  }, interval);
};

module.exports = collectData;
