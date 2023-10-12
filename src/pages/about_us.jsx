import MainLayout from "@/layout/MainLayout";
import { Fragment } from "react";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <Fragment>
      <title>About Us || ETH Nigeria</title>
      <MainLayout>
        <div className="custom-bg-image">
          <div className=" lg:mx-20 md:pb-10 pb-10 border-t-0 border-r-0 rounded-bl-lg px-4  mx-4 grid md:grid-cols-11 border border-solid border-gray-600 grid-cols-1 mt-24">
            <div className=" md:col-span-5 col-span-1">
              <img src="./images/aboutus/spiral.png " alt="" />
              <img src="./images/aboutus/Advertisement.png" alt="" />
            </div>
            <img
              className="self-end col-span-1 hidden md:block pb-10"
              src="./images/aboutus/snowflake.png "
              alt=""
            />
            <div className=" md:col-span-5 col-span-1 flex flex-col space-between justify-between border-solid border-2 border-b-8 rounded-lg border-black px-8 lg:py-32 py-10 text-center">
              <p className="text-2xl font-semibold">Why ETHNigeria?</p>
              <p className="text-xl  font-normal pt-6">
                Welcome to EthereumNigeria: Your Gateway to the Blockchain
                Revolution!
              </p>
              <p className="text-gray-600 pt-10">
                At Ethereum Nigeria, we are more than just a community; we are
                the heartbeat of blockchain innovation in Nigeria. Our passion
                for Ethereum and decentralized technology drives us to connect,
                educate, and empower individuals across the nation.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 mx-4 lg:mx-20 grid md:grid-cols-3 grid-cols-1 gap-8  ">
          <div className="bg-[#F9BEE0] border-solid border-2 border-b-8 rounded-lg border-black px-4  pb-20 pt-10 flex gap-4 flex-col items-center justify-center  text-center">
            <img className="w-18 p-4 bg-[#9DCB99] rounded-full" src="./images/aboutus/mingcute_target-line.png" alt="" />
            <p className="text-xl  font-medium">Our Mission</p>
            <p>

              Our mission is to foster a thriving Ethereum ecosystem in Nigeria.
              We believe in the power of blockchain technology to transform
              lives, businesses, and communities. Through collaboration and
              knowledge sharing, we aim to make blockchain accessible to all
              Nigerians
            </p>
          </div>
          <div className="bg-[#FCF0CE] border-solid border-2 border-b-8 rounded-lg border-black px-4  pb-20 pt-10 flex gap-4 flex-col items-center justify-center  text-center">
            <img className="w-18 p-4 rounded-full bg-[#F9BEE0]" src="./images/aboutus/heroicons-outline_light-bulb.png" alt="" />
            <p className="text-xl  font-medium">Our Vision</p>
            <p>
              Our vision is to create a vibrant and inclusive Ethereum community
              in Nigeria, one that fosters innovation, collaboration, and
              financial freedom. We see a future where decentralized
              applications and smart contracts drive economic growth,
              democratize finance, and uplift communities throughout our great
              nation
            </p>
          </div>
          <div className="bg-green-600 border-solid border-2 border-b-8 rounded-lg border-black px-4  pb-20 pt-10 flex gap-4 flex-col items-center justify-center  text-center">
            <img className="w-16 " src="./images/aboutus/Frame 1321316567.png" alt="" />

            <p className="text-xl  font-medium">Our Values</p>
            <p>
              We are committed to providing accessible and comprehensive
              education about Ethereum and blockchain technology. Our goal is to
              make sure every Nigerian has the knowledge and skills to
              participate in the decentralized economy.
            </p>
          </div>
        </div>
        <Contact />


      </MainLayout>
    </Fragment>
  );
}
