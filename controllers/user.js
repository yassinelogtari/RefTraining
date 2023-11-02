const jwt=require("jsonwebtoken")
const User=require("../models/user")
const bcrypt=require("bcrypt")


const singup=(req,res,next)=>{
    
    bcrypt.hash(req.body.password,10).then((hash)=>{
        const user = new User({
            email:req.body.email,
            password:hash
        })
        user.save().then((response)=>{
            const newUser=response.toObject()
            delete newUser.password
            res.status(201).json({
                user:newUser,
                message:"user created"
            })
        }).catch((error)=>{
            res.status(401).json({
                error:error.message
            })
        })
        
    }).catch((error)=>{
        res.status(400).json({
            error:error.message
        })
    })
}

const login=(req,res,next)=>{

    User.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            res.status(401).json({
                message:"login or password invalid"
            })
        }
        bcrypt.compare(req.body.password,user.password).then((valid)=>{
            if(!valid){
                res.status(401).json({
                    message:"login or password invalid"
                })
            }
            res.status(200).json({
                token:jwt.sign({userId:user._id},"RANDOM_TOKEN_SECRET",{
                    expiresIn:"24h"
                })
            })
        }).catch((error)=>{
            res.status(401).json({
                error:error.message
            })
        })
    }).catch((error)=>{
            res.status(401).json({
                error:error.message
            })
        })
}
module.exports={
    singup,
    login
}
   


