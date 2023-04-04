import express from "express";
import {updateUser,deleteUser,getUser,getAllUsers} from "../controllers/user.js";
import { verifyAdmin,verifyToken,verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user,you are logged in");
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello user,you are logged in and you can delete you account");
})

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello admin,you are logged in and you can delete you accounts");
})

//Güncelleme
router.put("/updateadmin:id", updateUser);

//Silme
router.delete("/deleteadmin:id",deleteUser);

//Get
router.get("/:id", getUser);

//Get All

router.get("/", getAllUsers);

export default router; 