import express from "express";

const router=express.Router();

export const updateUser=async (req,res,next)=>{
    console.log("Güncelleme çalıştı")
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
            );       
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    } 
}

export const deleteUser=async (req,res,next)=>{
    console.log("Delete çalıştı")
    try{
        await User.findByIdAndDelete(
            req.params.id,
            );       
        res.status(200).json("Users has been deleted");
    }catch(err){
        next(err);
    } 
}

export const getUser=async (req,res,next)=>{
    console.log("Get çalıştı")
    try{
        const user=await User.findById(
            req.params.id,
            );       
        res.status(200).json(user);
    }catch(err){
        next(err);
    } 
}
export const getAllUsers=async (req,res,next)=>{
    console.log("Get All çalıştı")
    try{
        const users=await User.find();       
        res.status(200).json(users);
    }catch(err){
        next(err);
    } 
}

export default router;

