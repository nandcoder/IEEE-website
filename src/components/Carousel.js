import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImage";
import { Container } from "react-bootstrap";
import img1 from "../assets/ieee1.jpg";
// import img2 from "../assets/ieee2.jpg"
import img3 from "../assets/ieee3.jpg";
import img4 from "../assets/ieee4.jpg";
import img5 from "../assets/ieee5.jpg";
// import img from "../resources/bg.jpg"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const banners = [
    {
      id: 1,
      title: "IEEE Student Branch NIT Jamshedpur inauguration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img1,
    },
    {
      id: 2,
      title: "Prof. Sivaji Chakravorti addresses NIT Jamshedpur students",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      image: img3,
    },
    {
      id: 3,
      title: "IEEE Student branch MTech members",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: img4,
    },
    {
      id: 4,
      title: "Advancing Technology for Humanity",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: img5,
    },
  ];

  return (
    <Container style={{ maxWidth: "80%" }} id="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <ExampleCarouselImage text={banner.title} image={banner.image} />
            <Carousel.Caption
              className="text-lg sm:text-sm"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
                width: "inherit",
                left: 0,
                bottom: 0,
              }}
            >
              {/* <Carousel.Caption
              style={{
                // fontSize: "2.25rem",
                background:
                  "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
                width: "inherit",
                left: 0,
                bottom: 0,
              }}
            > */}
              <h3 style={{ paddingBottom: "1%" }}>{banner.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
