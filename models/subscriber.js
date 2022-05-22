const mongoose = require('mongoose');
//const { required } = require('nodemon/lib/config');

const subsriberSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Company_Name:{
        type:String,
        required:true,
    },
    Contact:{
        type:Number,
        required:true
    },
    TypeOfOrg:{
        type:String,
        required:true
    },
    Duration:{
        type:Number,            // in months
        required:true
    },
    Banks:[{
        type:mongoose.Schema.Types.String,
        //required:true
    }],
    Amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Subscriber = mongoose.model('subscriber',subsriberSchema);

module.exports = Subscriber;