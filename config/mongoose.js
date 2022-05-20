const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/OpenBanking-Subscribers",{useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting to MongoDB"));

db.once('open',function(){
    console.log("Successfully connected to the MongoDB Database!!!");
});

module.exports = db;