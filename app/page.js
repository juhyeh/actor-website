import React from "react";
import Carousel from "@/components/Carousel";

const Home = () => {
  return (
    <div class="w-screen flex flex-col justify-center items-center">
      <heading class="flex justify-start items-end w-full pl-2 md:pl-[6rem]">
        <p class="text-3xl md:text-6xl text-neutral-700/90 tracking-widest font-sans font-semibold drop-shadow-lg pb-3 luisMeraz">
          Luis Meraz,
        </p>
        <p class="text-neutral-700/60 text-xl md:text-4xl pl-2 font-sans tracking-wider pb-3 actor">
          actor
        </p>
      </heading>
      <div class="container">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
