import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";
import { createError } from "../utils/error.js";

export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);

    try { 
         const savedRoom=await newRoom.save();
         try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push: { rooms:savedRoom._id},
            });
        }
        catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }

}


export const updateRoom=async (req,res,next)=>{
    console.log("hotel Güncelleme çalıştı")
    try{
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
            );       
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    } 
}

export const deleteRoom=async (req,res,next)=>{
    const hotelId=req.params.hotelid;
    console.log("Delete çalıştı")
    try{
        await Room.findByIdAndDelete(req.params.id); 
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull: { rooms:req.params.id},
            });
        }
        catch(err){
            next(err);
        }      
        res.status(200).json("Room has been deleted");
    }catch(err){
        next(err);
    } 
}

export const getRoom=async (req,res,next)=>{
    console.log("Get çalıştı")
    try{
        const room=await Room.findById(
            req.params.id,
            );       
        res.status(200).json(room);
    }catch(err){
        next(err);
    } 
}
export const getAllRoom=async (req,res,next)=>{
    console.log("Get All çalıştı")
    try{
        const rooms=await room.find();       
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    } 
}