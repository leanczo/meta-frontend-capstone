import React from "react";
import "./Reservations.css";
import Button from "../../components/Button/Button";

const Reservations = () => {
  return (
    <div className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <div className="reservation-container">
          <label for="date" className="containter-item-title">
            Date
          </label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="reservation-container">
          <label for="time" className="containter-item-title">
            Time
          </label>
          <input type="time" id="time" name="time" />
        </div>
        <div className="reservation-container">
          <label for="people" className="containter-item-title">
            Number of people
          </label>
          <input type="number" id="people" name="people" />
        </div>
        <div className="reservation-container">
          <label for="occasion" className="containter-item-title">
            Occasion
          </label>
          <select id="occasion" name="occasion">
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="reservation-button">
          <Button title="Book a table" />
        </div>
      </div>
    </div>
  );
};
export default Reservations;
