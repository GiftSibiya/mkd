import React from "react";
import ReactImageGallery from "react-image-gallery";

// Images
import bathroom from "../assets/images/services/bathroom.jpg";
import bedroom from "../assets/images/services/bedroom.jpg";
import kitchen_1 from "../assets/images/services/kitchen-1.jpg";
import roomDiv from "../assets/images/services/roomDiv.jpg";
import tv_1 from "../assets/images/services/tv-1.jpg";
const images = [
  {
    original: bathroom,
    thumbnail: bathroom,
  },
  {
    original: bedroom,
    thumbnail: bedroom,
  },
  {
    original: kitchen_1,
    thumbnail: kitchen_1,
  },
  {
    original: roomDiv,
    thumbnail: roomDiv,
  },
  {
    original: tv_1,
    thumbnail: tv_1,
  },
];

export default function Gallery() {
  return (
    <section className="h-[880px] flex flex-col items-center  sm:bg-slate-600 md:bg-red-500 lg:bg-white">
      {" "}
      <h1 className="text-[2rem] font-bold mb-[30px] underline font-Poppins">
        View Our Expansive Gallery
      </h1>
      <div className="w-[80%] shadow-2xl border-2 border-[#854d1f] rounded-2xl p-2">
        <ReactImageGallery
          className="pointer-events-none"
          items={images}
          showBullets={true}
          autoPlay={true}
          disableSwipe={false}
          slideOnThumbnailOver={true}
          slideDuration={600}
        />
      </div>
    </section>
  );
}
