import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();


//ekleme
router.post("/:hotelid",verifyAdmin,createRoom);

//Güncelleme
router.put("/:id",verifyAdmin, updateRoom);

//Silme
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//Get
router.get("/:id", getRoom);

//Get All

router.get("/", getAllRoom);

export default router; 