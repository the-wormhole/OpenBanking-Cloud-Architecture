const Trend = require('../../../models/trends');
const Subscriber = require('../../../models/subscriber');

module.exports.createTrends = async function(req,res){

    try{
        let newTrend = await Trend.create({
            State:req.body.state,
            Gender:req.body.gender,
            BelowAge:req.body.age,
            Region:req.body.region,
            Bank:req.body.bank,
            BType:req.body.type,
            NumCustomer:req.body.num
        });

        return res.status(200).json({
            message:"Trend was added !!",
            trend:newTrend
        })
    }catch(err){

        console.log(err,"Error in adding Trend to db!!");
        return res.status(500).json({
            message:"Internal Server Error!!"
        });
    }
}

module.exports.all = async function(req,res){

    try{
        let allTrends = await Trend.find({});
        return res.status(200).json({
            message:"All trends",
            allTrends,allTrends
        })
    }catch(err){

        console.log(err,"Error in returning trends!!");
        return res.status(500).json({
            message:"Internal Server Error!!"
        });
    }
}

module.exports.filter = async function(req,res){

    try{

        let sub = await Subscriber.findById(req.params.id);
        let type = sub.TypeOfOrg;
        //console.log(type);
        //let trends = await Trend.find({Bank:{$in:sub.Banks},})
        let trends = await Trend.find({Region:req.body.region, BType:type});
        return res.status(200).json({
            message:"Returned filtered trends!!",
            trends:trends
        })
    }catch(err){

        console.log(err,"Error in filtering trends!!");
        return res.status(500).json({
            message:"Internal Server Error!!"
        });
    }
}