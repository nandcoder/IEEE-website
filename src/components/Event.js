import React from 'react';
import Data from './eventData.json';

const Event = () => {
  return (
    <React.Fragment>
      <div className='text-4xl font-semibold p-4 flex justify-center items-center h-full'>
        Recent events
      </div>
      <div className='flex overflow-x-auto'>
        {Data.map((data) => {
          return (
            <div
              className='p-4 bg-slate-100 mx-4 my-2 border-solid border border-slate-200 shadow-xl rounded flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
              key={data.id}
            >
              <img
                src={data.image}
                className='max-h-80 max-w-full'
                alt={data.about}
              />
              <p className='text-justify text-black text-base font-medium'>
                {data.about}
              </p>
              <button className='cursor-pointer bg-sky-700 text-slate-100 w-32 h-8 rounded-md mt-1'>
                Read More...
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Event;
