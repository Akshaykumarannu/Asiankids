import React from "react";
import "./Classes.css";

const Classes = () => {
  return (
    <div className="classes-page">
      <div className="clas-banner">
      <video autoPlay loop muted className="background-video">
          <source src="/newclassuduma.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-text-class">
          <h1>Our Dance Studios</h1>
          <p>Explore our various locations and the unique experiences they offer.</p>
        </div>
      </div>
      
      <section className="studio-section">
        <div className="container-class">
          <div className="studio">
          <video autoPlay loop muted className="danceclassvideo">
          <source src="/VID-20240811-WA0007.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
            <div className="studio-info">
              <h2><i className="fas fa-map-marker-alt location-icon"></i> Uduma </h2>
              <p>Our Uduma location offers a vibrant and energetic atmosphere, perfect for dancers of all levels to learn and grow.</p>
              
              <p>Timings: 9.00am to 4.00pm &nbsp;&nbsp;&nbsp;All day classes available(kids & Seniors)</p>
              
              <a href="/#contactus" className="joinus-button">Join Us</a> 
            </div>
          </div>
          
          <div className="studio">
            
            <video autoPlay loop muted className="danceclassvideo">
          <source src="/WhatsApp Video 2024-08-08 at 9.23.34 PM.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
            <div className="studio-info">
              <h2><i className="fas fa-map-marker-alt location-icon"></i> Kanhangad</h2>
              <p>Located in the heart of Kanhangad, this studio is known for its professional instructors and state-of-the-art facilities.</p>
              <p>Timings: 9.00am to 4.00pm &nbsp;&nbsp;&nbsp; Only on Sunday's (kids & Seniors)</p>
              
              <a href="/#contactus" className="joinus-button">Join Us</a> 
            </div>
          </div>

          <div className="studio">
            <img src="https://i0.wp.com/blog.headbox.com/wp-content/uploads/2017/03/Flow-Dance-London-1.jpg?fit=1400%2C933&ssl=1" alt="Dubai Dance Studio" />
            <div className="studio-info">
              <h2><i className="fas fa-map-marker-alt location-icon"></i> Dubai</h2>
              <p>Our Dubai studio offers a luxurious environment with top-notch amenities, making it a premier destination for dance enthusiasts.</p>
              <a href="/#contactus" className="joinus-button">Join Us</a> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
