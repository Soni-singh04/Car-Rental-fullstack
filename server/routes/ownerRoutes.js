import express from "express";
import { protect } from "../middleware/auth.js";
import { changeRoleToOwner, addCar, getDashboardData, getOwnerCars, deleteCar, updateUserImage, 
toggleCarAvailability } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js"


const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add_car", upload.single("image"),protect,  addCar)

ownerRouter.post("/cars", protect, getOwnerCars)
ownerRouter.post("/toggle-car", protect, toggleCarAvailability)
ownerRouter.post("/delete-car", protect, deleteCar)

ownerRouter.post('/dashboard', protect, getDashboardData)
ownerRouter.post('/update-image', protect, upload.single("image"), updateUserImage)



export default ownerRouter