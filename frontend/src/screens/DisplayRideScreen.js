import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import Ride from "../components/Ride";

const DisplayRideScreen = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const getTheListOfRides = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/rides`);
      setRides(data);
    };
    getTheListOfRides();
  }, []);

  if (rides.length === 0) {
    return (
      <div className="container spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className="container my-5">
          {rides.map((ride, index) => {
            return <Ride key={index} ride={ride} />;
          })}
        </div>
      </div>
    );
  }
};

export default DisplayRideScreen;
