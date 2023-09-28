import "./App.css";
import HeroCarousel from "./components/Carousel";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Container fluid style={{height: "100%", maxHeight: "80vh", margin: 20}}>
        <HeroCarousel /> {/* Hero Carousel */}
      </Container>
      <About />
      {/* Event Carousel */}
    </div>
  );
}

export default App;
