import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayRideScreen from "./screens/DisplayRideScreen";
import CreateRideScreen from "./screens/CreateRideScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayRideScreen />} />
        <Route path="/create-ride" element={<CreateRideScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
