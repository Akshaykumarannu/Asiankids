import React, { useState } from 'react';
import './Events.css';
import visual1 from '/IMG-20240717-WA0022.webp';
import visual2 from '/IMG-20240717-WA0030.webp';
import visual3 from '/IMG-20240717-WA0029.webp';
import EventBookingForm from './EventBookingForm.jsx';

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="events-page">
      {isModalOpen && <EventBookingForm closeModal={closeModal} />}
      
      <div className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src="https://res.cloudinary.com/diqcdbpg4/video/upload/v1733512084/weddingTrim_rpjwmy.mp4" alt="Background Video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>Book us for Live Events</h1>
          <button className="cta-button" onClick={openModal}>Book Now</button>
        </div>
      </div>

      <div className="info-sections">
        <h2>We travel throughout the world! Performers will perform and hype up the dance floor with your guests!</h2>
        <ul>
          <li><i className="fas fa-calendar-alt"></i> Corporate Events</li>
          <li><i className="fas fa-heart"></i> Weddings</li>
          <li><i className="fas fa-birthday-cake"></i> Birthdays</li>
          <li><i className="fas fa-music"></i> Concerts</li>
          <li><i className="fas fa-theater-masks"></i> Festivals</li>
          <li><i className="fas fa-school"></i> School Programs</li>
          <li><i className="fas fa-futbol"></i> Halftime Shows</li>
          <li><i className="fas fa-trophy"></i> Sporting Events</li>
          <li><i className="fas fa-video"></i> Music Videos</li>
          <li><i className="fas fa-star"></i> Any Event!</li>
        </ul>
      </div>

      <div className="visual-section">
        <img src={visual1} alt="Event Visual 1" loading="lazy" className="responsive-image" />
        <img src={visual2} alt="Event Visual 2" loading="lazy"className="responsive-image" />
        <img src={visual3} alt="Event Visual 3" loading="lazy"className="responsive-image" />
      </div>
    </div>
  );
};

export default Events;
