// BookingForm.js
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

const BookingForm = ({ onFormSubmit, isFormSubmitted }) => {
  const [formValues, setFormValues] = useState({
    date: "",
    time: "",
    people: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <form onSubmit={(e) => onFormSubmit(e, formValues)}>
      <div className="reservation-container">
        <label htmlFor="date" className="containter-item-title">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.date ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="time" className="containter-item-title">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.time ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="people" className="containter-item-title">
          Number of people
        </label>
        <input
          type="number"
          id="people"
          name="people"
          min={minGuest}
          max={maxGuest}
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.people ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="occasion" className="containter-item-title">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.occasion ? "error" : ""}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="reservation-button">
        <Button title="Book a table" type="submit" />
      </div>
    </form>
  );
};

export default BookingForm;
