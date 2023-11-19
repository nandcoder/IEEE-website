import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImage';
// import img from "../resources/bg.jpg"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const banners = [
    {
      id: 1,
      title: 'Advancing Technology for Humanity',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
    },
    {
      id: 2,
      title: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
    },
    {
      id: 3,
      title: 'Third slide label',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
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
