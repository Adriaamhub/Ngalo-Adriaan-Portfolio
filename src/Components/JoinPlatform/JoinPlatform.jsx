import React from 'react';
import './JoinPlatform.css';

const JoinPlatform = () => {
  return (
    <section className="join-section">
      <h2 className="join-title">Join Our Platform Today</h2>
      <p className="join-description">
      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
      </p>
    
      {/* Floating Button Container */}
      <div className="floating-register">
        <button className="register-button">Register</button>
      </div>
    </section>
  );
};

export default JoinPlatform;
