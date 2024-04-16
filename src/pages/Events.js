import React from 'react';
import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import axios from 'axios';
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
        //console.log("All crimes are => ", response.data.result);
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
          EVENTS
        </div>
        {event.map((event) => (
          <EventCard event={event} />
        ))}
        <div>
          <button
            class='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-4 flex items-center'
            style={{ borderRadius: '50px' }}
          >
            See more
            <i class='fa fa-arrow-right ml-2'></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Events;
