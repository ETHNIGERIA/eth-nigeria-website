import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <footer className='bg-[#FDF8E2]'>
      <div className='lg:px-32 flex py-10 justify-between'>
        <div className='w-[25%]'>
          <div className='flex'>
            <img className='w-10' src="./images/logo.png" alt="" />
            <p className='my-auto ml-4'>Ethereum Nigeria</p>
          </div>
          <p className=' my-5'>Be the first to receive all the recent updates, articles, and valuable materials.</p>
          <div className='flex'>
            <input type="text" className='p-3 border border-[#686764] bg-transparent rounded-md' placeholder='Email address' />
            <button className='p-3 rounded-md bg-[#6DB36C] ml-2 font-bold px-6'>Subscribe</button>
          </div>
        </div>
        <div className='flex justify-between w-[25%]'>
          <div>
            <h4 className='font-bold'>Products</h4>
            <Link href={'/'}>
              <p className='my-2'>Hackathons</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Contributions</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Events</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Workshops</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Sponsor Us</p>
            </Link>
          </div>
          <div>
            <h4 className='font-bold'>Company</h4>
            <Link href={'/'}>
              <p className='my-2'>About Us</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Blog</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex border-t lg:px-32 py-5 justify-between'>
        <p className='flex my-auto'> <img className='w-4 h-4 my-auto mr-2' src="./images/icons/ic_outline-copyright.png" alt="" /> 2023 Ethereum Nigeria. All rights reserved.</p>
        <div className='flex justify-between w-[20%]'>
          <img src="./images/icons/mdi_github.png" className='w-8' alt="" />
          <img src="./images/icons/mingcute_linkedin-fill.png" className='w-8' alt="" />
          <img src="./images/icons/basil_instagram-solid.png" className='w-8' alt="" />
          <img src="./images/icons/simple-icons_x.png" className='w-8' alt="" />
          <img src="./images/icons/bi_medium.png" className='w-8' alt="" />
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;