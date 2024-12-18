import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Line from '../components/Line';
import About from '../components/About';
import LatestEvent from '../components/LatestEvent';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Hero />
        <Line />
        <About />
        <Line />
        <LatestEvent />
      </main>
    </div>
  );
}

export default Home;
