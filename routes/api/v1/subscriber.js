const express = require('express');
const router = express.Router();
const subscribersApi = require('../../../controllers/api/v1/subscriber_api');

router.post('/create-session',subscribersApi.createSession);
router.get('/profile/:id',subscribersApi.profile)
router.post('/sign-up',subscribersApi.SignUp);

module.exports = router;