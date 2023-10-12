import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
// import Card from "@/components/Card";
const OwlCarousel = dynamic(() => import('react-owl-carousel-rtl'), {
  ssr: false,
});


const Gallery = () => {
  return (
    <section>
      <div className='text-center lg:w-1/2 mx-auto'>
        <h1 className='lg:text-6xl text-4xl'>Gallery From Our Roadshows and Workshops</h1>
        <p className='my-4'>See pictures from our roadshow and workshop events. Won’t you love to join us?</p>
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
            <img className='lg:mt-6 mt-3' src="./images/gallery/img1.png" alt="" />
          </div>
          <div>
            <img src="./images/gallery/img2.png" alt="" />
          </div>
          <div>
            <img className='lg:mt-6 mt-3' src="./images/gallery/img5.png" alt="" />
          </div>
          <div>
            <img src="./images/gallery/img4.png" alt="" />
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