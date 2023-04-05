import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//ekleme
router.post("/",verifyAdmin,createHotel);

//Güncelleme
router.put("/:id",verifyAdmin, updateHotel);

//Silme
router.delete("/:id",verifyAdmin,deleteHotel);

//Get
router.get("/:id", getHotel);

//Get All

router.get("/", getAllHotel);

export default router; 