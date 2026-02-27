const userModel = require("../models/signup");
const bcrypt=require('bcrypt');

const Signup=async(req,res)=>{

    try {
    const {name,email,password}=req.body;
    const user=await userModel.findOne({email});
    if(user){
        return res.status(409)
        .json({message:"User already exists",success:false});
    }
    const UserModel= new userModel({name ,email,password});
    UserModel.password=await bcrypt.hash(password,10);
    await UserModel.save();
    res.status(201).json({message:"User created successfully",success:true});
} catch (error) {
    res.status(500).json({message:"Internal server error",success:false});
}
}

module.exports={Signup};