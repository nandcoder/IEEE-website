import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import Image from '../assets/demoPic.png';

const EventDetails = () => {
  const params = new URLSearchParams(useLocation().search);
  const query = params.get('id');
  const [event, setEvent] = useState(null);
  // console.log(query);
  useEffect(() => {
    axios
      .get('https://eager-twill-ray.cyclic.app/api/events')
      .then((res) => {
        res.data.events.map((content) => {
          console.log('The event is ', content);
          if (content._id === query) {
            // console.log('This is terue');
            setEvent(content);
          }
          return null;
        });
      })
      .catch((err) => {
        console.log('Error fetching event details:', err);
      });
    // }, [query]);
    // const queryData = async () => {
    //   try {
    //     const response = await axios.get(
    //       'https://ieee-1vzv.onrender.com/api/events'
    //     );
    //     response.data.events.map((content) => {
    //       // console.log('The event is ', content);
    //       if (content._id === query) {
    //         // console.log('This is terue');
    //         setEvent(content);
    //       }
    //     });
    //     // console.log(response.data);
    //     // console.log(event);
    //   } catch (error) {
    //     console.error('Error fetching event details:', error);
    //   }
    // };
    // queryData();
  }, [query]);

  const formattedDate = formatDateToWords(event?.date);
  function formatDateToWords(dateTimeString) {
    const date = new Date(dateTimeString);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };

    return date.toLocaleString('en-US', options);
  }
  return (
    <>
      <div className='eventStyle font-light'>
        <div className='mr-20 ml-'>
          <h1>{event?.title}</h1>
        </div>
        <div className='mr-20 mt-4 mb-3' style={{ 'font-size': '20' }}>
          <p>{event?.summary}</p>
        </div>
        <hr />
        {/* break line */}

        {/* time of publish */}
        <div className='text-sm font-light'>
          <p>
            <div>{event?.author}</div>
            <div>
              {' '}
              {event?.location}, {formattedDate}
            </div>
          </p>
        </div>
        <div className='imageDiv mt-3 mb-3 flex'>
          {event?.images.map((img) => (
            <img src={img} alt='' className='imageStyle' />
          ))}
        </div>
        <div className='text-justify'>
          <p dangerouslySetInnerHTML={{ __html: event?.body }}></p>
        </div>
      </div>
      <style jsx>{`
        @media screen and (min-width: 750px) {
          .eventStyle {
            padding: 40px 80px;
          }
          .imageDiv {
            width: 50%;
          }
          .imageStyle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 10px;
          }
        }
        @media screen and (max-width: 750px) {
          .eventStyle {
            padding: 10px 20px;
          }
          .imageDiv {
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }
          .imageStyle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default EventDetails;
