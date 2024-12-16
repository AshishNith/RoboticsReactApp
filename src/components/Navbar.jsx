import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <>
    <nav>
          <div class="logo">
              <h1>Robosoc</h1>
          </div>
        <div class="nav-links">
          <a className="underline" href="/">Home</a>
            <a className="underline" href="/">About Us</a>
            <a className="underline" href="/events">Events</a>
            <a className="underline" href="/projects">Projects</a>
            <a className="underline" href="/members">Members</a>
            <a href=""><i class="ri-menu-3-line"></i></a> 
        </div>
    </nav>
    <div className="backcover"></div>
    </>
  );
}

export default Navbar;
