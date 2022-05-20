const express = require('express');
const router = express.Router();

router.use('/subscriber',require('./subscriber'));
router.use('/trends',require('./trends'));

module.exports = router;