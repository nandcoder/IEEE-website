import Slider from 'react-slick';
import { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BranchChapters.css';
const BranchChapters = () => {
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
    {
      id: 4,
      title: 'Third slide label',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
    },
    {
      id: 5,
      title: 'Third slide label',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
    },
    {
      id: 6,
      title: 'Third slide label',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
    },
    {
      id: 7,
      title: 'Third slide label',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image:
        'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   const slider1Settings = { ...settings, autoplaySpeed: 1000 };

  //   const slider1Ref = useRef(null);
  //   const delay = (slider, amount) => {
  //     setTimeout(() => {
  //       slider.current.slickPlay();
  //     }, amount);
  //   };

  return (
    <div>
      <div className='text-4xl font-semibold p-4 flex justify-center items-center h-full'>
        Branch Chapters
      </div>
      <div class='text-2xl leading-8 flex justify-center items-center'>
        We have a range of sub societies based on the latest advancements in
        tech:
      </div>

      {/* <Carousel activeIndex={index} onSelect={handleSelect}>
        {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <ExampleCarouselImage text={banner.title} image={banner.image} />
            <Carousel.Caption>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel> */}
      {/* <div className='bg-black'> */}
      <div className='w-3/4 m-auto mt-5'>
        <Slider {...settings}>
          {/* <div className='mt-20'> */}
          {banners.map((banner) => (
            <div className='focus:outline-none rounded-t-xl flex justify-between justify-center items-center'>
              <img
                src={banner.image}
                alt=''
                className='h-44 w-44 rounded-full'
              />
            </div>
          ))}
          {/* </div> */}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BranchChapters;
