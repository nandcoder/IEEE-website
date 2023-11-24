import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImage";
// import img from "../resources/bg.jpg"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const banners = [
    {
      id: 1,
      title:
        "Prof Sivaji Chakravorty addresses NIT Jamshedpur students about IEEE membership",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      image: "1.webp",
    },
    {
      id: 2,
      title: " IEEE student branch NIT Jamshedpur core team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "2.webp",
    },
    {
      id: 3,
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: "3.webp",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <ExampleCarouselImage text={banner.title} image={banner.image} />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
