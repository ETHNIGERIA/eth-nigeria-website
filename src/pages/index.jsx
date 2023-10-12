import CommunityCard from "@/components/cards/CommunityCard";
import EventsCard from "@/components/cards/EventsCard";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import MainLayout from "@/layout/MainLayout";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <title>ETH Nigeria</title>
      <MainLayout>
        <section>
          <div className="lg:w-[60%] mx-auto text-center lg:py-44 py-32 relative">
            <h1 className="lg:text-6xl text-5xl font-bold">Join Us For A Year Of Blockchain Innovation</h1>
            <p className="my-4">We are growing the Ethereum ecosystem in Africa</p>
            <button className="flex mt-6 mx-auto border-2 p-4 text-primary rounded-xl border-primary font-medium border-b-8">Join Our Community <img className="w-4 my-auto mx-2" src="./images/icons/arrow-up-right.png" alt="" /></button>

            <img src="./images/patterns/tracery-gradient.png" className="absolute sm:w-20 top-12 lg:left-36 left-16" alt="" />

            <img src="./images/patterns/spiral.png" className="absolute sm:w-8 " alt="" />

            <img src="./images/patterns/snowflake.png" className="absolute right-8 lg:top-32 top-52 sm:w-8 " alt="" />

            <img src="./images/patterns/palm.png" className="absolute right-8 bottom-44 sm:w-8" alt="" />
          </div>
        </section>
        <section className="lg:mx-32 mx-4 lg:my-40 my-20">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Our Communities Across The Country</h1>
            <p className='my-4'>There is an Ethereum community close to you.</p>
          </div>
          <div className="lg:flex mt-6 justify-between">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
          <div>
            <button className="flex mt-6 mx-auto border-2 p-4 text-primary rounded-xl border-primary font-medium border-b-8">View All Communities <img className="w-4 my-auto mx-2" src="./images/icons/arrow-up-right.png" alt="" /></button>
          </div>
        </section>

        <section className="lg:mx-32 mx-4 lg:my-40 my-20">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Events And Roadshows</h1>
            <p className='my-4'>Register to attend our upcoming events and roadshows</p>
          </div>
          <div className="lg:flex mt-6 justify-between">
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
        </section>

        <section className="lg:mx-32 mx-4 lg:my-40 my-20 relative">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Why We Rock</h1>
            <p className='my-4'>We get you prepared for an exciting blockchain ride!</p>
          </div>
          <div className=" mt-6 lg:text-base text-sm">
            <div className="lg:w-[35%] ml-auto border-x-2  my-6 border-y-4 border-[#F8E8A9] bg-[#FDF8E2] rounded-xl p-6">
              <p>We are building a thriving Ethereum ecosystem in Nigeria. Through collaboration and knowledge sharing, we aim to make blockchain accessible to all Nigerians, and Africans.</p>
            </div>
            <div className="lg:w-[35%] ml-auto lg:mr-40 border-x-2  my-6 border-y-4 border-[#9DCB99] bg-[#E7EFDD] rounded-xl p-6">
              <p>We see a future where decentralized applications and smart contracts drive economic growth, democratize finance, and uplift communities throughout our great nation.</p>
            </div>
            <div className="lg:w-[35%] ml-auto lg:mr-80 border-x-2 my-6 border-y-4 border-[#F7C4E2] bg-[#FCEFF7] rounded-xl px-6 py-12">
              <p>Through collaboration and knowledge sharing, we aim to make blockchain accessible to all Nigerians</p>
            </div>
          </div>
          <img src="./images/Travel.png" className="absolute md:hidden lg:block sm:hidden top-0" alt="" />
        </section>

        <section className="lg:mx-32 mx-4 lg:my-40 my-20 relative">
          <div className='text-center lg:w-1/2 mx-auto'>
            <h1 className='lg:text-6xl text-4xl'>Our Sponsors</h1>
            <p className='my-4'>Our amazing sponsors have gone over and beyond, to make our roadshows and workshops successful</p>
          </div>
          <div className="flex flex-wrap justify-between w-[60%] mx-auto">
            <img className="lg:w-44 w-[45%] lg:h-40 mt-4" src="./images/sponsors/eth.png" alt="" />
            <img className="lg:w-44 w-[45%] lg:h-40 mt-4"  src="./images/sponsors/fil.png" alt="" />
            <img className="lg:w-44 w-[45%] lg:h-40 mt-4"  src="./images/sponsors/ethf.png" alt="" />
            <img className="lg:w-44 w-[45%] lg:h-40 mt-4"  src="./images/sponsors/soar.png" alt="" />
          </div>
          <div className="text-center">
            <button className="mt-6 mx-auto border-2 p-4 text-primary rounded-xl border-primary font-medium border-b-8 w-52 ">Sponsor Us </button>
          </div>
        </section>
        <Gallery />
        <Contact />
      </MainLayout>
    </Fragment>
  )
}
