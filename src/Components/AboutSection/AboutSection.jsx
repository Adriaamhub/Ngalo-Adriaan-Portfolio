import React, { useState } from 'react';
import './AboutSection.css';

const courses = [
  {
    id: 1,
    image: 'src/assets/cc/course_2.jpg',
    title: 'Social Media Course',
    description: 'Maecenas rutrum viverra sapien sed fermentum.',
    authorImage: 'src/assets/Author/images (1).jpg',
    authorName: 'By John Smith',
    sales: '352',
    price: '$35',
  },
  {
    id: 2,
    image: 'src/assets/cc/course_3.jpg',
    title: 'Market Course',
    description: 'Maecenas rutrum viverra sapien sed fermentum.',
    authorImage: 'src/assets/Author/portrait-business-woman-wearing-glasses-beautiful-white-shirt-39628203.webp',
    authorName: 'By Julia Williams',
    sales: '352',
    price: '$35',
  },
  {
    id: 3,
    image: 'src/assets/cc/course_1.jpg',
    title: 'Online Literature Course',
    description: 'Maecenas rutrum viverra sapien sed fermentum.',
    authorImage: 'src/assets/Author/pic.webp',
    authorName: 'By James S. Morris',
    sales: '352',
    price: '$35',
  },
];


const AboutSection = () => {

  return (
    <section className="about-section">
      {/* Heading */}
      <h1 className="about-heading">Choose your course</h1>

      {/* Paragraph */}
      <p className="about-paragraph">
      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
      </p>

      <div className="course-form">
          <textarea placeholder="Course" className="textarea course" />
          <textarea placeholder="Level" className="textarea level" />
          <button className="search-button">
            Search Course
            <span className="arrow-icon">{'>'}</span>
          </button>
        </div>
     
        <div className="card-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />

              <div className="card-top">
                <button className="new-btn">New</button>
                <span className="price">{course.price}</span>
              </div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="author-info">
                <img src={course.authorImage} alt={course.authorName} className="author-image" />
                <div className="author-details">
                  <span className="author-name">{course.authorName}</span>
                  <span className="sales">{course.sales} Sales</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      

    </section>
  );
};

export default AboutSection;
