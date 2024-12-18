import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const scrollToTop = () => {
    closePopup();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    closePopup();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navContainer">
      {/* Navigation bar */}
      <nav>
        <div className="left">
          <Link to="/" onClick={scrollToTop}>Robosoc</Link>
        </div>
        <div className="right">
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <a href="#AboutUs" onClick={(e) => { e.preventDefault(); scrollToSection('AboutUs'); }}>About Us</a>
          <a href="#Events" onClick={(e) => { e.preventDefault(); scrollToSection('Events'); }}>Events</a>
          <Link to="/contact">Contact</Link>
          <i onClick={openPopup} className="hamburger ri-menu-3-line"></i>
        </div>
      </nav>

      {/* Popup with blur effect */}
      {showPopup && (
        <div className="popupCcontainer">
          <div className="blur-background" onClick={closePopup} />
          <div className="popup">
            <div className="top">
              <h1>Robosoc</h1>
              <i
                id="close-popup"
                className="ri-close-line"
                onClick={closePopup}
              ></i> 
            </div>
            <div className="bottom">
              <Link to="/" onClick={scrollToTop}>Home</Link>
              <a href="#AboutUs" onClick={(e) => { e.preventDefault(); scrollToSection('AboutUs'); }}>About Us</a>
              <a href="#Events" onClick={(e) => { e.preventDefault(); scrollToSection('Events'); }}>Events</a>
              {/* <Link to="/contact" onClick={closePopup}>Contact Us</Link> */}
              <Link to="/projects" onClick={closePopup}>Projects</Link>
              <Link to="/members" onClick={closePopup}>Members</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
