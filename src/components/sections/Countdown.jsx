import React, { useState, useEffect } from 'react';

const Countdown = () => {


  //timer logic
  const calculateTimeLeft = () => {
    const eventDate = new Date('2023-12-01T11:00:00Z');// Set your event date and time here
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  
  return (
    <section className='lg:mx-20 my-20'>
      <div className='text-center lg:w-1/2 mx-auto'>
        <h1 className='lg:text-6xl text-4xl'>Bootcamps and Workshops </h1>
        <p className='my-4'>Countdown!</p>
      </div>

      <div className='bg-[#ED6DB8] relative lg:p-6 p-2 rounded-xl'>
        <div className='bg-[#FFFEF5] border-2 border-[#131313] border-b-4 border-r-4 rounded-xl lg:p-6 p-4'>
          <div className='flex flex-wrap mb-10 justify-between lg:w-[50%] mx-auto'>
            <div className=' text-center'>
              <div className='bg-[#E7EFDD] w-32 border-2 border-primary border-b-4 border-r-4 rounded-md text-4xl font-bold p-8'>
                {timeLeft.days}
              </div>
              <p className='text-sm my-2'>Days</p>
            </div>
            <div className='text-center'>
              <div className='bg-[#E7EFDD] w-32 border-2 border-[#ED6DB8] border-b-4 border-r-4 rounded-md text-4xl font-bold p-8'>
                {timeLeft.hours}
              </div>
              <p className='text-sm my-2'>Hours</p>
            </div>
            <div className='text-center'>
              <div className='bg-[#E7EFDD] w-32 border-2 border-[#EEC638] border-b-4 border-r-4 rounded-md text-4xl font-bold p-8'>
                {timeLeft.minutes}
              </div>
              <p className='text-sm my-2'>Minutes</p>
            </div>
            <div className='text-center'>
              <div className='bg-[#E7EFDD] w-32 border-2 border-[#131313] border-b-4 border-r-4 rounded-md text-4xl font-bold p-8'>
              {timeLeft.seconds}
              </div>
              <p className='text-sm my-2'>Seconds</p>
            </div>
          </div>
          <div className='w-[60%] sm:w-full'>

            <h4 className='lg:text-4xl text-2xl lg:w-[60%] font-medium'>Are you ready for the ETH bootcamp 2023?</h4>
            <p className='my-4 sm:text-sm'>Our Road Show Workshop kicks off in Abuja, FCT, touring through vibrant cities in Nigeria, and culminating at the grand stage of EFDevconnect Istanbul 2023. Get ready to explore, learn, and connect on this incredible ride!</p>

            <button className="mt-6 w-52 border-2 p-4 text-primary rounded-xl border-primary font-medium border-b-8"> <a target="_blank" href="https://forms.gle/5uNCr9oxQoaNamkX8">Join Waitlist</a> </button>

          </div>
        </div>
        <img src="./images/Vacation.png" className='absolute sm:hidden block bottom-0 lg:-right-20 right-0 lg:w-[35%] w-[50%]' alt="" />
      </div>
    </section>
  );
};

export default Countdown;