// src/components/Navbar.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="src/assets/Logos/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-title">LEARN</span>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Navbar links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About Us</a></li>
          <li className="nav-item"><a href="#">Courses</a></li>
          <li className="nav-item"><a href="#">News</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
        <div className="search-icon">
        <FaSearch />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
