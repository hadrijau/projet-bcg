import express from "express";
import {createRide, getRides} from "../controllers/rideController.js";

const router = express.Router();

router.route('/').get(getRides).post(createRide);

export default router;
