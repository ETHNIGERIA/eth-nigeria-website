import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <header className='lg:px-20 flex justify-between py-3 border-b border-[#686764]'>
      <div className='flex'>
        <img src="./images/logo.png" alt="" />
        <p className='my-auto ml-4 text-lg'>Ethereum Nigeria</p>
      </div>
      <div className='w-[50%] flex justify-between'>
        <div className='my-auto flex justify-evenly w-full'>
          <Link href={'/'} >
            <p className='my-auto text-base'>Home</p>
          </Link>

          <Link href={'/'} >
            <p className='my-auto text-base'>Communities</p>
          </Link>

          <Link href={'/'} >
            <p className='my-auto text-base'>Events</p>
          </Link>

          <Link href={'/'} >
            <p className='my-auto text-base'>About Us</p>
          </Link>

          <Link href={'/'} >
            <p className='my-auto text-base'>Blog</p>
          </Link>
        </div>
        <div className='my-auto ml-8'>
          <img className='w-10 my-auto' src="./images/sun.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;