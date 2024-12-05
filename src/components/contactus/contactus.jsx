import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    comments: "",
  });
  const handleEnrollClick = () => {
    // Replace with the desired WhatsApp number and message
    const phoneNumber = "919526735765"; // Country code + phone number
    const message = encodeURIComponent(
      "Hello! I would like to enroll in your dance class."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp chat
    window.open(whatsappUrl, "_blank");
  };

  const handleInstaClick = () => {
    // Replace with the desired Instagram username
    const instagramUsername = "asiankids_dancecrew_official"; // Instagram username

    // Construct the Instagram profile URL
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;

    // Open the Instagram profile in a new tab
    window.open(instagramUrl, "_blank");
  };
  const phoneNumber = "+919526735765";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3sasqc",
        "template_w68047q",
        e.target,
        "svjCZwX--3ZzcZBpz"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            comments: "",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-us">
      <div className="contactus-banner">
        <img
          src="contactbackground.webp" 
          alt="Asian Kids Dance Crew Banner"
          className="banner-image-class"
        />
        <div className="banner-text-class">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="spaceforcontainer">
        <div className="contact-form-container">
          <h2>Direct Link</h2>
          <img
            src="whatsapp.webp" loading="lazy"
            alt="Contact Us"
            className="contact-us-image"
            onClick={handleEnrollClick}
          />
          <a href={`tel:${phoneNumber}`}>
            <img src="call.webp" alt="Call Us"  loading="lazy"className="contact-us-image" />
          </a>
          <img
            src="insta.webp" loading="lazy"
            alt="Contact Us"
            className="contact-us-image"
            onClick={handleInstaClick}
          />
          <h2>OR</h2>
          <h2>Get In Touch with us</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Details</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments / Questions</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-section">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Asian Kids</h3>
            <p>Romana Center, Uduma, Kasaragod</p>
          </div>
          <div className="info-section">
            <i className="fas fa-phone-alt"></i>
            <h3>For Shows and Events</h3>
            <p>+91 79073 93309 , 95267 35765</p>
          </div>
          <div className="info-section">
            <i className="fas fa-envelope"></i>
            <h3>Email Address</h3>
            <p>asiankidsdancecrew@gmail.com</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
