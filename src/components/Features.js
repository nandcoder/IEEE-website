import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import './css/Features.css';
import { Link } from 'react-router-dom';

const Features = () => {
  const [feature, setFeature] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://eager-twill-ray.cyclic.app/api/events?isFeatured=true'
        );
        if (response.data.events.length > 0) {
          // Set feature to the first event in the response
          setFeature(response.data.events[0]);
          console.log('Successfully fetched ', response.data.events[0]);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '100%',
          marginLeft: '5%',
          marginRight: '20%',
          marginBottom: '10%',
        }}
      >
        <div className='p-3 section'>
          <button className='text-sky-700 text-lg font-bold py-1 px-4 border-solid border-2 border-blue-700 rounded-3xl mb-4'>
            FEATURED
          </button>
          <Link
            to={`/events/event?id=${feature._id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className='flex bg-slate-100 border-2 items-center'>
              <div className='w-1/2 flex flex-col p-3'>
                <div className='font-bold text-lg p-2'>{feature?.title}</div>
                <div className='text-lg text-justify p-2'>
                  {feature?.summary}
                </div>
              </div>
              <div className='w-1/2 p-3'>
                {loading || !feature.images || !feature.images[0] ? (
                  <Spinner animation='border' variant='primary' />
                ) : (
                  <img
                    src={feature.images[0]}
                    alt='bulb1'
                    className='h-auto max-w-full'
                  />
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div style={{ marginRight: '5%' }}>
        <div className='p-2 section'>
          <button className='text-sky-700 text-lg font-bold py-1 px-10 border-solid border-2 border-blue-700 rounded-3xl md:mb-4 sm:mb-2'>
            VOLUNTEER WITH US
          </button>
          <div className='font-semibold text-justify text-lg  p-2'>
            Just shoot an email to{'  '}
            <a href='mailto:ieee.nitjsr@gmail.com' className='text-sky-800'>
              ieee.nitjsr@gmail.com
            </a>
            {'  '}or message us in{'  '}
            <a href='https://linkedin.com/' className='text-sky-800'>
              Linkedin{'  '}
            </a>
            and we will get back to you ASAP
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 500px) {
          .memText {
            font-size: 14px; // Font size for screens less than 737px wide
            margin: 0px;
          }
          .memHead {
            font-size: 24px; // Font size for screens less than 737px wide
            margin: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
