import React, { useState } from "react";
import "../hostform/hostform.css";
import labelData from "./LabelData";
import { fetchPlace } from "./FetchPlace";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

function HostForm() {
  // useState for hostform inputs
  const [title, setTitle] = useState();
  const [numberOfGuest, setNumberOfGuest] = useState();
  const [pets, setPets] = useState();
  const [duration, setDuration] = useState();
  const [labels, setLabels] = useState([]);
  const [description, setDescription] = useState();
  const [whatsapp, setWhatsApp] = useState();
  const [telegram, setTelegram] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [website, setWebsite] = useState();

  // useState for filtering and city API
  const [city, setCity] = useState([]);
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  // Function for fetching city API
  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  // function to submit inputs and store listing in loacal storage
  const handleSubmit = (e) => {
    const listing = {
      title: title,
      city: city,
      numberOfGuest: numberOfGuest,
      pets: pets,
      duration: duration,
      labels: labels,
      description: description,
      whatsapp: whatsapp,
      telegram: telegram,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      website: website,
    };

    // Local storage
    const listingDB = JSON.parse(localStorage.getItem("Data") || "[]");
    listingDB.unshift(listing);
    localStorage.setItem("Data", JSON.stringify(listingDB));
  };

  return (
    <div>
      {/* Hostform */}
      <form className="hostForm" onSubmit={handleSubmit}>
        {/* listing title */}
        <h2>Create a Listing</h2>
        <label htmlFor="listingTitle">Listing title</label>
        <br />
        <InputText
          placeholder="Write something descriptive"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        {/* your city */}
        <label htmlFor="yourCity">Your city</label>
        <br />
        <div className="placesAutocomplete">
          <div className="placesAutocomplete__inputWrap">
            <label htmlFor="city" className="label">
              {autocompleteErr && (
                <span className="inputError">{autocompleteErr}</span>
              )}
            </label>

            {/* input with city API */}
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
        <br />

        {/* No of guest */}
        <label htmlFor="numberOfGuest">How many guests can you house?</label>
        <br />
        <span id="faintText">
          If you have room for children, specify in the description.
        </span>
        <br />
        <InputNumber
          value={numberOfGuest}
          onChange={(e) => setNumberOfGuest(e.value)}
          required
        />
        <br />

        {/* Pets */}
        <label htmlFor="pets">Are pets allowed?</label>
        <br />
        <span>You can specify which pets are allowed in the description.</span>
        <br />
        <div>
          <div className="checkbox-item">
            <RadioButton
              inputId="yes"
              name="Pets"
              value="Pets Allowed"
              onChange={(e) => setPets(e.target.value)}
              checked={pets === "Pets Allowed"}
              required
            />
            <span>Yes</span>
          </div>
          <div className="checkbox-item">
            <RadioButton
              inputId="no"
              name="Pets"
              value="Pets Not Allowed"
              onChange={(e) => setPets(e.target.value)}
              checked={pets === "Pets Not Allowed"}
              required
            />
            <span>No</span>
          </div>
        </div>

        {/* duration of stay */}
        <label htmlFor="duration">Duration</label>
        <div>
          <div className="checkbox-item">
            <RadioButton
              inputId="short-term"
              name="duration"
              value="Short-term (1-7 days)"
              onChange={(e) => setDuration(e.target.value)}
              checked={duration === "Short-term (1-7 days)"}
              required
            />
            <span htmlFor="short-term">Short-term (1-7 days)</span>
          </div>
          <div className="checkbox-item">
            <RadioButton
              inputId="long-term"
              name="duration"
              value="Long-term (1 week+)"
              onChange={(e) => setDuration(e.target.value)}
              checked={duration === "Long-term (1 week+)"}
              required
            />
            <span htmlFor="long-term">Long-term (1 week+)</span>
          </div>
          <div className="checkbox-item">
            <RadioButton
              inputId="unsure"
              name="duration"
              value="Unsure"
              onChange={(e) => setDuration(e.target.value)}
              checked={duration === "Unsure"}
              required
            />
            <span htmlFor="Unsure">Unsure</span>
          </div>
          <br />

          {/* Labels */}
          <label htmlFor="listingTitle">Labels</label>
          <br />
          <MultiSelect
            options={labelData}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
          />
        </div>

        {/* Description */}
        <br />
        <label htmlFor="Description">Description</label>
        <br />
        <span id="faintText">Enter details about your accommodation.</span>
        <InputTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* contact info */}
        <div className="contactInfo">
          <br />
          <h2>Contact Information</h2>
          <br />
          <span id="faintText">Remember to include your country code</span>
          <br />
          <br />
          <label htmlFor="whatsapp">WhatsApp</label>
          <br />
          <InputText
            placeholder="Optional"
            value={whatsapp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />

          <br />
          <label for="telegram">Telegram</label>
          <br />
          <InputText
            placeholder="Optional"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
          />
          <br />

          <label htmlFor="phoneNumber">Phone Number</label>
          <br />
          <InputText
            placeholder="Optional"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />

          <label htmlFor="emailAddress">Email Address</label>
          <br />
          <InputText
            placeholder="Optional"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />

          <br />
          <label htmlFor="website">Website</label>
          <br />
          <InputText
            placeholder="Optional"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        {/* Create and cancel */}
        <Button label="Create" />

        <NavLink to="/provideShelter/ProvideShelterForm">
          <Button
            label="Cancel"
            className="p-button-secondary"
            id="cancelButton"
          />
        </NavLink>
      </form>
    </div>
  );
}

export default HostForm;
