const Subscriber = require('../../../models/subscriber');
const jwt = require('jsonwebtoken');

module.exports.profile = async function(req,res){

    try{
        let subscriber = await Subscriber.findById(req.params.id);

        if(!subscriber){
            return res.status(401).json({
                message:"UnAuthorised access!!"
            });
        }else{
            return res.status(200).json({
                message:"Profile page!!",
                subscriber:subscriber
            })
        }
    }catch{

        console.log('*****',err);
        return res.json(500,{
            message:"Internal Server Error!!"
        });
    }

}

module.exports.createSession = async function(req,res){

    try{
        let subscriber = await Subscriber.findOne({Email:req.body.Email});

        if(!subscriber || subscriber.password != req.body.password){

            return res.json(422,{
                message:"Invalid username/ password"
            });
        }

        return res.json(200,{
            message: "Signed in Successfully!!",
            data:{
                token: jwt.sign(subscriber.toJSON(),'temp',{expiresIn:'1000000'})
            },
            user_id:subscriber.id
        });
    }catch(err){

        console.log('*****',err);
        return res.json(500,{
            message:"Internal Server Error!!"
        });
    }
    //console.log(req.body);
    //console.log(req);
    // return res.status(200).json({
    //     request:req.body+'',
    //     message:"Jokes!!"
    // });
}

module.exports.SignUp = async function(req,res){

   try{

        if(req.body.password != req.body.confirmPassword){
            return res.status(422).json({
                message:"Password and Confirm password don't match!!"
            });
        }

        let subscriber = await Subscriber.findOne({Email:req.body.Email});

        if(!subscriber){
            
            let newSubscriber = await Subscriber.create({
                Name:req.body.Name,
                Email:req.body.Email,
                password:req.body.password,
                Company_Name:req.body.companyName,
                Contact: req.body.contact,
                TypeOfOrg:req.body.type,
                Duration:req.body.duration,
                Amount: req.body.amt
            });

            return res.status(200).json({
                subscriber:newSubscriber,
                message:"Subscriber created successfully!!"
            })
        }else{
            //console.log('Employ already exists in database!!')
            return res.status(409).json({
                message:"Subscriber Already Exists!!"
            });
        }
    }catch(err){
        console.log(err,"Error in creating new Subscriber!!");
        return res.status(500).json({
            message:"Internal server Error!!"
        });
    }
    // return res.json({
    //     req:req.body
    // })
}