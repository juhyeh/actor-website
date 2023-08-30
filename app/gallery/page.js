import GalleryCarousel from "@/components/GalleryCarousel";
import React from "react";

const Gallery = () => {
  return (
    <div class="w-screen sm:px-16 px-6 flex flex-col justify-center items-center">
      <heading class="flex justify-start w-full">
        <p className="page_heading_mobile">Gallery</p>
      </heading>
      <section class="w-full flex flex-col justify-center items-center pt-[4rem] min-[1024px]:pb-[4rem]">
        <h2 class="gallery_titles">REELS</h2>
        <div class="reels_section ">
          <video class="reel min-[765px]:pr-11 min-[1250px]:pr-[6rem]" controls>
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
          <video class="reel" controls>
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section class="w-full flex flex-col justify-center items-center">
        <h2 class="gallery_titles">PHOTOS</h2>
        <div class="container">
          <GalleryCarousel />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
