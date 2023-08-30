"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import data from "./../photo-data.json";

const GalleryCarousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div class="carousel">
      <div class="relative overflow-hidden">
        <div class="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            class="hover:bg-slate-900/40 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span class="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            class="hover:bg-slate-900/40 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span class="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          class="carousel-container relative flex gap-0.5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                class="carousel-item text-center relative w-[auto] h-[15rem] md:w-[auto] md:h-[27rem] snap-start"
              >
                <a
                  href={resource.link}
                  class="h-full w-full aspect-video block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                >
                  <Image
                    src={resource.imageUrl || ""}
                    alt={resource.title}
                    class="w-full aspect-auto object-contain hidden"
                    fill
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
