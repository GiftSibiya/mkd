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
    <section className="h-[200px]  bg-slate-200 sm:bg-slate-600 md:bg-red-500 lg:bg-yellow-500 lg:h-[1000px]">
      <div className=" flex flex-col items-center">
        <h2 className=" mt-[20px] text-4xl font-semibold"> Our Services </h2>
        <p className="my-5">
          We have been doing stuff for such a long time though, Glory to God
        </p>
        <div className="grid grid-cols-3 gap-x-[100px] gap-y-[50px] border-2 p-10">
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
