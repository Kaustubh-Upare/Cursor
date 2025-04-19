const express=require('express');



const route=express.Router();

route.post('/login')
route.post('/signup')

module.exports=route;