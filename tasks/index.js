const mongoose = require('mongoose');

const DHT22 = mongoose.model('DHT22');
const LM393 = mongoose.model('LM393');

// reads sensors and save to db
exports.collectData = (interval) => {
  setInterval(async () => {
    const dht22 = new DHT22();
    await dht22.read();
    await dht22.save();

    const lm393 = new LM393();
    await lm393.read();
    await lm393.save();

    console.log(`Sensors read and saved at ${Date.now()}`);
  }, interval);
};

// reads the sensors and emits and socket io event
exports.readCurrent = (io, interval) => {
  setInterval(async () => {
    const dht22 = new DHT22();
    await dht22.read();

    const lm393 = new LM393();
    await lm393.read();

    io.sockets.emit('updateData', {
      temp: dht22.temperature.toFixed(1),
      humidity: dht22.humidity.toFixed(1),
      soilValue: (lm393.value * 100).toFixed(1),
    });
  }, interval);
};

