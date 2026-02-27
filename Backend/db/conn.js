const mongoose=require('mongoose');

const DB=process.env.MONGO_CONN;

mongoose.connect(DB).then(()=>{
    console.log("connected......");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})