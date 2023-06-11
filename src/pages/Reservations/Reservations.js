import React from "react";
import "./Reservations.css";
import Button from "../../components/Button/Button";
import Popup from "../../components/Popup/Popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pages";

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  }

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <div className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="reservation-container">
            <label htmlFor="date" className="containter-item-title">
              Date
            </label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="reservation-container">
            <label htmlFor="time" className="containter-item-title">
              Time
            </label>
            <input type="time" id="time" name="time" />
          </div>
          <div className="reservation-container">
            <label htmlFor="people" className="containter-item-title">
              Number of people
            </label>
            <input type="number" id="people" name="people" min={minGuest} max={maxGuest} />
          </div>
          <div className="reservation-container">
            <label htmlFor="occasion" className="containter-item-title">
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
            <Button
              title="Book a table"
              type="submit"
            />
          </div>
        </form>
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            navigate(pages.get("home").path);
          }}
          title="Reservation Completed!"
          description="Thank you htmlFor choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!
"
        />
      )}
    </div>
  );
};
export default Reservations;
