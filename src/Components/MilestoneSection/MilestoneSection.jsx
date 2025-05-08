import React from 'react';
import './MilestoneSection.css';

const MilestoneSection = () => {
  const milestones = [
    {
      title: 'Online Courses',
      number: '1548',
      icon: 'src/assets/cc/milestone_1.svg',
    },
    {
      title: 'Students',
      number: '7286',
      icon: 'src/assets/cc/milestone_2.svg',
    },
    {
      title: 'Teachers',
      number: '257',
      icon: 'src/assets/cc/milestone_3.svg',
    },
    {
      title: 'Countries',
      number: '39',
      icon: 'src/assets/cc/milestone_4.svg',
    },
  ];

  return (
    <section className="milestone-section">
      <div className="milestone-overlay">
        <div className="milestone-container">
          {milestones.map((milestone, index) => (
            <div className="milestone-card" key={index}>
              <img src={milestone.icon} alt={milestone.title} className="milestone-icon" />
              <h2 className="milestone-number">{milestone.number}</h2>
              <p className="milestone-title">{milestone.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneSection;
