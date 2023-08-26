import React from "react";
import Carousel from "@/components/Carousel";

const Home = () => {
  return (
    // <div class="max-w-screen-md flex flex-col justify-center items-center">
    <div class="w-screen flex flex-col justify-center items-center">
      <heading class="flex justify-start items-end w-full pl-2 md:pl-[6rem]">
        <p class="text-3xl md:text-5xl text-neutral-700/80 tracking-widest font-sans font-semibold drop-shadow-lg pb-3">
          Luis Meraz,
        </p>
        <p class="text-neutral-600/60 text-xl md:text-3xl pl-2 font-sans tracking-wider pb-3">
          actor
        </p>
      </heading>
      {/* <div className="2xl:container 2xl:mx-auto 2xl:px-0"> */}

      <div class="container">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
