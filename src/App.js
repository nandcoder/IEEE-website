<<<<<<< HEAD
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

=======
import "./App.css";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import React from "react";
>>>>>>> main
function App() {
  let element = useRoutes(Routes);
  return (
    <React.Fragment>
      <div className="App">{element} </div>
    </React.Fragment>
  );
}
export default App;
