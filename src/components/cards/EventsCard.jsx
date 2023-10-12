import React from 'react';

const EventsCard = () => {
  return (
    <div className='border rounded-xl border-b-4 border-[#131313] lg:w-[32%] my-6'>
      <div className='flex p-3'>
        <div className=''>
          <p className='font-medium my-2 text-lg'>Q&A Session With Vitalik Buterin</p>
          <p className='my-2 sm:text-sm flex mt-4'> <img className='mr-2' src="./images/icons/clock.png" alt="" /> 18th October 2023</p>
          <p className='my-2 sm:text-sm flex'> <img className='mr-2' src="./images/icons/gps.png" alt="" /> The Zone Events</p>
        </div>
        <img className='sm:w-[40%] sm:h-[40%] ' src="./images/event.png" alt="" />
      </div>
      <div className='flex flex-wrap p-3'>
        <button className='text-[#ED6DB8] p-1 border text-sm border-[#ED6DB8] bg-[#FCEFF7] rounded-sm'>Community</button>
        <button className='text-primary ml-2 text-sm p-1 border border-primary bg-[#FCEFF7] rounded-sm'>Workshop</button>
      </div>
      <button className='p-3 border-t font-medium border-[#131313] w-full text-primary'>Register For Event</button>
    </div>
  );
};

export default EventsCard;