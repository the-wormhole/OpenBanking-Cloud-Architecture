const express = require('express');
const port = 8000 || process.env.PORT;
const cookieParser = require('cookie-parser');

const db = require('./config/mongoose');

const session = require('express-session');
const passport = require('passport');
const passportLocalStrategy = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const MongoStore = require('connect-mongo')(session);

const app = express();
const router = require('./routes/index');

app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views','./views');         

app.use(session({
    name:'Sub_id',
    secret: "temporary" || process.env.PASSPORT_SECRET,                     ////<<<<<<------------------ Change the session cookie before Deployment ~~~~ IMPORTANT
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: (1000 * 60 * 100)
    },
    store:new MongoStore({

        mongooseConnection: db,
        autoRemove: 'disabled'
    },function(err){
        console.log(err+"Error in setting up mongostore!!!"|| 'connect-mongodb server setup ok')
    }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',router);

app.listen(port, (err)=>{
    if(err){
        console.log("Error in launching the server!!");
        //return;
    }
    console.log(`****Server up and running at ${port}****`);
})
