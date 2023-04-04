import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";
const router=express.Router();

//ekleme
router.post("/",createHotel);

//Güncelleme
router.put("/:id", updateHotel);

//Silme
router.delete("/:id",deleteHotel);

//Get
router.get("/:id", getHotel);

//Get All

router.get("/", getAllHotel);

export default router; 