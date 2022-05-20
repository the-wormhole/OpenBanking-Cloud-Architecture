//const passport = require('passport');
const Subscriber =  require('../models/subscriber');
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.status(200).send(req.user.id);
        //res.redirect(`/subscriber/profile/${req.user.id}`)        ///////////// Change this when user WIP
    }
    //return res.render("sign-in");
    return res.status(200).send("Sign IN Page!!");
}

module.exports.signUp = function(req,res){

    if(req.isAuthenticated()){
        return res.status(200).send(req.user.id);
        //redirect(`/subscriber/profile/${req.user.id}`);
    }

    //return res.render('sign-up');
    return res.status(200).send("Sign up page!!");
}
module.exports.profile = async function(req,res){
    try{
        let sub = await Subscriber.findById(req.params.id);
        return res.status(200).send(sub);
        // return res.render("profile",{
        //     sub:sub
        // })
    }catch(err){
        console.log(err,"Error in displaying the profile !!");
        return;
    }

}
module.exports.createSession = function(req,res){

    //return res.redirect(`/subscriber/profile/${req.user.id}`);
    return res.status(200).send("Session created !!!");
}

module.exports.destroySession = function(req,res){

    req.logout();                                   
    return res.redirect('/');
}