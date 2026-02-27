const express= require('express');
require('dotenv').config();
require('./db/conn.js');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const authRouter=require('./Routes/authrouter.js');
const productroute=require('./Routes/productroute.js');
const port=process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter);
app.use('/products',productroute)

app.get('/signup',(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})