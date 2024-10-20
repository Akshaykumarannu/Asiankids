import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <h3><span>ASIAN </span>KIDS</h3>
              <p>Uduma - Romana Center, Uduma, Kasaragod </p>
              {/* <p>Kanhangad - Opposite of Taluk Office, Roof Top ,Puthiyakota Kanhangad</p> */}
              <div className="footer-icons">
              <a href="https://www.facebook.com/profile.php?id=100063835325194&mibextid=JRoKGi"> <i className="fa-brands fa-facebook"></i></a>
                {/* <i className="fa-brands fa-twitter"></i> */}
                
                {/* <i className="fa-brands fa-linkedin-in"></i> */}
                <a href="https://www.instagram.com/asiankids_dancecrew_official/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100063835325194&mibextid=JRoKGi"> <i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/asiankids_dancecrew_official/"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#about-us">About Us</a></li>
                <li><a href="/#classes">Classes</a></li>
                <li><a href="/#events">Events</a></li>
                <li><a href="/#gallery">Gallery</a></li>
                <li><a href="/#contactus
                ">Contact Us</a></li>
                
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us</h5>
              <p><i className="fa-solid fa-phone-volume"></i> +91 79073 93309</p>
              <p><i className="fa-solid fa-envelope"></i> asiankidsdancecrew@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Uduma & Kanhangad.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <p>&copy; asiankids_dancecrew_official
        &nbsp;<a href="https://www.instagram.com/asiankids_dancecrew_official/"><i className="fa-brands fa-instagram"></i></a>
        
        <br></br>All Rights Reserved. 
        &nbsp;Made with 🤍 by Akshay Kumar</p>
      </div>
    </>
  );
};

export default Footer;
