const express=require('express');
const { sendMsg } = require('../controller/chat');
const route=express.Router();


route.post('/sendMsg',sendMsg);

module.exports=route