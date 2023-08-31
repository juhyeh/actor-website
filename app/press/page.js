import React from "react";
import Image from "next/image";

const Press = () => {
  return (
    <div class="max-w-screen-xl w-screen sm:px-16 px-6 h-screen flex flex-col">
      <heading class="flex justify-start w-full">
        <p className="page_heading_mobile">Press</p>
      </heading>
      <div className="press_cards_container lg:my-[4rem]">
        <div className="press_card">
          <a
            href="https://www.finestcityimprov.com/having-purpose-intention-and-being-truthful-with-luis-meraz/"
            target="_blank"
          >
            <div class="p-6">
              <Image
                class="mb-4"
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
                src="/press-photos/finest-city-improv-luis-meraz.jpeg"
                alt="Luis Meraz with Finest City Improv"
              />
              <div className="press_card_text">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 font-sans">
                  HAVING PURPOSE, INTENTION AND BEING TRUTHFUL WITH LUIS MERAZ!
                </h5>
                <p class="mb-4 text-base text-neutral-600 font-sans">
                  Finest City Improv&apos;s Student Spotlight Luis Meraz
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Press;
