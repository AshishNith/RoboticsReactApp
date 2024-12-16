import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Line from '../components/Line';
import About from '../components/About';
import LatestEvent from '../components/LatestEvent';
import ContactForm from '../components/ContactForm';
function Home() {
  return (
      <div className="">
          <Navbar />
      <Hero />
      <Line />
      <About />
      <Line />
      <LatestEvent />
      <Line />
      <ContactForm />
      
          
    </div>
  );
}

export default Home;
