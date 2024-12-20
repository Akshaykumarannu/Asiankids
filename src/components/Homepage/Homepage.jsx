import React, { useEffect, useState } from "react";
import "./Homepage.css";

const danceStyles = [
  {
    imgSrc: "bollywood.webp",alt :"western",
    title: "Western ",
    description: "Curae ex ad libero vestibulum vulputate per dolor.",
    link: "/bollywood",
  },

  {
    imgSrc: "classical.webp",alt :"classical",
    title: "Classical ",
    description: "Duis commodo magna dolor. Praesent et aliquet metus.",
    link: "/classical",
  },
  {
    imgSrc: "contemporary.webp",alt :"contemporary",
    title: "Contemporary",
    description: "Curae ex ad libero vestibulum vulputate per dolor.",
    link: "/contemporary",
  },

  {
    imgSrc: "zumba.webp",alt :"zumba",
    title: "Zumba",
    description: "Aenean vitae arcu. Maecenas nec risus nunc. Cras.",
    link: "/zumba",
  },
  {
    imgSrc: "watecolor1.webp",alt :"watecolor",
    title: "Drawing",
    description: "Curae ex ad libero vestibulum vulputate per dolor.",
    link: "/drawing",
  },
  {
    imgSrc: "instrument2.webp",alt :"instrumental",
    title: "Instrumental",
    description: "Aenean vitae arcu. Maecenas nec risus nunc. Cras.",
    link: "/instrumental",
  },
];
const instructors = [
  { id: 2, name: "Shyam", imgSrc: "/shyam.webp",alt :"Shayam", instaUsername: "john_doe" },
  {
    id: 3,
    name: "Vaishak",alt :"Vaishak",
    imgSrc: "/vaishak.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 30,
    name: "Karthik",
    imgSrc: "/teammember3.webp",alt :"Karthik",
    instaUsername: "jane_smith",
  },
  { id: 4, name: "Manu", imgSrc: "/manu.webp",alt :"Manu", instaUsername: "john_doe" },
  {
    id: 6,
    name: "Pradeep",
    imgSrc: "/pradeep2.webp",alt :"Pradeep",
    instaUsername: "john_doe",
  },
  { id: 26, name: "Vinu", imgSrc: "/vinod.webp",alt :"Vinu", instaUsername: "jane_smith" },
  { id: 7, name: "Gappi", imgSrc: "/gappi.webp", alt :"Gappi",instaUsername: "jane_smith" },
  {
    id: 18,
    name: "Ranju Pady",alt :"Ranju Pady",
    imgSrc: "/Screenshot_20240807-183203.webp",
    instaUsername: "jane_smith",
  },
  { id: 5, name: "Anju", alt :"Anju",imgSrc: "/anju2.webp", instaUsername: "john_doe" },
  {
    id: 9,
    name: "Praveen",alt :"Praveen",
    imgSrc: "/Screenshot_20240806-181434.webp",
    instaUsername: "john_doe",
  },
  {
    id: 11,
    name: "Akshay",alt :"Akshay",
    imgSrc: "/annu.webp",
    instaUsername: "annu_akshay",
  },
  {
    id: 10,
    name: "Shreya",alt :"Shreya",
    imgSrc: "/Screenshot_20240807-142205.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 12,
    name: "Renjith",alt :"Renjith",
    imgSrc: "/renjith.webp",
    instaUsername: "john_doe",
  },
  {
    id: 13,
    name: "Mithun",alt :"Mithun",
    imgSrc: "/mithun.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 15,
    name: "Sarath",alt :"Sarath",
    imgSrc: "/Screenshot_20240807-142401.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 1,
    name: "Midhuna",alt :"Midhuna",
    imgSrc: "/Screenshot_20240806-181958.webp",
    instaUsername: "john_doe",
  },
  {
    id: 28,
    name: "Vishnu",alt :"Vishnu",
    imgSrc: "/Screenshot_20240807-143341.webp",
    instaUsername: "jane_smith",
  },

  {
    id: 8,
    name: "Rakhi",alt :"Rakhi",
    imgSrc: "/Screenshot_20240807-142123.webp",
    instaUsername: "jane_smith",
  },

  {
    id: 14,
    name: "Ranjith",alt :"Ranjith",
    imgSrc: "/Screenshot_20240807-142616.webp",
    instaUsername: "john_doe",
  },

  {
    id: 16,
    name: "Richu",alt :"Richu",
    imgSrc: "/Screenshot_20240807-142543.webp",
    instaUsername: "john_doe",
  },
  {
    id: 17,
    name: "Nakshatra",alt :"Nakshatra",
    imgSrc: "/Screenshot_20240807-142724.webp",
    instaUsername: "jane_smith",
  },

  {
    id: 19,
    name: "Vavachi",alt :"Vavachi",
    imgSrc: "/Screenshot_20240807-142833.webp",
    instaUsername: "john_doe",
  },

  {
    id: 21,
    name: "Achu",alt :"Achu",
    imgSrc: "/Screenshot_20240807-144016.webp",
    instaUsername: "john_doe",
  },
  {
    id: 22,
    name: "Ameya",alt :"Ameya",
    imgSrc: "/Screenshot_20240807-142954.webp",
    instaUsername: "john_doe",
  },
  {
    id: 20,
    name: "Radhu",alt :"Radhu",
    imgSrc: "/Screenshot_20240807-143927.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 23,
    name: "Swapna",alt :"Swapna",
    imgSrc: "/Screenshot_20240807-143022.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 24,
    name: "sriji",alt :"sriji",
    imgSrc: "/Screenshot_20240807-143100.webp",
    instaUsername: "john_doe",
  },
  {
    id: 25,
    name: "Nithu",alt :"Nithu",
    imgSrc: "/Screenshot_20240807-143135.webp",
    instaUsername: "jane_smith",
  },

  {
    id: 27,
    name: "Sooraj",alt :"Sooraj",
    imgSrc: "/Screenshot_20240807-143248.webp",
    instaUsername: "jane_smith",
  },

  {
    id: 29,
    name: "Kavya",alt :"Kavya",
    imgSrc: "/Screenshot_20240807-143409.webp",
    instaUsername: "john_doe",
  },

  {
    id: 31,
    name: "Abhi",alt :"Abhi",
    imgSrc: "/IMG-20240809-WA0021.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 32,
    name: "Deepthi",alt :"Deepthi",
    imgSrc: "/IMG-20240809-WA0022.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 33,
    name: "Anupama",alt :"Anupama",
    imgSrc: "/Screenshot_20240809-204459.webp",
    instaUsername: "jane_smith",
  },
  {
    id: 34,
    name: "Depashree",alt :"Depashree",
    imgSrc: "/Screenshot_20240809-202033.webp",
    instaUsername: "jane_smith",
  },

  // Add more sample data as needed
];

const testimonials = [
  {
    stars: "★★★★★",
    content:
      "My daughter joined the dance crew a year ago, and we've seen her confidence skyrocket! The instructors understand and respect our cultural background, while encouraging the kids to explore new styles. It's been an incredible journey for her and our whole family.",
    author: "Priya-Parent",
  },
  {
    stars: "★★★★★",
    content:
      "Being part of the Asian Kids has been life-changing for my son. The blend of traditional and modern dance forms taught here has given him a strong sense of identity and pride in his heritage. We couldn't have asked for a better environment for him to grow and learn.",
    author: "Raj-Parent",
  },
  {
    stars: "★★★★★",
    content:
      "The Quality of dance they teach and the safety measures they take while dancing are awesome. Great to join AsianKids.",
    author: "Nayana",
  },
  {
    stars: "★★★★☆",
    content:
      "The instructors are amazing, they treat every one as their family, also the environment is very friendly.",
    author: "Rahul",
  },
  {
    stars: "★★★★★",
    content:
      "The Happy place for my soul. Great place to learn dance. Highly recommend!",
    author: "Antony",
  },
  {
    stars: "★★★★★",
    content:
      "The dance crew has given my child an amazing platform to express herself creatively while staying connected to our Asian roots. The teachers are so nurturing and bring out the best in every student. It's more than just dance; it's a community.",
    author: "Aisha-Parent",
  },
  {
    stars: "★★★★★",
    content:
      "Joining this dance crew has been the highlight of my son's year. The dedication of the instructors to preserving cultural authenticity while incorporating modern styles is truly commendable. It's been an empowering experience for him, and we're so proud of his progress.",
    author: "Bhaskar-Parent",
  },
];

const teamMembers = [
  {
    imgSrc: "shyamdas.webp",
    name: "Shyamdas Vaidyar",
    role: "Founder / Choreographer / Director",
    instagram: "https://www.instagram.com/shyamdasvaidyar/",
  },
  {
    imgSrc: "manu.webp",
    name: "Manu",
    role: "Choreographer / Instructor",
    instagram: "https://www.instagram.com/man_u_un_locked_man/",
  },
  {
    imgSrc: "pradeep2.webp",
    name: "Pradeep Koppal",
    role: "Manager / Dancer",
    instagram: "https://www.instagram.com/_pradeep_koppal/",
  },
  {
    imgSrc: "karthietta.webp",
    name: "Karthik KR",
    role: "Choreographer / Instructor",
    instagram: "https://www.instagram.com/karthikmayavi/",
  },
  {
    imgSrc: "akshay2.webp",
    name: "Akshay Kumar",
    role: "Dancer / Instructor",
    instagram: "https://www.instagram.com/annu_akshay/",
  },
  {
    imgSrc: "athira.webp",
    name: "Athira lakshmanan",
    role: "Classical Dancer / Instructor",
    instagram: "https://www.instagram.com/athiralakshmananhoney/",
  },
  {
    imgSrc: "renjith.webp",
    name: "Rengith",
    role: "Dancer / Instructor",
    instagram: "https://www.instagram.com/mr_capture_head/",
  },
  {
    imgSrc: "vinod.webp",
    name: "Vinod Thekzz",
    role: "Choreographer / Instructor",
    instagram: "https://www.instagram.com/vinuthekzz/",
  },
  // {
  //   imgSrc: "mithun.webp",
  //   name: "Mithun",
  //   role: "Dancer",
  //    instagram: "https://www.instagram.com/me_thu_n46/"
  // },
  {
    imgSrc: "Screenshot_20240806-181958.webp",
    name: "Midhuna",
    role: "Dancer / Instructor",
    instagram: "https://www.instagram.com/_k_a_t_h_u_zzz_/",
  },
];

const services = [
  {
    icon: "fa-music",
    title: "Choreography",
    description:
      "Musicals, Concerts, Theatrical Acts, Dance Reality Shows, Award Shows, Serials, Advertisements.",
  },
  {
    icon: "fa-video",
    title: "Music Videos",
    description:
      "Choreography for music videos with celebrities, dance music video collaboration.",
  },
  {
    icon: "fa-gift",
    title: "Wedding",
    description:
      "Performance for wedding, Choreography and training for Sangeet & Wedding.",
  },
  {
    icon: "fa-briefcase",
    title: "Corporate Events",
    description:
      "Performances for national & international shows and corporate events.",
  },
  {
    icon: "fa-award",
    title: "Award Functions",
    description:
      "Performances in renowned award ceremonies at national & international platforms.",
  },
  {
    icon: "fa-star",
    title: " Judge",
    description:
      " Judge for schools/colleges dance events and other dance competitions.",
  },
];

const stats = [
  { value: "+20", label: "Years of Experience" },
  { value: "+10,000", label: "Certified Students" },
  { value: "+5,000", label: "Live Shows" },
  { value: "+100", label: "Awards won" },
];


const Homepage = () => {
  const [currentDanceIndex, setCurrentDanceIndex] = useState(0);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleEnrollingClick = () => {
    // Replace with the desired WhatsApp number and message
    const phoneNumber = "919526735765"; // Country code + phone number
    const message = encodeURIComponent(
      "Hello! I would like to enroll in your dance class."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp chat
    window.open(whatsappUrl, "_blank");
  };
  const phoneNumber = "+919526735765";

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructors.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Changes testimonial every 3 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    
    <div className="homepage">
      {/* Hero section */}
      <header className="hero">
        <video autoPlay loop muted className="background-video" loading="lazy">
          <source src="https://res.cloudinary.com/diqcdbpg4/video/upload/v1733512004/sample_video_gwmu34.mp4" alt="Background Video" loading="lazy" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="black-overlay"></div>
        <div className="hero-content">
          <h1>ASIAN KIDS DANCE CREW</h1>
          <p>YOUR JOURNEY BEGINS HERE..!</p>
          <a href={`tel:${phoneNumber}`}>
            <button className="btn1">Call Us</button>
          </a>
          <a><button className="btn2" onClick={handleEnrollingClick}>Join Us</button></a>
          
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
                transform: `translateX(-${
                  (currentDanceIndex % danceStyles.length) * 100
                }%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {danceStyles.concat(danceStyles).map((style, index) => (
                <div className="dance-style" key={index}>
                  <div className="dance-style-card">
                    <img src={style.imgSrc} loading="lazy" alt={style.title} />
                    <h3>{style.title}</h3>
                    <button
                      onClick={() => handleEnrollingClick()}
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
                className={`testimonial-box ${
                  index === currentTestimonial ? "active" : ""
                }`}
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

      <section className="teams-section">
        <h2>Our Team</h2>
        <div className="instructors-carousel">
          <button className="carousel-buttonprev" onClick={handlePrev}>
            ❮
          </button>
          <div className="instructors">
            {instructors
              .slice(currentIndex, currentIndex + 5)
              .concat(
                instructors.slice(
                  0,
                  Math.max(0, currentIndex + 5 - instructors.length)
                )
              ) // For wrapping
              .map((instructor, index) => (
                <div className="instructor" key={index}>
                  <img
                    src={instructor.imgSrc} loading="lazy"
                    alt={`Instructor ${instructor.name}`}
                    className="instructor-image"
                  />
                  <div className="instructor-info">
                    <p>{instructor.name}</p>
                    {/* <a
                      href={`https://instagram.com/${instructor.instaUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a> */}
                  </div>
                </div>
              ))}
          </div>
          <button className="carousel-buttonnext" onClick={handleNext}>
            ❯
          </button>
        </div>
        <div className="floating-whatsapp-button" onClick={handleEnrollingClick}>
      <img src="whatsapp.webp" loading="lazy"alt="WhatsApp" />
      <span>Chat With Us</span>
    </div>
      </section>
      
    </div>
  );
};

export default Homepage;
