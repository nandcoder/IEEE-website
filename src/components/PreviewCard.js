import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PreviewCard({ event }) {
  // const navigate = useNavigate();
  const [localDate, setLocalDate] = useState('');

  useEffect(() => {
    const eventDate = new Date(event.date);
    const formattedLocalDate = eventDate.toLocaleDateString();
    setLocalDate(formattedLocalDate);
  }, [event.date]);

  const handleReadMore = () => {
    console.log('The event is: ', event);
    console.log('Local date is: ', localDate);
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '300px',
          backgroundColor: 'whitesmoke',
          color: '#F6F5F5',
          height: '550px',
          margin: '1em',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='card'
      >
        <style jsx>{`
          @media screen and (min-width: 720px) {
            .card {
              width: 50%;
            }
          }
        `}</style>
        <img
          src={event.images[0]}
          alt=''
          srcset=''
          style={{ height: '200px' }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            padding: '4px 2px',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            className='col-span-3'
            style={{
              position: 'absolute',
              color: 'black',
              fontSize: '20px',
              padding: '8px 15px',
              fontWeight: 'bold',
              overflow: 'hidden',
            }}
          >
            {event.title}
          </div>
          <div
            className='col-span-3 p-4 text-justify'
            style={{
              padding: 15,
              color: 'black',
              display: 'flex',
              position: 'absolute',
              flexDirection: 'column',
              maxHeight: '100%', // Adjust the max height based on your needs
              textOverflow: 'ellipsis',
              whiteSpace: 'wrap', // Use nowrap to prevent line breaks
              width: '100%',
              marginTop: '70px',
            }}
          >
            {event.summary}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 'auto', // Push the button to the bottom
            marginBottom: '5%',
          }}
        >
          <Link
            to={`/events/event?id=${event._id}`}
            style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              className=' hover:bg-sky-600   cursor-pointer bg-sky-700 text-slate-100 w-40 h-8 rounded-md mt-1 flex justify-center items-center  '
              style={{
                borderRadius: '17px',
                height: '40%', // Adjusted height
                width: '80%',
                margin: '1em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              onClick={handleReadMore}
            >
              <div className='flex p-3 items-center justify-center width-80'>
                Read more
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PreviewCard;
