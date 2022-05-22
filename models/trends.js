const mongoose = require('mongoose');

const trendsSchema = new mongoose.Schema({

    State:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    BelowAge:{
        type: Number,
        required:true
    },
    Region:{
        type:String,
        required:true
    },
    Bank:{
        type:String,
        required:true
    },
    BType:{
        type:String,
        required:true
    },
    SubCategory:{
        type:String,
        //required:true,
    },
    NumCustomer:{           //number of customer of this type
        type:Number,
        required:true
    }
},{timestamps:true})

const Trend = mongoose.model('trend',trendsSchema);

module.exports = Trend;