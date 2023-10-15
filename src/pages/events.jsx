import EventsCard from '@/components/cards/EventsCard';
import Countdown from '@/components/sections/Countdown';
import Gallery from '@/components/sections/Gallery';
import MainLayout from '@/layout/MainLayout';
import React, { Fragment } from 'react';

const Events = () => {
  return (
    <Fragment>
      <title>Events || ETH Nigeria</title>
      <MainLayout>
        <Countdown />
        <section className="lg:mx-32 mx-4 lg:my-40 my-20">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Up Coming Workshops</h1>
            <p className='my-4'>Register to attend our upcoming Workshops In this Q4</p>
          </div>
          <div className="lg:flex flex-wrap mt-6 justify-between">
          <EventsCard  title="Content Design workshop" date="7pm 15th Oct 2023" venue="Online" regLink=" https://bit.ly/ETHLagosWorkshop" organiser=" Ethereum Lagos" />
            <EventsCard  title="Blockchain 101 Workshop" date="11am 21st Oct 2023" venue="Online" regLink="https://bit.ly/ETHBeninWorkshop" organiser=" Ethereum Benin" />
            <EventsCard  title="ZK Workshop " date="11am 21st Oct 2023" venue="Online" regLink=" https://bit.ly/ETHPortharcourt" organiser="Ethereum Portharcourt" />
            
          </div>
        </section>

        <section className="lg:mx-32 mx-4 lg:my-40 my-20">
          <div className='text-center lg:w-[30%] mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Up Coming Meet up</h1>
            <p className='my-4'>Register to attend our upcoming events and roadshows</p>
          </div>
          <div className="lg:flex mt-6 justify-between">
          <EventsCard  title="Content Design workshop" date="7pm 15th Oct 2023" venue="Online" regLink=" https://bit.ly/ETHLagosWorkshop" organiser=" Ethereum Lagos" />
            <EventsCard  title="Blockchain 101 Workshop" date="11am 21st Oct 2023" venue="Online" regLink="https://bit.ly/ETHBeninWorkshop" organiser=" Ethereum Benin" />
            <EventsCard  title="ZK Workshop " date="11am 21st Oct 2023" venue="Online" regLink=" https://bit.ly/ETHPortharcourt" organiser="Ethereum Portharcourt" />
          </div>
        </section>

        <section className="lg:mx-32 mx-4 lg:my-40 my-20">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Past Events</h1>
            <p className='my-4'>Recaps of our events in the Just concluded Q3</p>
          </div>
          <div className="lg:flex mt-6 justify-evenly">
            <div className='border rounded-xl border-b-4 border-[#131313] lg:w-[40%] my-6'>
              <div className='flex p-3'>
                <div className=''>
                  <p className='font-medium my-2 text-lg'>Ethereum Nigeria
                    Meet up
                    Roadshow
                    Workshop 2023</p>
                  <div className='my-2'>
                    <p className='text-sm font-medium'>Abuja: Blockchain Security </p>
                    <p className='text-xs flex'> <img className='mr-2 w-4' src="./images/icons/clock.png" alt="" /> 19th August 2023</p>
                  </div>
                  <div className='my-2'>
                    <p className='text-sm font-medium'>Lagos: Layer2 Scaling Ethereum</p>
                    <p className='text-xs flex'> <img className='mr-2 w-4' src="./images/icons/clock.png" alt="" /> 29th August 2023</p>
                  </div>
                  <div className='my-2'>
                    <p className='text-sm font-medium'>Anambra: Ethereum Basics 101 </p>
                    <p className='text-xs flex'> <img className='mr-2 w-4' src="./images/icons/clock.png" alt="" />30th September 2023</p>
                  </div>
                  <div className='my-2'>
                    <p className='text-sm font-medium'>Portharcourt: Unleashing Zk Technology</p>
                    <p className='text-xs flex'> <img className='mr-2 w-4' src="./images/icons/clock.png" alt="" /> 2nd October 2023</p>
                  </div>
                  {/* <p className='my-2 sm:text-sm flex'> <img className='mr-2' src="./images/icons/gps.png" alt="" /> The Zone Events</p> */}
                </div>
                <img className='sm:w-[40%] h-40 sm:h-[40%] ' src="./images/roadshow.png" alt="" />
              </div>
            </div>
            <img className='lg:w-[30%]' src="./images/abj.png" alt="" />
          </div>
        </section>
        <Gallery />

      </MainLayout>
    </Fragment>
  );
};

export default Events;