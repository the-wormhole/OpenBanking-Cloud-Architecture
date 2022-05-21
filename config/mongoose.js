const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nayan_agg13:9643859794@cluster0.lz0rg.mongodb.net/?retryWrites=true",{useUnifiedTopology: true});
//mongodb+srv://nayan_agg13:9643859794@cluster0.lz0rg.mongodb.net/?retryWrites=true
//mongoose.connect("mongodb://localhost/OpenBanking-Subscribers",{useUnifiedTopology: true});
//
const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting to MongoDB"));

db.once('open',function(){
    console.log("Successfully connected to the MongoDB Database!!!");
});

module.exports = db;