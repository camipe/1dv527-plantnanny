const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('showing complete object');
});

router.get('/air', dataController.getAir);

router.get('/soil', dataController.getSoil);

module.exports = router;
