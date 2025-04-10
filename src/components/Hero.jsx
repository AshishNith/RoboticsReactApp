import React from 'react';
import '../css/Hero.css';
import { RiChatSmile2Line } from 'react-icons/ri';
import ChatWindow  from "../components/ChatWindow.jsx";
import { useState } from 'react';


const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
      <div id="Home" className="hero-section">

      <div className="hero-content">
        
        <h1 className="title">
          R
          <div className="logo-o">
          {/* <RiChatSmile2Line className="text-white text-2xl" /> */}
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
        <div className="right-text chat-bg fixed cursor-pointer" onClick={toggleChat}>
          <RiChatSmile2Line className="text-white text-2xl" />
        </div>
      </div>
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </div>
  );
};

export default Hero;
