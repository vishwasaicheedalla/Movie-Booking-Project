import express from "express";
import { protectAdmin } from "../middleware/auth.js";
import { getAllBookings, getAllShows, getDashboardData, isAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get('/is_admin', protectAdmin, isAdmin)
adminRouter.get('/dashboard', protectAdmin, getDashboardData)
adminRouter.get('/all_shows', protectAdmin, getAllShows)
adminRouter.get('/all_bookings', protectAdmin, getAllBookings)

export default adminRouter;