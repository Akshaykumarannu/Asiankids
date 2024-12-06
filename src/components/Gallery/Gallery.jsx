import React, { useState, useRef, useEffect } from "react";
import "./Gallery.css";
import visual1 from "/IMG-20240717-WA0022.webp";
import visual2 from "/IMG-20240717-WA0030.webp";
import visual3 from "/IMG-20240717-WA0029.webp";
import visual4 from "/IMG-20240717-WA0018.webp";
import visual5 from "/IMG-20240717-WA0020.webp";
import visual6 from "/IMG-20240717-WA0004.webp";
import visual7 from "/bluedress (13).webp";
import visual8 from "/IMG-20240716-WA0014.webp";
import visual9 from "/photo (7).webp";
import visual10 from "/photo (6).webp";
import visual11 from "/IMG-20240717-WA0036.webp";
import visual12 from "/bluedress (15).webp";
import visual13 from "/bluedress (14).webp";
import visual14 from "/bluedress (16).webp";
import visual15 from "/frontimage.webp";
import visual16 from "/frontimage123.webp";

const video1 =
  "https://res.cloudinary.com/diqcdbpg4/video/upload/v1733512945/VID-20240129-WA0011_-_Trim_th2u7t.mp4";
const video2 =
  "https://res.cloudinary.com/diqcdbpg4/video/upload/v1733513537/VID-20240128-WA0000_yld6cg.mp4";
const video3 =
  "https://res.cloudinary.com/diqcdbpg4/video/upload/v1733513079/VID-20240128-WA0002_lcv9zl.mp4";
const backgroundVideo =
  "https://res.cloudinary.com/diqcdbpg4/video/upload/v1733512712/WhatsApp_Video_2024-08-08_at_2.07.32_AM_uu7zjo.mp4";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const images = [
    visual1,
    visual2,
    visual3,
    visual4,
    visual5,
    visual6,
    visual7,
    visual8,
    visual9,
    visual10,
    visual11,
    visual12,
    visual13,
    visual14,
    visual15,
    visual16,
  ];

  const videos = [video1, video2, video3];

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 3));

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev + 3 >= images.length ? 0 : prev + 3
    );

  const prevVideo = () =>
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  const nextVideo = () =>
    setCurrentVideoIndex((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    if (videoRef.current) videoRef.current.load();
  }, [currentVideoIndex]);

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div className="gallery-banner">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-text">
          <h1>Gallery</h1>
          <p>
            Explore photos and videos of our dance studios and see the vibrant
            energy we offer.
          </p>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="gallery-section">
        <h2>Photos</h2>
        <div className="gallery-wrapper">
          <button className="gallery-arrow left-arrow" onClick={prevImage}>
            &lt;
          </button>
          <div className="gallery-row">
            {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            ))}
          </div>
          <button className="gallery-arrow right-arrow" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="gallery-section">
        <h2>Videos</h2>
        <div className="gallery-wrapper">
          <button className="gallery-arrow left-arrow" onClick={prevVideo}>
            &lt;
          </button>
          <div className="gallery-row">
            <video
              controls
              className="gallery-video"
              loading="lazy"
              ref={videoRef}
              key={currentVideoIndex}
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="gallery-arrow right-arrow" onClick={nextVideo}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
