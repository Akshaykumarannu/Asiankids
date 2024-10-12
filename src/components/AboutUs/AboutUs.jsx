import React, { useEffect, useState } from "react";
import "./AboutUs.css";

const instructors = [
  { id: 1, name: "Midhuna", imgSrc: "/Screenshot_20240806-181958.png", instaUsername: "john_doe" },
  { id: 2, name: "Shyam", imgSrc: "/shyam.jpeg", instaUsername: "john_doe" },
  { id: 3, name: "Vaishak", imgSrc: "/vaishak.png", instaUsername: "jane_smith" },
  { id: 4, name: "Manu", imgSrc: "/manu.png", instaUsername: "john_doe" },
  { id: 5,  name: "Anju", imgSrc: "/anju2.jpg", instaUsername: "john_doe"},
  { id: 6, name: "Pradeep", imgSrc: "/pradeep2.png", instaUsername: "john_doe" },
  { id: 7, name: "Gappi", imgSrc: "/gappy.jpg", instaUsername: "jane_smith" },
  { id: 8, name: "Rakhi", imgSrc: "/Screenshot_20240807-142123.png", instaUsername: "jane_smith" },
  { id: 9, name: "Praveen", imgSrc: "/Screenshot_20240806-181434.png", instaUsername: "john_doe" },
  { id: 10, name: "Shreya", imgSrc: "/Screenshot_20240807-142205.png", instaUsername: "jane_smith" },
  { id: 11, name: "Akshay", imgSrc: "/akshay2.png", instaUsername: "annu_akshay" },
  { id: 12, name: "Renjith", imgSrc: "/renjith.png", instaUsername: "john_doe" },
  { id: 13, name: "Mithun", imgSrc: "/mithun.png", instaUsername: "jane_smith" },
  { id: 14, name: "Ranjith", imgSrc: "/Screenshot_20240807-142616.png", instaUsername: "john_doe" },
  { id: 15, name: "Sarath", imgSrc: "/Screenshot_20240807-142401.png", instaUsername: "jane_smith" },
  { id: 16, name: "Richu", imgSrc: "/Screenshot_20240807-142543.png", instaUsername: "john_doe" },
  { id: 17, name: "Nakshatra", imgSrc: "/Screenshot_20240807-142724.png", instaUsername: "jane_smith" },
  { id: 18, name: "Ranju Pady", imgSrc: "/Screenshot_20240807-183203.png", instaUsername: "jane_smith" },
  { id: 19, name: "Vavachi", imgSrc: "/Screenshot_20240807-142833.png", instaUsername: "john_doe" },
  { id: 20, name: "Radhu", imgSrc: "/Screenshot_20240807-143927.png", instaUsername: "jane_smith" },
  { id: 21, name: "Achu", imgSrc: "/Screenshot_20240807-144016.png", instaUsername: "john_doe" },
  { id: 22, name: "Ameya", imgSrc: "/Screenshot_20240807-142954.png", instaUsername: "john_doe" },
  { id: 23, name: "Swapna", imgSrc: "/Screenshot_20240807-143022.png", instaUsername: "jane_smith" },
  { id: 24, name: "sriji", imgSrc: "/Screenshot_20240807-143100.png", instaUsername: "john_doe" },
  { id: 25, name: "Nithu", imgSrc: "/Screenshot_20240807-143135.png", instaUsername: "jane_smith" },
  { id: 26, name: "Vinu", imgSrc: "/vinod.png", instaUsername: "jane_smith" },
  { id: 27, name: "Sooraj", imgSrc: "/Screenshot_20240807-143248.png", instaUsername: "jane_smith" },
  { id: 28, name: "Vishnu", imgSrc: "/Screenshot_20240807-143341.png", instaUsername: "jane_smith" },
  { id: 29, name: "Kavya", imgSrc: "/Screenshot_20240807-143409.png", instaUsername: "john_doe" },
  { id: 30, name: "Karthik", imgSrc: "/teammember3.png", instaUsername: "jane_smith" },
  {id: 31, name: "Abhi", imgSrc: "/IMG-20240809-WA0021.jpg", instaUsername: "jane_smith" },
  {id: 32, name: "Deepthi", imgSrc: "/IMG-20240809-WA0022.jpg", instaUsername: "jane_smith" },
  { id: 33, name: "Anupama", imgSrc: "/Screenshot_20240809-204459.png", instaUsername: "jane_smith" },
  { id: 34, name: "Depashree", imgSrc: "/Screenshot_20240809-202033.png", instaUsername: "jane_smith" },
  
  // Add more sample data as needed
];

const teamMembers = [
  {
    imgSrc: "shyamdas.png",
    name: "Shyamdas Vaidyar",
    role: "Founder / Choreographer / Director",
    instagram: "https://www.instagram.com/shyamdasvaidyar/"
  },
  {
    imgSrc: "manu.png",
    name: "Manu",
    role: "Choreographer / Instructor",
    instagram:'https://www.instagram.com/man_u_un_locked_man/'
  },
  {
    imgSrc: "pradeep2.png",
    name: "Pradeep Koppal",
    role: "Manager / Dancer",
     instagram: "https://www.instagram.com/_pradeep_koppal/"
  },
  {
    imgSrc: "karthietta.png",
    name: "Karthik KR",
    role: "Choreographer / Instructor"
    , instagram: "https://www.instagram.com/karthikmayavi/"
  },
  {
    imgSrc: "akshay2.png",
    name: "Akshay Kumar",
    role: "Dancer / Instructor",
     instagram: "https://www.instagram.com/annu_akshay/"
  },
  {
  imgSrc: "athira.png",
    name: "Athira lakshmanan",
    role: "Classical Dancer / Instructor",
     instagram: "https://www.instagram.com/athiralakshmananhoney/"
  },
  {
    imgSrc: "renjith.png",
    name: "Rengith",
    role: "Dancer / Instructor",
     instagram: "https://www.instagram.com/mr_capture_head/"
  },
  {
    imgSrc: "vinod.png",
    name: "Vinod Thekzz",
    role: "Choreographer / Instructor",
     instagram: "https://www.instagram.com/vinuthekzz/"
  },
  // {
  //   imgSrc: "mithun.png",
  //   name: "Mithun",
  //   role: "Dancer",
  //    instagram: "https://www.instagram.com/me_thu_n46/"
  // },
  {
    imgSrc: "Screenshot_20240806-181958.png",
    name: "Midhuna",
    role: "Dancer / Instructor",
    instagram:'https://www.instagram.com/_k_a_t_h_u_zzz_/'
  }
];
const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };
  const handleDancePrev = () => {
    setCurrentDanceIndex((prevIndex) => (prevIndex - 1 + danceStyles.length) % danceStyles.length);
  };

  const handleDanceNext = () => {
    setCurrentDanceIndex((prevIndex) => (prevIndex + 1) % danceStyles.length);
  };

  const handleTeamPrev = () => {
    setCurrentTeamIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleTeamNext = () => {
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="about-us">
      <div className="about-banner">
        <video autoPlay loop muted className="background-video">
          <source src="/roadshows.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-text">
          <h1>About Us</h1>
          <p>
            Welcome to Asian Kids Dance Crew! We are dedicated to providing exceptional dance education to children of all ages and skill levels.
          </p>
        </div>
      </div>

      <section className="our-vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <h2>A Space For Your Dreams</h2>
              <br />
              <p>
                Asian Kids is a dance studio in Uduma & Kanhangad (KASARAGOD), is a
                highly professional and dynamic dancing community started by a
                group of passionate and creative young people. These young
                spirits all have the passion for dance burned into their every
                DNA, and Asian Kids is the culmination of years of their hard
                work, dedication, and pain. This is the dream destination for
                anyone who is looking to learn under expert guidance, inspire
                each other and grow altogether as one big community. Throughout
                their dancing careers, this team came across various struggles
                and overcame them all with their dedication. This dedication is
                the secret recipe they are willing to share and teach to anyone
                who knocks at the door of Asian Kids – by sharing their
                experiences and wisdom so that no one will ever fail again.
              </p>
            </div>
            <div className="vision-image">
              <img src="/mergegroupphoto.jpeg" alt="Vision" />
            </div>
          </div>
        </div>
      </section>

      <section className="section reverse">
        <div className="section-content">
          <h2>Our Vision</h2>
          <p>
            Our team of experienced and passionate instructors are dedicated to
            helping each student reach their full potential. They bring a wealth
            of knowledge and a love of dance to every class.
          </p>
        </div>
        <img src="bluedress.jpg" alt="Our Instructors" className="section-image" />
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to promote physical fitness, creativity, and
            self-expression through dance. We believe that dance can have a
            profound impact on a child's development, fostering confidence,
            discipline, and teamwork.
          </p>
        </div>
        <img src="background3.jpg" alt="Our Mission" className="section-image" />
      </section>

      <section className="section reverse">
        <div className="section-content">
          <h2>Our History</h2>
          <p>
            Founded in 2000, Asian Kids Dance Crew has quickly become a beloved
            part of the community. We have helped hundreds of children discover
            the joy of dance and look forward to continuing to inspire future
            generations.
          </p>
        </div>
        <img src="IMG-20240717-WA0009.jpg" alt="Our History" className="section-image" />
      </section>
      {/* Team section */}
      <section className="team-section">
        <h2>Our Instructors</h2>
        <div className="container">
          {/* Navigation buttons for the Team Members section */}
          {/* <button className="nav-buttons nav-buttons-left" onClick={handleTeamPrev}>
            <i className="fa fa-chevron-left"></i> */}
          {/* </button> */}
          <div className="team-carousel">
            <div
              className="team-members"
              style={{
                transform: `translateX(-${currentTeamIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out"
              }}
            >
              {teamMembers.map((member, index) => (
                <div className="team-member" key={index}>
                  <div className="team-member-card">
                    <img src={member.imgSrc} alt={member.name} />
                    <h3>
                      {member.name}
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <button className="nav-buttons nav-buttons-right" onClick={handleTeamNext}>
            <i className="fa fa-chevron-right"></i>
          </button> */}
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
