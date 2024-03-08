/// Imports

import React from "react";

// Files
import Navbar from "./Navbar";

// Images
import heroImg from "../assets/images/MKD-hero-07.png";

export default function Hero() {
  return (
    <section className="h-[500px] ">
      <img src={heroImg} alt="Hero Background" className="absolute" />
      <Navbar className="fixed" />
    </section>
  );
}
