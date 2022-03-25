import React from 'react'
import _navBarRequestShelter from './_navBarRequestShelter'
import RequestForm from "./requestform/RequestForm";

function RequestShelterResponse() {
  return (
    <div>
    <_navBarRequestShelter />
    <h1>Find a safe place to stay</h1>

    <RequestForm/>
    </div>
  );
}

export default RequestShelterResponse