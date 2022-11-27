import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import axios from "axios";
import Form from "react-bootstrap/Form";
import DatePicker from "../components/DatePicker";
import Button from "react-bootstrap/Button";
import moment from "moment/moment";
import {BASE_URL} from "../constants/baseUrl";

const CreateRideScreen = () => {

    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [done, setDone] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log('wesh')
        try {
            await axios.post(`${BASE_URL}/api/rides`, {
                distance,
                duration,
                startTime
            })
            setDone(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <NavBar/>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Distance de la ride</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter ride distance"
                        onChange={(e) => setDistance(Number(e.target.value))}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Durée de la ride</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Duration of the ride"
                        onChange={(e) => setDuration(Number(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date de début de la ride</Form.Label>
                    <DatePicker value={startTime} setValue={setStartTime}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Soumettre
                </Button>
            </Form>
            {done && <div className="alert alert-success" role="alert">
                Votre ride a bien été soumise !
            </div>}
        </div>
    );
};

export default CreateRideScreen;