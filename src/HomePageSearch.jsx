import React, { useState } from "react";
import { fetchPlace } from "../src/provideShelter/hostform/FetchPlace";
import { InputText } from "primereact/inputtext";
import { NavLink } from "react-router-dom";

// import "../host form/hostform.css";
import { Button } from "primereact/button";

const HomePageSearch = () => {
  const [city, setCity] = useState([]);
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  const handleSubmit = () => {
    const searchCity = JSON.parse(
      localStorage.getItem("searchCityData") || "[]"
    );
    localStorage.setItem("searchCityData", JSON.stringify(city));
  };

  return (
    <form>
      <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor="city" className="label">
            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>

          <InputText
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join("|")}
            autoComplete="off"
            placeholder="Start typing your current city"
          />
          <datalist id="places">
            {autocompleteCities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </datalist>
          <span className="placesAutocomplete__hint"></span>
        </div>
        <NavLink to="/requestShelter/RequestShelterResponse">
          <Button label="Search" onClick={handleSubmit} />
        </NavLink>
      </div>
    </form>
  );
};

export default HomePageSearch;
