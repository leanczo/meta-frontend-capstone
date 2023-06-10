import React from "react";
import "./FoodCard.css";
import delivery from "../../assets/delivery.svg";

const FoodCard = ({ title, description, image, price }) => {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt="food" height={200}></img>
      </div>
      <div className="food-card-body">
        <div className="food-card-body-header">
          <div className="food-card-body-title-header">
            <p className="food-card-title">{title}</p>
            <p className="food-card-price">{price}</p>
          </div>
          <p className="food-card-description">{description}</p>
        </div>

        <div className="food-card-delivery">
          <p className="food-card-delivery-title">Order a delivery</p>
          <img src={delivery} alt="uber eats"></img>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
