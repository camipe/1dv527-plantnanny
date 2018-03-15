const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('showing complete object');
});

router.get('/temperature', (req, res) => {
  res.send('showing temperature data');
});

router.get('/humidity', (req, res) => {
  res.send('showing temperature data');
});

router.get('/soil', (req, res) => {
  res.send('showing soil waterlevel');
});


module.exports = router;
