import React from "react";
import Aboutieee from "../components/Aboutieee";
import Event from "../components/Event";
import Features from "../components/Features";
import HeroCarousel from "../components/Carousel";
import About from "../components/About";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <>
      <Container>
        <HeroCarousel />
      </Container>
      <About />
      <Aboutieee />
      <Event />
      <Features />
    </>
  );
}

export default Home;