import React from "react";
import "./Topbar.css";
import Logo from "../../assets/Logo.svg";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="logo">
        <img src={Logo} alt="logo" height={50} />
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
            <a href="/order" className="link">
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