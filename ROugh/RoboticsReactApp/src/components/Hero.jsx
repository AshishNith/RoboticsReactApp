import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
      <div id="Home" className="hero-section">

      <div className="hero-content">
        
        <h1 className="title">
          R
          <div className="logo-o">
            <img src="https://ashishnith.github.io/RobosocNith/Assets/chatBot.png" alt="Robot Logo" />
          </div>
          botics<br />
          Society<br />
          NITH
        </h1>
        <hr />
        <p className="tagline">
          To be a luminary of the Indian<br />
          Society in the field of Robotics
        </p>
      </div>

      <div className="bottom-text">
        <div className="left-text">
          "Where<br />
          Humans<br />
          and<br />
          Robots<br />
          Click"
        </div>
        <div className="right-text">
          <pre>ChAT  </pre><img src="https://ashishnith.github.io/RobosocNith/Assets/chatBot.png" alt="Chat Bot" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
