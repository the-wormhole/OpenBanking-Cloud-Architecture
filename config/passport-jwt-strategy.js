const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Subscriber = require('../models/subscriber');

var opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'temp'
}

passport.use(new JWTStrategy(opts, function(jwtPayload,done){

    Subscriber.findById(jwtPayload._id,function(err,subscriber){
        if(err){
            console.log(err,'Error in finding user from JWT');
            return;
        }
        if(subscriber){
            return done(null,subscriber);
        }else{
            return done(null,false);
        }
    })

}));

module.exports = passport;