import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PreviewCard from './PreviewCard';
import axios from 'axios';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/css/Event.css';

function SampleNextArrow({ onClick }) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const Event = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://eager-twill-ray.cyclic.app/api/events'
        );
        setEvent(response.data.events);
        console.log('Successfully fetched ', response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div id='event' className='p-4' style={{ margin: '0 4.3%' }}>
      <div className='text-4xl font-semibold p-4 flex justify-center items-center h-full memHead'>
        Recent events
      </div>
      <div className=' m-auto mt-5'>
        {loading ? (
          <Spinner animation='border' variant='primary' />
        ) : (
          <Slider {...settings}>
            {event?.map((eventItem, index) => (
              <div
                key={index}
                className='focus:outline-none rounded-t-xl flex justify-between justify-center items-center px-4'
              >
                <PreviewCard key={index} event={eventItem} />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <Link to='/events' style={{ textDecoration: 'none' }}>
        <div className='flex justify-center items-center'>
          <button
            className='cursor-pointer bg-sky-700 text-slate-100 w-40 h-8 rounded-md mt-5 flex justify-center items-center'
            style={{
              borderRadius: '17px',
              margin: '1em ',
            }}
          >
            <div className='flex font-light'>Events Archive</div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Event;
