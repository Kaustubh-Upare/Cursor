const { tryCatcher } = require("../utility/ErrorHandler.js");
const User=require('../model/user.js')
const bcrypt=require('bcrypt');
const { generateToken } = require("../utility/feature.js");

const SignupHandler=tryCatcher(async(req,res,next)=>{
    const {email,password,name,}=req.body;

    const newPassword=await bcrypt.hash(password,10)


    const newUser=await User.create({
        name,
        email,
        password:newPassword
    })

    await newUser.save();
    generateToken(res,newUser,201,"New User Created Successfully");

})

const loginHandler=tryCatcher(async(req,res,next)=>{
    const {email,password}=req.body;

    const exUser=await User.findOne({email}).select('+password')

    const isMatch=await bcrypt.compare(password,exUser.password)

    generateToken(res,exUser,200,"Welcome Back");

})
