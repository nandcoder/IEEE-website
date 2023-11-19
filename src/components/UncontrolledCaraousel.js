import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/hw.jpeg";
import Image2 from "../assets/hw2.jpeg";
import Image3 from "../assets/hw3.jpeg";

const banners = [Image1, Image2, Image3];

const ExampleCarouselImage = ({ image, isActive, isRight, isLeft }) => {
  return (
    <div
      style={{
        margin: "1em",
        padding: "1em",
        position: "relative",
        width: "200px",
        height: "200px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundImage:
            isActive === false
              ? isRight
                ? `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))`
                : `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))`
              : "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <img
          src={image}
          alt=""
          style={{ borderRadius: "50%", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

function UncontrolledExample() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      wrap={true}
      interval={1000}
      indicators={false}
      indicatorLabels={false}
      slide={false}
    >
      {banners.map((image, idx) => (
        <Carousel.Item
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ExampleCarouselImage
            image={banners[idx + 1 > 2 ? idx - 1 : idx + 1]}
            isActive={false}
            isLeft={true}
            isRight={false}
          />
          <ExampleCarouselImage
            image={image}
            isActive={true}
            isLeft={false}
            isRight={false}
          />
          <ExampleCarouselImage
            image={banners[idx + 2 > 2 ? idx - 1 : idx + 2]}
            isActive={false}
            isLeft={false}
            isRight={true}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
