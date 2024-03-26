// imports
import React from "react";

// components
import TileService from "../custom modules/TileService";

// Service Pics
import drillPic from "../assets/images/drill.jpg";
import kitchen1 from "../assets/images/services/kitchen-1.jpg";
import tvStand from "../assets/images/services/tv-1.jpg";
import bathroomPic from "../assets/images/services/bathroom.jpg";
import bedroomPic from "../assets/images/services/bedroom.jpg";
import roomDiv from "../assets/images/services/roomDiv.jpg";

export default function Services() {
  return (
    <section className="h-[330px] bg-slate-200 sm:bg-slate-600 md:bg-red-500 lg:bg-white lg:h-[1320px]">
      <div className=" flex flex-col items-center">
        <h2 className=" mt-[20px] text-[60px] font-semibold font-Poppins">
          {" "}
          Custom Timber Sollutions{" "}
        </h2>
        <div className="flex items-center w-[650px] justify-between">
          <p className="text-[25px] font-Poppins ">
            Explore Custom made timber sollutions
          </p>
          <div className="border-[#854d1f] border-2 p-2 rounded-lg text-[20px] font-Poppins">
            Get Started
          </div>
        </div>
        <h2 className=" mt-[20px] text-[60px] font-semibold font-Poppins">
          {" "}
          Our Services{" "}
        </h2>
        <p className=" m-5 w-[1200px] text-center rounded-xl p-5 border-2 font-semibold text-xl  border-[#854d1f] text-black font-Poppins">
          At MKD, we offer a comprehensive range of carpentry services tailored
          to meet your needs. From crafting to precise installation of trim
          work, cabinets, and flooring, our skilled carpenters bring years of
          expertise to every project. Whether you're renovating your home,
          building a new space, or simply looking to enhance the beauty and
          functionality of your surroundings Explore our services to discover
          how we can transform your vision into reality.
        </p>
        <div className="grid grid-cols-3 gap-x-[100px] gap-y-[50px] p-[40px]">
          {/* Custom Service Module */}

          {/* -- */}
          {/* // Imported Tile Components */}

          <TileService
            heading="Custom Kitchen Fittings"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum in consequuntur atque commodi perferendis fuga"
            imgPath={kitchen1}
          />
          <TileService
            heading="Tailored Cupboards "
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum in consequuntur atque commodi perferendis fuga"
            imgPath={roomDiv}
          />
          <TileService
            heading="Specialized TV Stands"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum in consequuntur atque commodi perferendis fuga"
            imgPath={tvStand}
          />
          <TileService
            heading="Bathroom Customization"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum in consequuntur atque commodi perferendis fuga"
            imgPath={bathroomPic}
          />
          <TileService
            heading="Bedroom Renovation"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum in consequuntur atque commodi perferendis fuga"
            imgPath={bedroomPic}
          />
          <TileService
            heading="Solar Installation"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum in consequuntur atque commodi perferendis fuga"
            imgPath={drillPic}
          />
        </div>
      </div>
    </section>
  );
}
