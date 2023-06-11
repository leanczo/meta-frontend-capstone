import React, { useState } from "react";
import "./Topbar.css";
import Logo from "../../assets/Logo.svg";
import MenuIcon from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate("/");
  };

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Menu", link: "/menu" },
    { id: 4, label: "Reservations", link: "/reservations" },
    { id: 5, label: "Order Online", link: "/orders" },
    { id: 6, label: "Login", link: "/login" }
  ];

  return (
    <header className="topbar">
      <div className="logo">
        <img src={Logo} alt="logo" height={50} onClick={onClickImage} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.link} className="link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
    </header>
  );
};

export default Topbar;
