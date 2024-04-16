import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
// import arrow from "../assets/icons8-arrow-24.png";

function Events() {
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

  const handleSeeMore = () => {
    console.log('See more');
  };

  return (
    <>
      <div
        style={{
          width: '70vw',
          minHeight: '100vh',
          backgroundColor: '#166499',
          margin: 'auto',
          marginTop: '2em',
          marginBottom: '5em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            color: '#F6F5F5',
            fontSize: '28px',
            font: 'Inter',
            fontWeight: '600',
            position: 'relative',
            margin: '1%',
            height: 'auto',
            top: '2%',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          EVENTS
        </div>
        {loading ? (
          <Spinner animation='border' variant='primary' />
        ) : (
          event
            ?.slice(0, 3)
            .map((event, index) => <EventCard key={index} event={event} />)
        )}
        <div>
          <Link to='/all-events' style={{ textDecoration: 'none' }}>
            <button
              class='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-4 flex items-center'
              style={{ borderRadius: '50px' }}
              onClick={handleSeeMore}
            >
              See more
              <i class='fa fa-arrow-right ml-2'></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Events;
