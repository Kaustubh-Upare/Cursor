require('dotenv').config();
const express=require('express');
const { ErrorMiddleware } = require('./utility/errorHandler');
const connectDB = require('./utility/DBConnect');
const cookieParser = require('cookie-parser');

// ROutes
const userRoutes=require('./routes/user.js');
const msgRoutes=require('./routes/chat.js');

connectDB(process.env.MONGODB_URI)
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(ErrorMiddleware)

app.use('/',userRoutes);
app.use('/msg',msgRoutes)

app.listen(process.env.APP_PORT,()=>{
    console.log("Server listening on Port",process.env.APP_PORT)
})