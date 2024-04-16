import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import { Spinner } from 'react-bootstrap';
// import arrow from "../assets/icons8-arrow-24.png";

function AllEvents() {
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

  // const handleSeeMore = () => {
  //   alert('Button see more clicked with data:');
  // };

  return (
    <>
      <div
        style={{
          width: '85vw',
          minHeight: '100vh',
          backgroundColor: '#166499',
          margin: 'auto',
          marginTop: '5em',
          marginBottom: '5em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            color: '#F6F5F5',
            fontSize: '3em',
            font: 'Inter',
            fontWeight: '600',
            position: 'relative',
            margin: '2%',
            height: 'auto',
            top: '2%',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          ALL EVENTS
        </div>
        {loading ? (
          <Spinner animation='border' variant='primary' />
        ) : (
          event?.map((event, index) => <EventCard key={index} event={event} />)
        )}
      </div>
    </>
  );
}

export default AllEvents;
