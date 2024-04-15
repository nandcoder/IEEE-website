import React from "react";
import Slider from "react-slick";
import img1 from "../assets/ieee1.jpg";
import img2 from "../assets/ieee2.jpg";
import img3 from "../assets/ieee3.jpg";
import img4 from "../assets/ieee4.jpg";
import img5 from "../assets/ieee5.jpg";
import img6 from "../assets/ieee6.jpeg";
import img7 from "../assets/ieee7.jpeg";
import estimg from "../assets/establishment.jpg";
import "./Carousel.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function AdaptiveHeight() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <FaArrowAltCircleLeft />,
    nextArrow: <FaArrowAltCircleRight />,
    beforeChange: (current, next) => {
      console.log(next);
    },
  };

  const banners = [
    {
      id: 1,
      title: "IEEE student branch was established on Sept 5,2023",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: estimg,
    },
    {
      id: 2,
      title:
        "NIT jamshedpur director Prof. Goutam Sutradhar welcomes Prof. Sivaji Chakravorti",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: img6,
    },

    {
      id: 3,
      title: "IEEE Student Branch NIT Jamshedpur inauguration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img1,
    },
    {
      id: 4,
      title: "Prof. Sivaji Chakravorti addresses NIT Jamshedpur students",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      image: img3,
    },
    {
      id: 5,
      title: "IEEE Student branch MTech members",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: img4,
    },
    {
      id: 6,
      title: "Advancing Technology for Humanity",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: img5,
    },
    {
      id: 7,
      title: "",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      image: img7,
    },
  ];

  return (
    <div className="slider-container" style={{ margin: "1em 3em" }}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.image} alt="" className="image" />
            <div className="flex items-center justify-center text-center my-4">
              {banner.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;
