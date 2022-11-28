import mongoose from "mongoose";

const rideSchema = mongoose.Schema(
  {
    distance: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    startTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Ride = mongoose.model("Ride", rideSchema);

export default Ride;
