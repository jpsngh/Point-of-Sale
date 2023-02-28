
import User from "../models/userModel.js";
import mongoose from "mongoose";
 const loginController =async(req,res)=>{
try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email:email, password:password,verified:true});
    if(!user){
        return res.status(400).send("Invalid Credentials");
    }
    res.status(200).send(user);
    
} catch (error) {
    console.log(error)
}
}

const registerController =async(req,res)=>{
    try {
        const newUser = new User({...req.body, verified:true});
        await newUser.save();
        res.status(201).send("User added successfully");
    } catch (error) {
        res.status(400).send((error)=>{
            console.log(error.message);
        });
        
    }
}


export {loginController,registerController}