const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const userModel = require("../models/signup");

const login=async(req,res)=>{
try {
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    const errorMsg="Invalid email or password";
    if(!user){
        return res.status(403)
        .json({message:errorMsg,success:false});
    }
    const ispasswordValid=await bcrypt.compare(password,user.password);
    if(!ispasswordValid){
    return res.status(403)
        .json({message:errorMsg,success:false});
    }
    const jwtToken=jwt.sign(
        {
            email:user.email,
            id:user._id
        },process.env.JWT_TOKEN,{expiresIn:"1h"}
    )
    res.status(201).json({message:"User logged in successfully",success:true,jwtToken,email:user.email,name:user.name});
} catch (error) {
    res.status(500).json({message:"Internal server error",success:false});
}
}
 
module.exports={login};