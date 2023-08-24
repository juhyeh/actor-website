import React from "react";

import Image from "next/image";

const AboutMe = () => {
  return (
    <div class="flex flex-row">
      <div>
        <p>
          Luis Meraz is a Mexican actor and improviser. Against many odds,
          he&apos;s achieved his version of the American Dream. He worked for
          many of the tech titans of our day. With no time to waste, he&apos;s
          put the keyboard away to perform and entertain. The stage is an
          opportunity to reveal unique parts of his immigrant story. His
          greatest assets are curiosity, thoughtfulness, ingenuity, and
          wittiness. Oh, he&apos;s fucking witty. He asks you, can we play
          already?
        </p>
      </div>
      <Image
        src="/luis-meraz-headshot-commercial.png"
        width={300}
        height={300}
        alt="Luiz Meraz Photo"
      />
    </div>
  );
};

export default AboutMe;
