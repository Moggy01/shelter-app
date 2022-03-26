import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import HomePageSearch from "./HomePageSearch";

function App() {
  return (
    <div className="Content">
      <h1> Ukraine Shelter</h1>
      <nav className="homePageNav">
        <ul>
          <li>
            <NavLink to="/provideShelter/ProvideShelterForm">
              Become a Host
            </NavLink>
          </li>
          <li>
            <NavLink to="/requestShelter/RequestShelterResponse">
              Find a Host
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="locationInput">
        <label id="locationLabel">Where do you need shelter: </label>
        {/* <input type={'text'} placeholder='Start typing your nearest town/city'id='location'></input> */}
        <HomePageSearch />
      </div>
      <div id="info">
        <h2>What is Ukraine Shelter?</h2>
        <p>
          Ukraine Shelter is an independent platform which connects Ukrainian
          refugees to those who are able to offer a safe place to stay{" "}
        </p>
        <br />
        <p>
          This website is a public bulletin. We encourage everyone with spare
          space to post a listing and to mark their listing as filled once they
          have successfully taken in refugees.
        </p>
        <h3>What Information do you need?</h3>
        <p>
          For refugees, Ukraine Shelter asks for your nearest city to display
          the closest listings. We do not track your precise location. Hosts are
          only required to provide minimal information, such as their city and
          contact information.
        </p>
      </div>
    </div>
  );
}

export default App;
