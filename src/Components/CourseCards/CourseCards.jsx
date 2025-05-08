import React from 'react';
import './CourseCards.css';

const CourseCards = () => {
  return (
    <div className="card-container">
      {/* Card 1: Course Info */}
      <div className="card course-card">
        <div className="card-top">
          <span className="badge">Featured</span>
          <span className="price">$35</span>
        </div>
       
        <div className="card-body">
          <h1>Online Literature Course</h1>
          <p>
          Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Donec vehicula efficitur nibh, in pretium nulla interdum non.
          </p>
        </div>
        <div className="card-footer">
          <div className="author-section">
            <img src="src/assets/Author/images (1).jpg" alt="Author" className="author-img" />
            <span className="author-name">By James S. Morrison</span>
          </div>
          <div className="sales">352 Sales</div>
        </div>
        <div className="bottom-line"></div>
      </div>

      {/* Card 2: Background Promo */}
      <div
        className="card promo-card"
        style={{ backgroundImage: "url('src/assets/Author/pic.webp')" }}
      >
        
      </div>
    </div>
  );
};

export default CourseCards;

