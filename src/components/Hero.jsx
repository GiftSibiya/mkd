/// Imports

import React from "react";

// Files
import Navbar from "./Navbar";

// Images
import heroImg from "../assets/images/MKD-hero-07.png";

export default function Hero() {
  return (
    <section className=" h-[200px] sm:h-[300px] mb-[50px] rounded-b-xl sm:bg-white lg:h-[350px] bg-slate-700 z-[200]  ">
      <img
        src={heroImg}
        alt="Hero Background"
        className="absolute h-[200px] sm:h-[300px] lg:h-[430px] rounded-b-xl w-screen object-cover"
      />
      <Navbar className="fixed z-101" />
    </section>
  );
}
