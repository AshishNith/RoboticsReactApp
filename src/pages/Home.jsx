import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Line from '../components/Line';
import About from '../components/About';
import LatestEvent from '../components/LatestEvent';
import FloatingShape from '../components/FloatingShape';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-container">
      <FloatingShape />
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Hero />
        <Line />
        <About />
        <Line />
        <LatestEvent />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
