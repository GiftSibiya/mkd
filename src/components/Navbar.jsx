/// Imports
import React, { useState } from "react";

// Images
import mkdWhite from "../assets/logo/mkd-white.png";
import hamBg from "../assets/images/ham-bg.jpg";

export default function Navbar() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };
  return (
    <section className=" flex items-center w-screen h-[90px] fixed z-[100]">
      <div className="mx-auto w-[80%] bg-[#3e1c00] opacity-80 rounded-lg h-[70px] flex justify-between items-center hover:opacity-100 z-[100]">
        <div className="mx-10">
          <img src={mkdWhite} className="size-[60px] cursor-pointer" />
        </div>

        {/* Link Container */}
        <div className="mx-2 hidden sm:flex md:mx-10 ">
          <a className="mx-1 text-white font-semibold" href="/">
            Home
          </a>
          <a className="mx-1 text-white font-semibold" href="/">
            {" "}
            Services
          </a>
          <a className="mx-1 text-white font-semibold" href="/">
            Gallery
          </a>
          <a className="ml-1 text-white font-semibold" href="/">
            About Us
          </a>
        </div>
        {/* -- */}
        <div className="text-white hidden sm:flex px-2 z-50">Call Us</div>

        {/* Hamburger Section */}
        <div className=" sm:hidden px-2" onClick={handleHamburger}>
          <div className="w-[20px] border-[1px]"></div>
          <div className="w-[20px] border-[1px] my-1"></div>
          <div className="w-[20px] border-[1px]"></div>
        </div>
        {/* -- */}
      </div>

      {/* Hamburger Menu */}
      <div
        className={`${
          isHamburgerOpen ? "flex" : "hidden"
        } sm:hidden absolute top-0 w-full bg-[#3e1c00] `}
      >
        <div className=" flex flex-col justify-center items-center z-10">
          <div className=" flex items-center justify-around w-screen mb-[20px]">
            <img src={mkdWhite} alt="" className="size-20" />
            <div className=" sm:hidden px-2" onClick={handleHamburger}>
              <div className="w-[20px] border-[1px]"></div>
              <div className="w-[20px] border-[1px] my-1"></div>
              <div className="w-[20px] border-[1px]"></div>
            </div>
          </div>
          <div className="w-screen flex items-center flex-col gap-2">
            <a href="" className="text-white font-semibold text-3xl ">
              Home
            </a>
            <a href="" className="text-white font-semibold text-3xl ">
              Services
            </a>
            <a href="" className="text-white font-semibold text-3xl ">
              Gallery
            </a>
            <a href="" className="text-white font-semibold text-3xl ">
              About Us
            </a>
          </div>
        </div>
        <img src={hamBg} className="absolute w-screen h-[300px]" />
      </div>
    </section>
  );
}
