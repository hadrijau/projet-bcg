import asyncHandler from "express-async-handler";
import Ride from "../models/rideModel.js";

// @desc Get the list of rides
// @route GET /api/rides
// @access Public
const getRides = asyncHandler(async (req, res) => {
    const rides = await Ride.find({})
    res.json(rides);
});

// @desc Create a ride
// @route POST /api/rides
// @access Public
const createRide = asyncHandler(async (req, res) => {
    const {
        distance,
        duration,
        startTime,
    } = req.body;

    console.log('req', req.body)
    const ride = await Ride.create({
        distance,
        duration,
        startTime
    });

    if (ride) {
        res.status(201).json({ride})
    } else {
        res.status(400)
        throw new Error("Could not create a ride")
    }
});

export { getRides, createRide }
