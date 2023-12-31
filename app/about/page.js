import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center md:flex-row max-w-screen-md">
        <heading className="flex justify-start w-full">
          <h1 className="page_heading_mobile">About</h1>
        </heading>
        <p className="pb-5 font-light font-sans tracking-wide text-neutral-700/80">
          Luis Meraz is a Mexican actor and improviser. Against many odds,
          he&apos;s achieved his version of the American Dream. He worked for
          many of the tech titans of our day. With no time to waste, he&apos;s
          put the keyboard away to perform and entertain. The stage is an
          opportunity to reveal unique parts of his immigrant story. His
          greatest assets are curiosity, thoughtfulness, ingenuity, and
          wittiness. Oh, he&apos;s fucking witty. He asks you, can we play
          already?
        </p>
        <Image
          src="/actor-website/luis-meraz-headshot-commercial.png"
          width={300}
          height={300}
          alt="Luiz Meraz Photo"
          className="py-5"
        />
      </div>
    </div>
  );
};

export default About;
