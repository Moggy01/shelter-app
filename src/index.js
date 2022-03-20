import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProvideShelterForm from "./provideShelter/ProvideShelterForm";
import RequestShelterResponse from "./requestShelter/RequestShelterResponse";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Host */}
        <Route
          path="/provideShelter/ProvideShelterForm"
          element={<ProvideShelterForm />}
        />
        {/* Refugee */}
        <Route
          path="/requestShelter/RequestShelterResponse"
          element={<RequestShelterResponse />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
