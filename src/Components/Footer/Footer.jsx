import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and Description */}
        <div className="footer-column logo-column">
          <img src="src/assets/Logos/logo.png" alt="Logo" className="footer-logo" />
          <h3 className="footer-logo-title">E-Learn</h3>
          <p>Your trusted partner in online education. Learn anywhere, anytime.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="footer-column">
          <h4>Quick Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Facts</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Links</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 1481 Creekside Lane Avila Beach, CA 93424</li>
            <li><i className="fas fa-phone-alt"></i> +53 345 7953 32453</li>
            <li><i className="fas fa-envelope"></i> yourmail@gmail.com</li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Learn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
