import React from 'react';

const EventsCard = ( {title, date,venue, regLink,organiser,img} ) => {
  return (
    <div className='border rounded-xl border-b-4 border-[#131313] lg:w-[32%] my-6'>
      <div className='flex p-3'>
        <div className=''>
          <p className='font-medium my-2 text-lg'>{title}</p>
          <p className=' my-2 sm:text-sm flex mt-4'> <img className='mr-2' src="./images/icons/clock.png" alt="" /> {date}</p>
          <p className='my-2 sm:text-sm flex'> <img className='mr-2' src="./images/icons/gps.png" alt="" /> {venue}</p>
        </div>
        <img className='sm:w-[40%] h-40 sm:h-[40%] lg:w-[70px] lg:h-[65px]' src={img} alt="" />
      </div>
      <div className='flex flex-wrap p-3'>
        <button className='text-[#ED6DB8] p-1 border text-sm border-[#ED6DB8] bg-[#FCEFF7] rounded-sm'>{organiser}</button>
        <button className='text-primary ml-2 text-sm p-1 border border-primary bg-[#FCEFF7] rounded-sm'>Workshop</button>
      </div>
      <button className='p-3 border-t font-medium border-[#131313] w-full text-primary'><a target="_blank" href={regLink} >Register</a></button>
      
    </div>
  );
};

export default EventsCard;