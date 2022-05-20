const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homecontoller');

//router.get('/',homeController.home);

//router.use('/subscriber',require('./subscriber'));

router.use('/api/v1',require('./api/v1/index'));

module.exports = router;