import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import UncontrolledExample from "./UncontrolledCaraousel";
// import img from "../resources/bg.jpg"
const ExampleCarouselImage = ({ text, backgroundColor, element }) => {
  const divStyle = {
    width: "80vw",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    flexDirection: "column",
    backgroundColor: backgroundColor || "#1064991A", // You can set a default color or pass it as a prop
  };

  return (
    <div style={divStyle}>
      <div>{text}</div>
      <div>{element}</div>{" "}
    </div>
  );
};

function AboutMobile() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const banners = [
    {
      id: 1,
      title: "Advancing Technology for Humanity",
      text: "Known as the Institute of Electrical and Electronics Engineers, IEEE represents the pinnacle of technical professionalism and innovation globally. With a membership that encompasses engineers, scientists, and allied professionals from diverse domains, including computer science, software development, information technology, physics, and medicine, the Systems Council epitomizes the pursuit of technological excellence. It is regarded as an institution that empowers every student to confront intricate challenges and drive innovation.",
      element: "",
    },
    {
      id: 2,
      title: "Second slide label",
      text: "We have a range of societies based on various interests ",
      element: <UncontrolledExample />,
    },
    {
      id: 3,
      title: "Third slide label",
      text: "Meet our diverse team which are running the pinnacle of innovation at NIT JSR",
      element: <UncontrolledExample />,
    },
  ];
  const headings = [
    {
      id: 1,
      title: "About Us",
    },
    {
      id: 2,
      title: "Branch Chapters",
    },
    {
      id: 3,
      title: "Our Team",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1em",
      }}
    >
      <div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide={false}
          indicators={false}
          controls={false}
          interval={5000}
        >
          {headings.map((heading) => (
            <Carousel.Item key={heading.id}>
              <div>
                <h1>{heading.title}</h1>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide={false}
          indicators={false}
          interval={5000}
        >
          {banners.map((banner) => (
            <Carousel.Item key={banner.id}>
              <ExampleCarouselImage
                text={banner.text}
                image={banner.image}
                element={banner.element}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AboutMobile;
