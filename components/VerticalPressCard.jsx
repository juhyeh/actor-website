import React from "react";
import Image from "next/image";

const VerticalPressCard = ({ link, photoPath, alt, heading, subheading }) => {
  return (
    <div className="vertical_press_card">
      <a href={link} target="_blank">
        <div className="p-6">
          <Image
            className="mb-4"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
            src={photoPath}
            alt={alt}
          />
          <div className="press_card_text">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 font-sans">
              {heading}
            </h5>
            <p className="mb-4 text-base text-neutral-600 font-sans">
              {subheading}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default VerticalPressCard;
