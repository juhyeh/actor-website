import GalleryCarousel from "@/components/GalleryCarousel";
import React from "react";

const Gallery = () => {
  return (
    <div class="max-w-screen-lg h-screen flex flex-col justify-center items-center">
      <heading class="flex justify-start w-full">
        <p className="page_heading_mobile">Gallery</p>
      </heading>
      <section>
        <h2 class="gallery_titles">REELS</h2>
        <div class="reels_section ">
          <video class="reel md:pr-11" controls>
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
          <video class="reel" controls>
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section class="flex flex-col w-full">
        <h2 class="gallery_titles">PHOTOS</h2>
        <GalleryCarousel />
      </section>
    </div>
  );
};

export default Gallery;
