import React from 'react'
import '../css/About.css'

const About = () => {
  return (
      <>
            <div id="AboutUs" class="AboutUs">
        <h1>KNOW <span>ABOUT US</span></h1>
        
        <div class="about-content">
            <div class="robot-image">
                <img src="https://ashishnith.github.io/RobosocNith/Assets/Robot.png" alt="Robot" />
            </div>
            
            <div class="about-info">
                <div class="info-card">
                    <h2>Our Mission</h2>
                    <p>Build and sustain a culture to be self-reliant to accomplish our vision, by emphasizing the development of individual quality</p>
                </div>
                
                <div class="info-card">
                    <h2>Our Vision</h2>
                    <p>Build and sustain a culture to be self-reliant to accomplish our vision, by emphasizing the development of individual quality</p>
                </div>
                
                <div class="info-card">
                    <h2>What we do?</h2>
                    <p>Build and sustain a culture to be self-reliant to accomplish our vision, by emphasizing the development of individual quality</p>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}

export default About