// const sensor = require('node-dht-sensor');
// const mcpadc = require('mcp-spi-adc');

// setInterval(() => {
//   sensor.read(22, 12, (err, temp, hum) => {
//     if (!err) {
//       const tempSensor = mcpadc.open(6, (err) => {
//         if (err) throw err;
//         tempSensor.read((err, reading) => {
//           if (err) throw err;

//           console.log(`soil: ${reading.rawValue}`);
//           console.log(`temp: ${temp.toFixed(1)} Celsius`);
//           console.log(`humidty: ${hum.toFixed(1)}%`);
//         });
//       });
//     }
//   });
// }, 5000);
