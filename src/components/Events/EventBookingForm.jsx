import React, { useState } from 'react';
import './EventBookingForm.css';
import emailjs from 'emailjs-com';

const EventBookingForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactDetails: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_j3sasqc', // Replace with your EmailJS service ID
        'template_w68047q', // Replace with your EmailJS template ID
        formData,
        'svjCZwX--3ZzcZBpz' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!, We will Contact you Soon...!');
          closeModal();
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Book Your Event...!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactDetails"
            placeholder="Contact Details"
            value={formData.contactDetails}
            onChange={handleChange}
            required
          />
          <textarea
            name="comments"
            placeholder="Enter the type of event and Event details."
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default EventBookingForm;
