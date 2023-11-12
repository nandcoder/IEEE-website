import React from 'react';
import './App.css';
import HeroCarousel from './components/Carousel';
import About from './components/About';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Aboutieee from './components/Aboutieee';
import Event from './components/Event';
import Features from './components/Features';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <HeroCarousel />
      </Container>
      <About />
      <Aboutieee />
      <Event />
      <Features />
      <Footer />
    </React.Fragment>
  );
}

export default App;
