const passport = require('passport');
const Subscriber = require('../models/subscriber');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField:'Email',             ///<<<<-------------------------    Since the project has Email field instead of username, so we use this to change it
    passReqToCallback: true            ///<<<<-------------------------    makes the request variable accessible in the passport

},function(req, Email,password,done){   

    Subscriber.findOne({Email:Email},function(err,subscriber){
        if(err){
            console.log("Error in finding subscriber --> Passport");
            //req.flash('error',err);
            return done(err);
        }
        if(!subscriber || subscriber.password != password){
            //req.flash('error','Invalid Email Id/ Password')
            //console.log("Incorrect Username / Password");
            return done(null,false,{message:"Incorrect Username / Password"});
        }

        return done(null,subscriber);
    });

}))

passport.serializeUser(function(subscriber,done){

    return done(null,subscriber.id);
});

passport.deserializeUser(function(id,done){
    Subscriber.findById(id, function(err,subscriber){
        if(err){
            console.log("Error in finding subscriber --> Passport");
            return done(err);
        }

        return done(null,subscriber);
        
    })
})

passport.checkAuthentication = function(req,res,next){
                        
    if(req.isAuthenticated()){          //<<<< --------------- This middleware is like a license check, if you have the license, you can go ahead to access the services
        return next();
    }

    //console.log("Work in Progress --> Passport local strategy");
    //return;
    return res.redirect('/subscriber/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){         //<<<<<---------- This is to set customer for views to access customer using locals

    if(req.isAuthenticated()){

        res.locals.subscriber = req.user;                 //<<<<<<---- passport after authentication places the customer in the req(req.user contains the authenticated customer)
        console.log("Setting up subscriber",req.user)
    }
    next();
    //return res.redirect('/customer/sign-in');
}

module.exports = passport;
