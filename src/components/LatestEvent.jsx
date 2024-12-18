import React, { useState, useEffect } from 'react';
import '../css/LatestEvent.css';
import eventsData from '../data/events.json';

const LatestEvent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const events = eventsData.events;

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="Events" className="events-section">
      <h1>OUR LATEST <span>EVENTS</span></h1>
      <div className="slider-container">
        <div className="slider-wrapper">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={event.image} alt={event.title} />
              <div className="slide-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
        
        <div className="slider-dots">
          {events.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestEvent;