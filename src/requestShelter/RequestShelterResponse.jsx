import React, { useState } from "react";
import _navBarRequestShelter from "./_navBarRequestShelter";

import { fetchPlace } from "../provideShelter/hostform/FetchPlace";
import { InputText } from "primereact/inputtext";
import Entry from "./Entry";
import "./listings.css";

function RequestShelterResponse() {
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

  const storedListingDB = JSON.parse(localStorage.getItem("Data"));

  function createEntry(storedListingDB) {
    return (
      <div>
        <Entry
          key={storedListingDB.id}
          title={storedListingDB.title}
          numberOfGuest={storedListingDB.numberOfGuest}
          pets={storedListingDB.pets}
          duration={storedListingDB.duration}
          city={storedListingDB.city}
        />
      </div>
    );
  }

  return (
    <div>
      <_navBarRequestShelter />
      <h1>Find a safe place to stay</h1>

      {/* search bar */}
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
        </div>
      </form>

      {/* filtering and maping to display listings */}
      <div className="listings">
        {storedListingDB
          .filter((createEntry) => {
            if (city == "") {
              return createEntry;
            } else if (city == createEntry.city) {
              return createEntry;
            }
          })
          .map(createEntry)}
      </div>
    </div>
  );
}

export default RequestShelterResponse;
