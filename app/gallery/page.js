import GalleryCarousel from "@/components/GalleryCarousel";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-screen sm:px-16 px-6 flex flex-col justify-center items-center">
      <heading className="flex justify-start w-full">
        <h1 className="page_heading_mobile">Gallery</h1>
      </heading>
      <section className="w-full flex flex-col justify-center items-center pt-[4rem] min-[1024px]:pb-[4rem]">
        <h2 className="gallery_titles">reels</h2>
        <div className="reels_section ">
          <video
            className="reel min-[765px]:pr-11 min-[1250px]:pr-[6rem]"
            controls
          >
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
          <video className="reel" controls>
            <source src="path/to/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <h2 className="gallery_titles">headshots</h2>
        <div className="headshot_div">
          <Image
            src="/actor-website/luis-meraz-headshot-theatrical.png"
            width={500}
            height={500}
            alt="Luiz Meraz Theatrical Headshot"
            className="object-contain pb-[4rem] min-[1160px]:mr-[2rem] min-[1378px]:mr-[6rem] min-[1545px]:mr-[10rem]"
          />
          <Image
            src="/actor-website/luis-meraz-headshot-commercial.png"
            width={500}
            height={500}
            alt="Luiz Meraz Commerical Headshot"
            className="object-contain pb-3 min-[1160px]:pb-[4rem]"
          />
        </div>
        <h2 className="gallery_titles">production</h2>
        <div className="container">
          <GalleryCarousel />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
