import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

const Popup = ({ title, description, onClose }) => {
  return (
    <div>
      <div className="popup-background" onClick={onClose}></div>
      <div className="popup">
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
