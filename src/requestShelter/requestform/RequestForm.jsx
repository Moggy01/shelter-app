import "../requestform/requestform.css";
import labelData from "./LabelData";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

function RequestForm() {
  return (
    <div>
      <form className="hostForm">
        <h2>Search for a Host</h2>
        <br />
        <label for="yourCity">Preferred location</label>
        <br />
        <InputText placeholder="Start typing a city" />
        <br />
        <label for="numberOfGuest">How many people need a place to stay?</label>
        <br />
        <span id="faintText">
          If you have children, specify in the description.
        </span>
        <br />
        <InputNumber />
        <br />
        <label for="pets">Do you have any pets?</label>
        <br />
        <span>If yes, please specify what pets you have in the description.</span>
        <br />
        <div>
          <div className="checkbox-item">
            <RadioButton />
            <span>Yes</span>
          </div>
          <div className="checkbox-item">
            <RadioButton />
            <span>No</span>
          </div>
        </div>

        <label for="duration">Duration</label>

        <div>
          <div className="checkbox-item">
            <Checkbox />
            <span>Short-term (1-7 days)</span>
          </div>
          <div className="checkbox-item">
            <Checkbox />
            <span>Long-term (1 week+)</span>
          </div>
          <div className="checkbox-item">
            <Checkbox />
            <span>Unsure</span>
          </div>
          <br />
          <label for="listingTitle">Labels</label>
          <br />
          <MultiSelect
            options={labelData}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
          />
        </div>

        <br />
        <label for="Description">Description</label>
        <br />
        <span id="faintText">Enter any additional details about what you need from your host.</span>
        <InputTextarea />

        <div className="contactInfo">
          <br />
          <h2>Contact Information</h2>
          <br />
          <span id="faintText">Remember to include your country code</span>
          <br />
          <br />
          <label for="whatsapp">WhatsApp</label>
          <br />
          <InputText placeholder="Optional" />
          <br />
          <label for="telegram">Telegram</label>
          <br />
          <InputText placeholder="Optional" />
          <br />
          <label for="phoneNumber">Phone Number</label>
          <br />
          <InputText placeholder="Optional" />
          <br />
          <label for="emailAddress">Email Address</label>
          <br />
          <InputText placeholder="Optional" />
          <br />
          <label for="website">Website</label>
          <br />
          <InputText placeholder="Optional" />
        </div>
        {/* <Button>Create</Button> */}
        <Button label="Save" icon="pi pi-check" iconPos="left" />
        <Button
          label="Cancel"
          className="p-button-secondary"
          id="cancelButton"
        />
      </form>
    </div>
  );
}

export default RequestForm;