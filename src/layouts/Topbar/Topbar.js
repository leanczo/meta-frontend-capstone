import React from "react";
import "./Topbar.css";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const navigate = useNavigate();

  const onClickImage = () => {
    navigate("/");
  };

  return (
    <header className="topbar">
      <div className="logo">
        <img src={Logo} alt="logo" height={50} onClick={onClickImage} />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="link">
              About
            </a>
          </li>
          <li>
            <a href="/menu" className="link">
              Menu
            </a>
          </li>
          <li>
            <a href="/reservations" className="link">
              Reservations
            </a>
          </li>
          <li>
            <a href="/orders" className="link">
              Order Online
            </a>
          </li>
          <li>
            <a href="/login" className="link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
