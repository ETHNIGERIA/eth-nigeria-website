import { Fragment } from "react";
import MainLayout from "@/layout/MainLayout";
import EventsCard from "@/components/cards/EventsCard";

export default function Blog() {
  return (
    <Fragment>
      <title>ETH Nigeria</title>
      <MainLayout>
        <div className=" lg:mx-20 mx-4 mt-20 border-solid border-2 border-b-8 rounded-lg border-black p-10 gap-10">
          <img className="" src="./images/patterns/spiral.png" alt="" />
          <p className="pt-5 text-2xl font-medium">Etheruem Nigeria</p>
          <p className="pt-10 text-[#686764]">
            Ethereum, the world's leading blockchain platform, has been making
            waves globally, and Nigeria is no exception. With its versatile
            smart contract capabilities and decentralized applications, Ethereum
            is transforming industries, financial systems, and even governance.
            In Nigeria, the Ethereum ecosystem is flourishing, and it's poised
            to empower the nation in various ways. This blog explores how
            Ethereum is making a significant impact in Nigeria and fostering a
            decentralized future.
          </p>
        </div>

        <div className="custom-bg-image">
          <div className="lg:mx-20 mx-4 grid lg:grid-cols-10 grid-cols-1  mt-20 font-medium gap-y-8">
            <div className=" md:col-span-4  col-span-1 border-solid border-2 border-b-8 rounded-lg border-black flex items-center justify-center">
              <img src="./images/Start up launch.png" alt="" />
            </div>
            <div className="md:col-span-1 hidden md:block"></div>
            <div className="md:col-span-5 col-span-1  flex flex-col justify-around xl:text-2xl text-base ">
              <p className="text-[#ED6DB8] bg-[#FCEFF7] p-4 border-solid border-2  rounded-lg border-[#ED6DB8] self-start">
                Latest News
              </p>

              <div className="flex items-center mt-8">
                <p className="text-[24]">.</p>
                <p className="text-[24] ml-5">
                  Meetup: Ethereum Nigeria - Diaspora Dubai
                  <br />
                  (16th October, 2023)
                </p>
              </div>

              <div className="flex items-center mt-8">
                <p className="text-[24]">.</p>
                <p className="text-[24] ml-5">
                  Meetup: Ethereum Nigeria - Diaspora Cairo
                  <br />
                  (20th October, 2023)
                </p>
              </div>

              <div className="flex items-center mt-8">
                <p className="text-[24]">.</p>
                <p className="text-[24] ml-5">
                  Ethereum Nigeria Boot camp Registrations Start In <br />
                  November, 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        <EventsCard/>
      </MainLayout>
    </Fragment>
  );
}