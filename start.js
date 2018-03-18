const mongoose = require('mongoose');
const http = require('http');
const socketIO = require('socket.io');

// setup enviroment file
require('dotenv').config({ path: 'variables.env' });

// setup database connection
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

// import models
require('./models/DHT22');
require('./models/LM393');

// start app!
const app = require('./app');

const server = http.createServer(app);

// start socket.io
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
io.on('connection', (socket) => {
  console.log('User connected');

  io.emit('customEmit', {});

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Express running → PORT ${server.address().port}`));
