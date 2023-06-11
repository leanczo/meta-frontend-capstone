import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          <p className="footer-item"> Home</p>
          <p className="footer-item"> About</p>
          <p className="footer-item"> Menu</p>
          <p className="footer-item"> Reservations</p>
          <p className="footer-item"> Order Online</p>
          <p className="footer-item"> Login</p>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item"> 123 Citrus Lane</p>
          <p className="footer-item"> 123-456-7890</p>
          <p className="footer-item"> little.lemon@lemon.com</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA LINKS</p>
          <p className="footer-item"> Facebook</p>
          <p className="footer-item"> Instagram</p>
          <p className="footer-item"> Twitter</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
