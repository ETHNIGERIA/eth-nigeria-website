import Link from 'next/link';
import React, { useState } from 'react';

const HeaderNav = () => {
  const [open, setOpen] = useState(false)

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    setOpen(true)
  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    setOpen(false)
  }

  return (
    <header className='lg:px-20 bg-[#FFFEF5] px-4 flex justify-between py-3 border-b border-[#686764]'>
      <div className='flex'>
        <img src="./images/logo.png" alt="" />
        <p className='my-auto sm:hidden ml-4 text-lg'>Ethereum Nigeria</p>
      </div>
      <div className='lg:w-[50%] flex justify-between'>
        <div className='my-auto  lg:flex hidden justify-evenly w-full'>
          <Link href={'/'} >
            <p className='my-auto text-base'>Home</p>
          </Link>

          <Link href={'/'} >
            <p className='my-auto text-base'>Communities</p>
          </Link>

          <Link href={'/'} >
            <p className='my-auto text-base'>Events</p>
          </Link>

          <Link href={'/about_us'} >
            <p className='my-auto text-base'>About Us</p>
          </Link>

          <Link href={'/blog'} >
            <p className='my-auto text-base'>Blog</p>
          </Link>
        </div>
        <div className='my-auto ml-8 flex '>
          <img className='lg:w-10 w-8 my-auto cursor-pointer' src="./images/sun.png" alt="" />

          <img onClick={() => openNav()} src="./images/icons/icons8-hamburger.svg" className='w-6 ml-5 cursor-pointer lg:hidden block my-auto' alt="" />
        </div>

        <div id="mySidenav" className='sidenav'>
          <div className="w-[90%] mx-auto">
            <p onClick={() => closeNav()} className="float-right text-4xl cursor-pointer">&times;</p>
            <div className="pt-20"></div>
            <Link href={'/'} >
              <p className='my-5 text-base'>Home</p>
            </Link>

            <Link href={'/'} >
              <p className='my-5 text-base'>Communities</p>
            </Link>

            <Link href={'/'} >
              <p className='my-5 text-base'>Events</p>
            </Link>

            <Link href={'/'} >
              <p className='my-5 text-base'>About Us</p>
            </Link>

            <Link href={'/'} >
              <p className='my-5 text-base'>Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;