import React, { useEffect, useState } from "react";
import "./Homepage.css";

const danceStyles = [
  {
    imgSrc: "bollywood.jpg",
    title: "Western Dance",
    description: "Curae ex ad libero vestibulum vulputate per dolor.",
    link: "/bollywood"
  },
  {
    imgSrc: "watecolor1.jpg",
    title: "Drawing Class",
    description: "Curae ex ad libero vestibulum vulputate per dolor.",
    link: "/drawing"
  },
  {
    imgSrc: "classical.jpg",
    title: "Classical Dance",
    description: "Duis commodo magna dolor. Praesent et aliquet metus.",
    link: "/classical"
    
  },
  {
    imgSrc: "contemporary.jpg",
    title: "Contemporary",
    description: "Curae ex ad libero vestibulum vulputate per dolor.",
    link: "/contemporary"
  },
  {
    imgSrc: "instrument1.jpg",
    title: "Instrumental Class",
    description: "Aenean vitae arcu. Maecenas nec risus nunc. Cras.",
    link: "/instrumental"
  },
  {
    imgSrc: "zumba.jpg",
    title: "Zumba",
    description: "Aenean vitae arcu. Maecenas nec risus nunc. Cras.",
    link: "/zumba"
  }
];

const testimonials = [
  {
    stars: "★★★★★",
    content: "My daughter joined the dance crew a year ago, and we've seen her confidence skyrocket! The instructors understand and respect our cultural background, while encouraging the kids to explore new styles. It's been an incredible journey for her and our whole family.",
    author: "Priya-Parent"
  },
  {
    stars: "★★★★★",
    content: "Being part of the Asian Kids has been life-changing for my son. The blend of traditional and modern dance forms taught here has given him a strong sense of identity and pride in his heritage. We couldn't have asked for a better environment for him to grow and learn.",
    author: "Raj-Parent"
  },
  {
    stars: "★★★★★",
    content: "The Quality of dance they teach and the safety measures they take while dancing are awesome. Great to join AsianKids.",
    author: "Nayana"
  },
  {
    stars: "★★★★☆",
    content: "The instructors are amazing, they treat every one as their family, also the environment is very friendly.",
    author: "Rahul"
  },
  {
    stars: "★★★★★",
    content: "The Happy place for my soul. Great place to learn dance. Highly recommend!",
    author: "Antony"
  },
  {
    stars: "★★★★★",
    content: "The dance crew has given my child an amazing platform to express herself creatively while staying connected to our Asian roots. The teachers are so nurturing and bring out the best in every student. It's more than just dance; it's a community.",
    author: "Aisha-Parent"
  },
  {
    stars: "★★★★★",
    content: "Joining this dance crew has been the highlight of my son's year. The dedication of the instructors to preserving cultural authenticity while incorporating modern styles is truly commendable. It's been an empowering experience for him, and we're so proud of his progress.",
    author: "Bhaskar-Parent"
  }
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

const services = [
  {
    icon: "fa-music",
    title: "Choreography",
    description: "Musicals, Concerts, Theatrical Acts, Dance Reality Shows, Award Shows, Serials, Advertisements."
  },
  {
    icon: "fa-video",
    title: "Music Videos",
    description: "Choreography for music videos with celebrities, dance music video collaboration."
  },
  {
    icon: "fa-gift",
    title: "Wedding",
    description: "Performance for wedding, Choreography and training for Sangeet & Wedding."
  },
  {
    icon: "fa-briefcase",
    title: "Corporate Events",
    description: "Performances for national & international shows and corporate events."
  },
  {
    icon: "fa-award",
    title: "Award Functions",
    description: "Performances in renowned award ceremonies at national & international platforms."
  },
  {
    icon: "fa-star",
    title: " Judge",
    description: " Judge for schools/colleges dance events and other dance competitions."
  }
];

const stats = [
  { value: "+20", label: "Years of Experience" },
  { value: "+10,000", label: "Certified Students" },
  { value: "+5,000", label: "Live Shows" },
  { value: "+100", label: "Awards won" }
];

const Homepage = () => {
  const [currentDanceIndex, setCurrentDanceIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Changes testimonial every 3 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  
  return (
    <div className="homepage">
      {/* Hero section */}
      <header className="hero">
        <video autoPlay loop muted className="background-video">
          <source src="/sample video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="black-overlay"></div>
        <div className="hero-content">
          <h1>ASIAN KIDS DANCE CREW</h1>
          <p>YOUR JOURNEY BEGINS HERE..!</p>
          <a href="/classes" className="btn1">
            Explore Classes
          </a>
          <a href="/contactus" className="btn2">
            Join Us
          </a>
        </div>
      </header>

      {/* Dance Styles section */}
      <section className="dance-styles-section">
        <div className="container">
          <h2>Our Classes</h2>
          <div className="dance-styles-carousel">
            {/* <button className="nav-buttons nav-buttons-left" onClick={handleDancePrev}>
              <i className="fa fa-chevron-left"></i>
            </button> */}
            <div
              className="dance-styles"
              style={{
                transform: `translateX(-${(currentDanceIndex % danceStyles.length) * 100}%)`,
                transition: "transform 0.5s ease-in-out"
              }}
            >
              {danceStyles.concat(danceStyles).map((style, index) => (
                <div className="dance-style" key={index}>
                  <div className="dance-style-card">
                    <img src={style.imgSrc} alt={style.title} />
                    <h3>{style.title}</h3>
                    <button
                      onClick={() => (window.location.href = "/contactus")}
                      className="learn-more"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* <button className="nav-buttons nav-buttons-right" onClick={handleDanceNext}>
              <i className="fa fa-chevron-right"></i>
            </button> */}
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="testimonial-section">
        <h2>Testimonials from Our Members</h2>
        <div className="container">
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                className={`testimonial-box ${index === currentTestimonial ? "active" : ""}`}
                key={index}
              >
                <div className="stars">{testimonial.stars}</div>
                <p>{testimonial.content}</p>
                <p className="author">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services">
            {services.map((service, index) => (
              <div className="service" key={index}>
                <i className={`fas ${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
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

export default Homepage;