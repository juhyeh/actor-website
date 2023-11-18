import React from "react";
import HorizontalPressCard from "@/components/HorizontalPressCard";

const pressCardInfoList = [
  {
    link: "https://www.finestcityimprov.com/having-purpose-intention-and-being-truthful-with-luis-meraz/",
    photoPath: "./press-photos/finest-city-improv-luis-meraz.jpeg",
    alt: "Luis Meraz with Finest City Improv",
    title: "HAVING PURPOSE, INTENTION AND BEING TRUTHFUL WITH LUIS MERAZ!",
    description: "Finest City Improv's Student Spotlight Luis Meraz",
  },
];

const Press = () => {
  return (
    <div class="max-w-screen-xl w-screen sm:px-16 px-6 flex flex-col h-full">
      <heading class="flex justify-start w-full">
        <h1 className="page_heading_mobile">Press</h1>
      </heading>
      <div className="press_cards_container h-full">
        {pressCardInfoList.map((cardInfo) => (
          <HorizontalPressCard
            key={cardInfo.title}
            link={cardInfo.link}
            photoPath={cardInfo.photoPath}
            alt={cardInfo.alt}
            title={cardInfo.title}
            description={cardInfo.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Press;
