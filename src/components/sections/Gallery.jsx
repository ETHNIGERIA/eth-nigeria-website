import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
// import Card from "@/components/Card";
const OwlCarousel = dynamic(() => import('react-owl-carousel-rtl'), {
  ssr: false,
});


const Gallery = ({img1,img2,img3,img4,img5,img6,img7,img8,state,text}) => {



  return (
    <section className='bg-[#FDF8E2] lg:py-20'>
      
      <div className='text-center lg:w-1/2 mx-auto'>
        <h1 className='lg:text-6xl text-4xl'>Gallery From Our {state} Meetup Workshop</h1>
       
        <p className='my-4'>{text}</p>
      </div>
     

      <div className='mt-10'>
        <OwlCarousel
          responsive={
            {
              0: {
                items: 1,
                rtl: true,
                loop: true,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 70,
                autoplayTimeout: 2000,
                margin: 20,
              },
              1000: {
                items: 3,
                rtl: true,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 150,
                autoplayTimeout: 2000,
              }
            }
          }
        >
          <div>
            <img className='lg:mt-6 mt-3' src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img className='lg:mt-6 mt-3' src={img5} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>

          
          {/* <div>
            <img src="./images/gallery/img3.png" alt="" />
          </div> */}
        </OwlCarousel>
      </div>
<div className=''></div>
      <div className='mt-10 '>
        <OwlCarousel
          responsive={
            {
              0: {
                items: 1,
                rtl: false,
                loop: true,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 70,
                autoplayTimeout: 2000,
                margin: 20,
              },
              1000: {
                items: 3,
                rtl: false,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplaySpeed: 2000,
                stagePadding: 150,
                autoplayTimeout: 2000,
              }
            }
          }
        >
          <div>
            <img className='lg:mt-6 mt-3' src={img5} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img className='lg:mt-6 mt-3' src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>

          
          {/* <div>
            <img src="./images/gallery/img3.png" alt="" />
          </div> */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Gallery;