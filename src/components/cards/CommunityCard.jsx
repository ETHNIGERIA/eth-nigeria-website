import React from 'react';

const CommunityCard = ({state,image,communityLink}) => {
  return (
    <div className='border rounded-xl border-b-4 border-[#131313] lg:w-[32%] my-6'>
      <div className='flex h-[80%] md:h-[90%] lg:'>
        <div className='p-3'>
          <p className='font-medium my-2 text-lg'>Ethereum {state} Community</p>
          <p className='my-2 sm:text-sm'>The {state} Ethereum community is open to everyone who lives around and within {state}.</p>
          <p className='sm:text-sm'>Just so you know, we’ve got you, and you’ve got us. </p>
        </div>
       <div className='lg:h-[400px]  '></div> <img className='w-[120px] h-[300px] md:w-[150px] md:h-[180px] lg:w-[100px] lg:h-[200px]  self-center' src={image} alt="" />
      </div>
      <button className='p-3 border-t font-medium border-[#131313] w-full text-primary'> <a target="_blank" href={communityLink} >Join Community</a></button>
    </div>
  );
};

export default CommunityCard;