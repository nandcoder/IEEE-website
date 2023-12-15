import React, { useState, useEffect } from 'react';
import PreviewCard from './PreviewCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Event = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://ieee-1vzv.onrender.com/api/events'
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

  return (
    <div id='event' className='p-4' style={{ margin: '0 8.3%' }}>
      <div className='text-4xl font-semibold p-4 flex justify-center items-center h-full'>
        Recent events
      </div>
      <div className=' flex flex-row overflow-y-auto'>
        {loading ? (
          <Spinner animation='border' variant='primary' />
        ) : (
          event?.map((event, index) => (
            <PreviewCard key={index} event={event} />
          ))
        )}
      </div>
      <Link to='/events' style={{ textDecoration: 'none' }}>
        <div className='flex justify-center items-center'>
          <button
            className='cursor-pointer bg-sky-700 text-slate-100 w-40 h-8 rounded-md mt-1 flex justify-center items-center'
            style={{
              borderRadius: '17px',
              margin: '1em 3em 1em 1em',
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
