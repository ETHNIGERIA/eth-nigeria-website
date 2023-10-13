import CommunityCard from '@/components/cards/CommunityCard';
import Contact from '@/components/sections/Contact';
import MainLayout from '@/layout/MainLayout';
import React, { Fragment } from 'react';
const Communities = () => {
  return (
    <Fragment>
      <title>Communities || ETH Nigeria</title>
      <MainLayout>
        <section className='lg:p-20 p-4'>
          <div className='lg:p-6 p-4 bg-primary rounded-xl'>
            <div className='rounded-xl border-l-4 bg-white border-b-8 lg:p-8 p-4 lg:flex justify-between'>
              <div className='lg:w-[50%] my-auto'>
                <h1 className='lg:text-6xl text-4xl font-medium'>Connect, Engage, Thrive: Community Hub</h1>
                <p className='my-6'>We are fostering a culture of collaboration and innovation to empower our members across and beyond Nigeria.</p>

                <button className="flex mt-6 border-2 lg:p-5 p-4 text-primary rounded-xl border-primary font-medium border-b-8">Learn More About Us <img className="w-4 my-auto mx-2" src="./images/icons/arrow-up-right.png" alt="" /></button>
              </div>
              <div className='lg:w-[40%] lg:mt-0 mt-6 '>
                <img src="./images/Teamwork.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="lg:mx-32 mx-4 lg:my-40 my-20">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-5xl text-4xl'>Our Communities Across The Country</h1>
            <p className='my-4'>There is an Ethereum community close to you, check it out and join.</p>
          </div>
          <div className="lg:flex flex-wrap mt-6 justify-between">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </section>

        <Contact />
      </MainLayout>
    </Fragment>
  );
};

export default Communities;