import React, { useState } from "react";
import "./styles.css";

export default function App() {const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

// Array of gallery photos
const galleryPhotos = [
  { src: "/MTB1.jpg", caption: "Trail Adventure" },
  { src: "/MTB2.jpg", caption: "Adaptive Ride" },
  { src: "/MTB3.jpg", caption: "Mountain Summit" },
  { src: "/MTB4.jpg", caption: "Downhill Flow" },
  { src: "/MTB5.jpg", caption: "Morning Climb" },
  { src: "/MTB6.jpg", caption: "No Limits" },
  { src: "/MTB7.jpg", caption: "Trail Mastery" },
  { src: "/MTB8.jpg", caption: "Flow State" },
  { src: "/MTB9.jpg", caption: "Peak Performance" },
  { src: "/MTB10.jpg", caption: "Adventure Time" },
  { src: "/MTB11.jpg", caption: "Freedom Ride" },
  { src: "/MTB12.jpg", caption: "Enduro Spirit" },
  { src: "/MTB13.jpg", caption: "Limitless" },
  { src: "/MTB14.jpg", caption: "Resilience in Action" }
];

const openLightbox = (index) => {
  setCurrentIndex(index);
  setSelectedImage(galleryPhotos[index]);
};

const closeLightbox = () => {
  setSelectedImage(null);
};

const prevImage = () => {
  const newIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
  setCurrentIndex(newIndex);
  setSelectedImage(galleryPhotos[newIndex]);
};

const nextImage = () => {
  const newIndex = (currentIndex + 1) % galleryPhotos.length;
  setCurrentIndex(newIndex);
  setSelectedImage(galleryPhotos[newIndex]);
};

// Keyboard navigation
React.useEffect(() => {
  const handleKey = (e) => {
    if (!selectedImage) return;
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeLightbox();
  };
  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [selectedImage, currentIndex]);
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#media">Partnership</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-overlay">
          <div className="hero-content">
          <h1>Resilience is Built. Not Given.</h1>
            <p className="brand-line">
              Resilience Rider - From Survival to Strength
            </p>
            <div className="hero-buttons">
              <button>Read My Story</button>
              <button className="secondary">Partner With Me</button>
            </div>
          </div>
        </div>
      </section>
      <section className="stats">
  <div className="stat">
    <h3>10+</h3>
    <p>Years Since Injury</p>
  </div>
  <div className="stat">
    <h3>1000+</h3>
    <p>Miles Ridden</p>
  </div>
  <div className="stat">
    <h3>1</h3>
    <p>Prosthetic Arm. No Limits.</p>
  </div>
</section>
      {/* Story */}
      <section className="story" id="story">
  <h2>My Story</h2>
  <p>
    Ten years ago, while traveling in Thailand, I suffered a life-changing brain injury.  
    Returning to the UK, I faced a difficult period of adaptation and recovery — during which I lost my right arm.
  </p>
  <p>
    Losing my arm could have stopped me, but instead it became my motivation.  
    With a prosthetic arm, I found freedom and strength on the mountain trails — transforming adversity into achievement.
  </p>
  <p>
    Resilience Rider is more than a story; it’s a movement.  
    It’s about embracing challenges, celebrating progress, and inspiring others to push past limits — in sport and in life.
  </p>
  <p>
    Today, I ride to inspire, connect, and create opportunities.  
    Through mountain biking, storytelling, and collaboration, I aim to partner with brands and communities that share the same passion for resilience, innovation, and adventure.
  </p>
</section>
      <section className="impact-quote">
  <h2>"Rock bottom became my foundation."</h2>
</section>
      {/* Mission */}
      <section className="mission" id="mission">
        <h2>My Mission</h2>
        <p>
          Resilience Rider exists to inspire, empower, and support others facing life-changing challenges.
          My goal is to show that resilience isn’t just surviving — it’s thriving, adapting, and finding freedom in movement.
        </p>
        <div className="cards">
          <div className="card">
            <h3>Inspire</h3>
            <p>Share my journey to motivate others to push past personal limits and embrace life fully.</p>
          </div>
          <div className="card">
            <h3>Adapt</h3>
            <p>Show how challenges can be overcome, with creative solutions and determination.</p>
          </div>
          <div className="card">
            <h3>Support</h3>
            <p>Connect with communities and provide encouragement for mental health and physical recovery.</p>
          </div>
        </div>
      </section>

      {/* Media & Brand */}
      <section className="media" id="media">
        <h2>Media & Brand Partnership</h2>
        <p>
          Resilience Rider is more than a story — it’s a movement and platform for brands, communities, and individuals who believe in resilience, mental health awareness, and adaptive sports.
        </p>
        <p>
          Through Instagram, YouTube, and events, I share my journey and inspire action. Brands partnering with Resilience Rider can engage a highly motivated, authentic audience while supporting an empowering mission.
        </p>
        <div className="brand-contact">
          <p><strong>Interested in collaborating or sponsorship?</strong></p>
          <p>Email me at: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        </div>
      </section>

      
{/* Gallery */}
​<section classname="gallery" id="gallery">
<div className="grid">
  {galleryPhotos.map((photo, index) => (
    <div
      key={index}
      className="photo fade-in"
      style={{ backgroundImage: `url(${photo.src})` }}
      onClick={() => openLightbox(index)}
    >
      <div 
      className="caption">{photo.caption}</div>
    </div>
  ))}
</div>
</section>
<section className="brand-cta">
  <h2>Partner With Resilience Rider</h2>
  <p>
    Authentic storytelling. Adaptive performance. A mission that aligns with brands
    who believe in resilience, innovation, and human potential.
  </p>
  <button className="primary-cta">Download Media Kit</button>
</section>
      <footer>
        © Resilience Rider
        
        {selectedImage && (
  <div className="lightbox" onClick={closeLightbox}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedImage.src} alt="" />
      <p>{selectedImage.caption}</p>

      <span className="arrow left" onClick={prevImage}>&#10094;</span>
      <span className="arrow right" onClick={nextImage}>&#10095;</span>
      <span className="close-btn" onClick={closeLightbox}>×</span>
    </div>
  </div>
)}
      </footer>
    </div>
  );
}


