import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import Form from "react-bootstrap/Form";
import DatePicker from "../components/DatePicker";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";

const CreateRideScreen = () => {
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [done, setDone] = useState(false);
  const navigation = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/rides`, {
        distance,
        duration,
        startTime,
      });
      setDone(true);
      setTimeout(() => {
        navigation('/')
      }, 3000)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Distance de la ride</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez la distance de la ride"
              onChange={(e) => setDistance(Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Durée de la ride</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez la durée de la ride"
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date de début de la ride</Form.Label>
            <div>
                <DatePicker value={startTime} setValue={setStartTime} />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Soumettre
          </Button>
        </Form>
        {done && (
          <div className="alert alert-success my-5" role="alert">
            Votre ride a bien été soumise !
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateRideScreen;
