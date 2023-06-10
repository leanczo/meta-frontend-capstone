import React from "react";
import "./FoodCard.css";

const FoodCard = ({ title, description, image, price }) => {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt="food" height={200}></img>
        <div className="food-card-body">
          <div className="food-card-body-header">
            <p className="food-card-title">{title}</p>
            <p className="food-card-price">{price}</p>
          </div>
          <p className="food-card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
