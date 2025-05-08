import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-slider">
        <div className="hero-slides">
          {/* Slide 1 */}
          <div className="hero-slide" style={{ backgroundImage: "url('src/assets/bg/bg2.1.jpg')" }}>
            <div className="hero-content">
              <img src="src/assets/Logos/home_logo.png" alt="Logo" className="hero-logo" />
              <h1>Complete Online Courses</h1>
              <p>High-quality courses anytime, anywhere. Join a global community of learners.</p>
              <div className="hero-buttons">
                <button className="hero-btn">LEARN MORE</button>
                <button className="hero-btn">SEE ALL COURSES </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="hero-slide" style={{ backgroundImage: "url('src/assets/bg/bg2.1.jpg')" }}>
            <div className="hero-content">
              <img src="src/assets/Logos/home_logo.png" alt="Logo" className="hero-logo" />
              <h1>Complete Online Courses</h1>
              <p>Upskill with expert-led online courses designed for career success.</p>
              <div className="hero-buttons">
                <button className="hero-btn">LEARN MORE</button>
                <button className="hero-btn">SEE ALL COURSES </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
