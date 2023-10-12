import React from 'react';

const CommunityCard = () => {
  return (
    <div className='border rounded-xl border-b-4 border-[#131313] lg:w-[32%] sm:my-6'>
      <div className='flex'>
        <div className='p-3'>
          <p className='font-medium my-2 text-lg'>Ethereum Lagos Community</p>
          <p className='my-2 sm:text-sm'>The Lagos Ethereum community is open to everyone who lives around and within Lagos.</p>
          <p className='sm:text-sm'>Just so you know, we’ve got you, and you’ve got us. </p>
        </div>
        <img className='sm:w-[40%]' src="./images/Eko-Bridge.png" alt="" />
      </div>
      <button className='p-3 border-t font-medium border-[#131313] w-full text-primary'>Join Community</button>
    </div>
  );
};

export default CommunityCard;