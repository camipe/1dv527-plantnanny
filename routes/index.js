const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/', dataController.getMap);

router.get('/air', dataController.getAir);

router.get('/soil', dataController.getSoil);

module.exports = router;
