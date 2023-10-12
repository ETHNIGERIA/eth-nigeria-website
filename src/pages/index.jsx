import MainLayout from "@/layout/MainLayout";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <title>ETH Nigeria</title>
      <MainLayout>
        <section>
          <div className="lg:w-[60%] mx-auto text-center lg:py-40 py-32 relative">
            <h1 className="lg:text-6xl text-5xl font-bold">Join Us For A Year Of Blockchain Innovation</h1>
            <p className="my-3">We are growing the Ethereum ecosystem in Africa</p>
            <button className="flex mt-6 mx-auto border-2 p-4 text-primary rounded-xl border-primary font-medium border-b-8">Join Our Community <img className="w-4 my-auto mx-2" src="./images/icons/arrow-up-right.png" alt="" /></button>

            <img src="./images/patterns/tracery-gradient.png" className="absolute sm:w-20 top-12 lg:left-36 left-16" alt="" />

            <img src="./images/patterns/spiral.png" className="absolute sm:w-8 " alt="" />

            <img src="./images/patterns/snowflake.png" className="absolute right-8 lg:top-32 top-52 sm:w-8 " alt="" />

            <img src="./images/patterns/palm.png" className="absolute right-8 bottom-44 sm:w-8" alt="" />
          </div>
        </section>
      </MainLayout>
    </Fragment>
  )
}
