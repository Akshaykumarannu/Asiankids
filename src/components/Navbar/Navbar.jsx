import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/aklogo1.jpg";
import toggle_black from "../../assets/day.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const handleContactUsClick = () => {
    navigate('/contactus');
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <button className="btn" onClick={handleContactUsClick}>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
