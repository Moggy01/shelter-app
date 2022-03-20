import React from "react";
import HostForm from "./hostform/HostForm";
import _navBarProvideShelter from "./_navBarProvideShelter";

function provideShelterForm() {
  return (
    <div>
      Become a Host
      <_navBarProvideShelter />
      <HostForm />
      hi
    </div>
  );
}

export default provideShelterForm;
