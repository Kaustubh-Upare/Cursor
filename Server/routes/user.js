const express=require('express');
const { loginHandler, SignupHandler } = require('../controller/user');



const route=express.Router();

route.post('/login',loginHandler)
route.post('/signup',SignupHandler)

module.exports=route;