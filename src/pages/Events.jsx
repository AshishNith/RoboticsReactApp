import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import eventsData from '../data/events.json';
import '../css/Events.css';

function Events() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      (prev + 1) % selectedEvent.images.length
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
    );
  };

  return (
    <div className="events-page">
      <Navbar />
      <div className="events-header">
        <h1>Our <span>Events</span></h1>
        {/* <p>Explore all our exciting events and activities</p> */}
      </div>
      
      <div className="events-grid">
        {eventsData.events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="read-more" onClick={() => handleReadMore(event)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && selectedEvent && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>&times;</button>
            
            <div className="popup-slider">
              <img 
                src={selectedEvent.images[currentImageIndex]} 
                alt={`${selectedEvent.title} - ${currentImageIndex + 1}`} 
              />
              
              <button className="slider-btn prev-btn" onClick={prevImage}>
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button className="slider-btn next-btn" onClick={nextImage}>
                <i className="ri-arrow-right-s-line"></i>
              </button>

              <div className="slider-dots">
                {selectedEvent.images.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="popup-details">
              <h2>{selectedEvent.title}</h2>
              <p className="date">{selectedEvent.date}</p>
              <p className="location">{selectedEvent.location}</p>
              <p className="description">{selectedEvent.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
    