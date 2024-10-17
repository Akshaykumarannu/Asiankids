import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/aklogo1.jpg";
import toggle_black from "/menuicon.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleContactUsClick = () => {
    setIsActive(false); // Close the menu after navigating
    navigate('/contactus');
  };

  const closeMenu = () => {
    if (isActive) setIsActive(false); // Close the menu after clicking an item
  };

  return (
    <nav className={`nav ${isActive ? "active" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="toggle-menu" onClick={toggleMenu}>
          <img src={toggle_black} alt="Toggle" className="night" />
        </div>
      </div>
      <ul className={isActive ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={closeMenu}>About Us</Link>
        </li>
        <li>
          <Link to="/classes" onClick={closeMenu}>Classes</Link>
        </li>
        <li>
          <Link to="/events" onClick={closeMenu}>Events</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        </li>
        <li>
          <button className="btn" onClick={handleContactUsClick}>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
