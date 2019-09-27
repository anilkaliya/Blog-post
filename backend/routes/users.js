const User =require('../models/users');
const express =require('express');
const Router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

Router.post("/signup",(req,res,next)=>{
    bcrypt.hash(req.body.password,10).then((hash)=>
    {
        const user=new User({
           email:req.body.email,
            password:hash
        });
        user.save().then(data=>{
            console.log("data saved");
            return res.status(201).json({message:"Done"})
        }).catch(err=>{
            console.log(err);
           return res.status(201).json({error:err});
        });
    
    });
   
  
});
Router.post("/signin",(req,res,next)=>{
    let fetchedUser
    User.findOne({email:req.body.email}).
    then(user=>{
        if(!user){
            console.log("this fails");
           return res.status(404).json({message:"Authentication failed"});
           
        }
         fetchedUser=user;
        return bcrypt.compare(req.body.password,user.password);
    }).then(result=>{
        if(!result){
            console.log("that fails");
            return res.status(404).json({message:"Auth failed"});
        }
       const token= jwt.sign({email:fetchedUser.email,id:fetchedUser._id},
            "this_is_secret",{expiresIn:"1h"});
            res.status(200).json({
                token: token,
                expiresIn: 3600
              });
    }).catch(err=>{
        console.log("here fails");
        res.status(404).json({message:"auth failed"});
    })
})
module.exports=Router;