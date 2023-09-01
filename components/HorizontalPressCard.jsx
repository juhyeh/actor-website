import React from "react";
import Image from "next/image";

const HorizontalPressCard = ({ link, photoPath, alt, title, description }) => {
  return (
    <div className="horizontal_press_card">
      <a href={link} target="_blank">
        <Image
          class="mb-4"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          src={photoPath}
          alt={alt}
        />
      </a>
      <div className="flex flex-col md:pl-11">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 font-sans">
          {title}
        </h5>
        <p class="mb-4 text-base text-neutral-600 font-sans">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalPressCard;
