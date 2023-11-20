import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImage';
const BranchChapters = () => {
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
    slidesToShow: 3,
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
      <div className='w-3/4 m-auto'>
        <Slider {...settings}>
          <div className='mt-20'>
            {banners.map((banner) => (
              <div className='bg-white h-[450px] text-black rounded-xl '>
                <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                  <img
                    src={banner.image}
                    alt=''
                    className='h-44 w-44 rounded-full'
                  />
                  ;
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{banner.title}</p>
                  <p>{banner.description}</p>
                  <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BranchChapters;
