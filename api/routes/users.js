import express from "express";
import {updateUser,deleteUser,getUser,getAllUsers} from "../controllers/user.js";
import { verifyAdmin,verifyToken,verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user,you are logged in");
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("user sayfasına hoşgeldiniz");
})

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Admin sayfasına hoşgeldiniz.");
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