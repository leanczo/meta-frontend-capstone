// Reservations.js
import React, { useState } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pages";

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  return (
    <div className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <BookingForm
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            navigate(pages.get("home").path);
          }}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        />
      )}
    </div>
  );
};

export default Reservations;
