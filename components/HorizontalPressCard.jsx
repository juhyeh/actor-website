import React from "react";
import Image from "next/image";

const HorizontalPressCard = ({ link, photoPath, alt, title, description }) => {
  return (
    <a href={link} target="_blank">
      <div className="horizontal_press_card">
        <Image
          className="mb-4"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          src={photoPath}
          alt={alt}
        />
        <div className="flex flex-col md:pl-11">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 font-sans">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 font-sans">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default HorizontalPressCard;
