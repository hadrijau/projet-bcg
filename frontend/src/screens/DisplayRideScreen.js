import React, {useDebugValue, useState, useEffect} from 'react';
import NavBar from "../components/NavBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "../components/DatePicker";
import axios from "axios";
import {BASE_URL} from "../constants/baseUrl";
import Ride from "../components/Ride";

const DisplayRideScreen = () => {

    const [rides, setRides] = useState([])

    useEffect(() => {
        const getTheListOfRides = async () => {
            const { data } = await axios.get(`${BASE_URL}/api/rides`)
            setRides(data)
        }
        getTheListOfRides()
    }, [])

    console.log('rides', rides)
    return (
        <div>
            <NavBar/>
            <div className="container my-5">
                {rides.map((ride, index) => {
                    return <Ride key={index} ride={ride}/>
                })}
            </div>

        </div>
    );
};

export default DisplayRideScreen;