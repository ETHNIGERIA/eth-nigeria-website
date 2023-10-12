import React from 'react';

const Contact = () => {
  return (
    <section className='my-20 relative'>
      <div className='lg:w-1/2 mx-auto'>
        <div className='text-center lg:w-1/2 mx-auto'>
          <h1 className='lg:text-6xl text-4xl'>Need To Talk To Us?</h1>
          <p className='my-4'>Send us a message</p>
        </div>
        <div className='border-2 border-[#F8E8A9] bg-[#FDF8E2] lg:p-20 p-4 rounded-xl'>
          <div className='my-4'>
            <label htmlFor="email">Your Email</label>
            <input type="text" name='email' className='p-3 border rounded-xl bg-transparent w-full' />
          </div>
          <div className='my-4'>
            <label htmlFor="subject">Email Subject</label>
            <input type="text" name='subject' className='p-3 border rounded-xl bg-transparent w-full' />
          </div>

          <div className='my-4'>
            <label htmlFor="message">Write a Message</label>
            <textarea name="message" className='p-3 border rounded-xl bg-transparent w-full h-40'></textarea>
          </div>

          <button className="flex mt-6 mx-auto border-2 p-4 text-primary rounded-xl border-primary font-medium border-b-8">Send Us Message</button>

        </div>
      </div>
      <img src="./images/Messaging.png" className='absolute top-0 right-0 md:hidden lg:block sm:hidden' alt="" />
    </section>
  );
};

export default Contact;