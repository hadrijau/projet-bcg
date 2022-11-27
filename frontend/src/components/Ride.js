import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import {
    calculatePriceOfRide,
    computeDurationOfTheRide,
    computeEndTimeOfRide,
} from "../utils/functions";

const Ride = ({ ride }) => {

    const onClick = () => {
        window.alert(`Ride duration : ${computeDurationOfTheRide(ride.duration)} s  ---   End of ride ${computeEndTimeOfRide(ride.startTime, ride.duration)}` )
        setClicked(true)
    }

    const [clicked, setClicked] = useState(false)

    return (
        <Card
            onClick={onClick}
            className="card-custom my-5"
            style={ride.distance > 2 ? {background: "red"} : {background: "white"}}
        >
            <Card.Body>
                <Card.Title>
                    <div className="d-flex">
                        <h5 >Id : {ride._id} </h5>
                        {clicked && <h5 className="mx-5">Clicked</h5>}
                    </div>

                </Card.Title>
                <Card.Text>
                    Prix : {calculatePriceOfRide(ride.distance, ride.startTime)}
                </Card.Text>
                <Card.Text>
                    Durée : {ride.duration} secondes
                </Card.Text>
                <Card.Text>
                    Distance : {ride.distance} miles
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Ride;