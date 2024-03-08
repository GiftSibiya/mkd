/// Imports

import React from "react";

// Files
import Navbar from "./Navbar";

// Images
import heroImg from "../assets/images/MKD-hero-07.png";

export default function Hero() {
  return (
    <section className=" h-[200px] sm:h-[300px] sm:bg-red-500 lg:h-[400px] bg-slate-700 z-[200]  ">
      <img
        src={heroImg}
        alt="Hero Background"
        className="absolute h-[200px] sm:h-[300px] lg:h-[400px] w-screen object-cover"
      />
      <Navbar className="fixed z-101" />
    </section>
  );
}
