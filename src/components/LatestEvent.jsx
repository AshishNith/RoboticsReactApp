import React from 'react'
import '../css/LatestEvent.css'
const LatestEvent = () => {
  return (
      <>
          <div id="Events" class="events-section">
        <h1>OUR LATEST <span>EVENTS</span></h1>
        <div class="slider-container">
            <div class="slider-wrapper">
                <div class="slide">
                    <img src="https://ashishnith.github.io/RobosocNith/Assets/Event5.png" alt="Event 1" />
                    <div class="slide-content">
                        <h3>Event Title 1</h3>
                        <p>Brief description of the event goes here</p>
                    </div>
                </div>
                <div class="slide">
                    <img src="https://ashishnith.github.io/RobosocNith/Assets/Event5.png" alt="Event 2" />
                    <div class="slide-content">
                        <h3>Event Title 2</h3>
                        <p>Brief description of the event goes here</p>
                    </div>
                </div>
                <div class="slide">
                    <img src="https://ashishnith.github.io/RobosocNith/Assets/Event5.png" alt="Event 3" />
                    <div class="slide-content">
                        <h3>Event Title 3</h3>
                        <p>Brief description of the event goes here</p>
                    </div>
                </div>
                <div class="slide">
                    <img src="https://ashishnith.github.io/RobosocNith/Assets/Event5.png" alt="Event 4" />
                    <div class="slide-content">
                        <h3>Event Title 4</h3>
                        <p>Brief description of the event goes here</p>
                    </div>
                </div>
                <div class="slide">
                    <img src="https://ashishnith.github.io/RobosocNith/Assets/Event5.png" alt="Event 5" />
                    <div class="slide-content">
                        <h3>Event Title 5</h3>
                        <p>Brief description of the event goes here</p>
                    </div>
                </div>
            </div>
            
            <button class="slider-btn prev-btn"><i class="ri-arrow-left-s-line"></i></button>
            <button class="slider-btn next-btn"><i class="ri-arrow-right-s-line"></i></button>
            
            <div class="slider-dots"></div>
        </div>
        <div class="contact">
            
        </div>
    </div>
      </>
  )
}

export default LatestEvent