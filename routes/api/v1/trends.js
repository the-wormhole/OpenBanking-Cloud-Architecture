const express = require('express');
const router = express.Router();
const trendsApi = require('../../../controllers/api/v1/trends_api');

router.post('/create',trendsApi.createTrends);
router.get('/all-trends',trendsApi.all);
router.post('/get-trends/:id',trendsApi.filter);

module.exports = router;