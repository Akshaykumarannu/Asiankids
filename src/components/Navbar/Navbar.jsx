import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/aklogo1.jpg";
import toggle_black from "/menuicon.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Close menu and navigate to Contact Us page
  const handleContactUsClick = () => {
    setIsActive(false); // Close the menu after navigating
    navigate('/contactus');
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    if (isActive) setIsActive(false);
  };

  // Close menu when clicking outside the menu in mobile view
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isActive && !event.target.closest('.nav')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isActive]);

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
