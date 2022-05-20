const express = require('express');
const router = express.Router();
const passport = require('passport');

const subscriberController = require('../controllers/subsribercontroller');

router.get('/profile/:id', passport.checkAuthentication ,subscriberController.profile)
router.get('/sign-in',subscriberController.signIn);
router.get('sign-up',subscriberController.signUp);
router.get('/sign-out',subscriberController.destroySession);

router.post('/create-session',
passport.authenticate( 'local', {failureRedirect: '/subscriber/sign-in'})
,subscriberController.createSession);

module.exports = router;