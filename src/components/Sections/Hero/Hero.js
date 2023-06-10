import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import Image from "../../../assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Ullamco nisi non proident nostrud fugiat deserunt. Aliquip qui non
          tempor elit culpa cillum id excepteur dolor ad minim esse voluptate.
          Non laborum labore velit qui est. Sit consectetur aliqua qui
          adipisicing mollit et commodo culpa.
        </p>
        <Button title={"Reserve a table"} />
      </div>
      
      <img className="image" src={Image} alt="Restarurant food" height={200} width={200} />
    </div>
  );
};

export default Hero;
