import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>HAVE ANY QUESTIONS?</span>
        <span> (009) 35475 6688933 32</span>
        <span> info@elearning.com</span>
      </div>
      <div className="topbar-right">
        <a href="/register">REGISTER</a>
        <span>/</span>
        <a href="/login">LOGIN</a>
      </div>
    </div>
  );
};

export default TopBar;
