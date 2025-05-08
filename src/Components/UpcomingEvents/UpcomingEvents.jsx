import React from 'react';
import './UpcomingEvents.css';

const events = [
  { date: '20 April', title: 'New Marketing Online Course', location: 'Online Platform' },
  { date: '23 April', title: 'Students Art Workshop', location: 'Online Platform' },
  { date: '25 April', title: 'Launch Party for a New Platform', location: 'Online Platform' },
  { date: '27 April', title: 'New Marketing Course', location: 'Online Platform' },
  { date: '29 April', title: 'New Marketing Course', location: 'Online Platform' },
];

const UpcomingEvents = () => {
  return (
    <section className="events-section">
      <h2 className="events-heading">Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-date">{event.date}</div>
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-location">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
