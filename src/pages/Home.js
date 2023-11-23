import React from 'react';
import Aboutieee from '../components/Aboutieee';
import Event from '../components/Event';
import Features from '../components/Features';
import HeroCarousel from '../components/Carousel';
import About from '../components/About';
import { Container } from 'react-bootstrap';
import BranchChapters from '../components/BranchChapters';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Container>
        <HeroCarousel />
      </Container>
      <About />
      <Aboutieee />
      <BranchChapters />
      <Event />
      <Features />
    </>
  );
}

export default Home;
