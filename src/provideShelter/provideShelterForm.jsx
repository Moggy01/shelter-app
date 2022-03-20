import React from "react";
import HostForm from "./hostform/HostForm";
import _navBarProvideShelter from "./_navBarProvideShelter";

function provideShelterForm() {
  return (
    <div>
      <_navBarProvideShelter />
      <h1>
        Become a host!
      </h1>
      <p id="host">Ukrainians are in desperate need of a safe place to stay. If you can offer any support with this to families or even one person, please fill in the form below so that you can be easily found. </p>
      
      <HostForm />
    </div>
  );
}

export default provideShelterForm;
