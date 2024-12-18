import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Robotics Society NIT Hamirpur is a student-run organization dedicated to fostering innovation
            and technical excellence in robotics and automation.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/members">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <i className="ri-map-pin-line"></i>
              <span>NIT Hamirpur, Himachal Pradesh, India</span>
            </li>
            <li>
              <i className="ri-mail-line"></i>
              <span>robosoc@nith.ac.in</span>
            </li>
            <li>
              <i className="ri-phone-line"></i>
              <span>+91 1234567890</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Robotics Society NITH. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;