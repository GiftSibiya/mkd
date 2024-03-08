/// Imports
import React from "react";

//picture

export default function TileService(props) {
  const { heading, description, imgPath } = props;
  return (
    <div className="h-[320px] w-[350px] border-2  rounded-md">
      <div className="">
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "30px",
          }}
          className="relative bottom-[-201px]  text-center w-[100%] text-white font-semibold z-20 "
        >
          {heading}
        </div>
        <div></div>
        <img
          src={imgPath}
          alt=""
          className="relative hover:scale-[1.2] hover:h-[210px] hover:rounded-lg hover:shadow-3xl hover:mb-[40px] duration-100 shadow-lg top-[-30px] overflow-hidden object-cover w-screen h-[230px] z-3"
        />
      </div>
      <p className="text-sm px-[10px] relative bottom-[30px] text-center">
        {description}
      </p>
    </div>
  );
}
