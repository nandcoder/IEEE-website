import React from "react";
import Aboutieee from "../components/Aboutieee";
import Event from "../components/Event";
import Features from "../components/Features";
import HeroCarousel from "../components/Carousel";
import About from "../components/About";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import AboutMobile from "../components/AboutMobile";
function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component unmounts
    console.log(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <>
      <Container>
        <HeroCarousel />
      </Container>
      {/* {isMobile ? <AboutMobile /> : <About />} */}
      <AboutMobile />
      <Aboutieee />
      <Event />
      <Features />
    </>
  );
}

export default Home;
