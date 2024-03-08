/// Imports
import React from "react";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";

/// Main Function
export default function Home() {
  return (
    <body>
      {/* Hero Section */}
      <div className="">
        <Hero />
      </div>
      {/* --   */}

      {/* Services */}
      <div>
        <Services />
      </div>
      {/* --   */}

      {/* Gallery */}
      <div className="">
        <Gallery />
      </div>
      {/* --   */}

      {/* About Us */}
      <div className="">
        <About />
      </div>
      {/* --   */}

      {/* Contact Us */}
      <div className="">
        <ContactUs />
      </div>
      {/* --   */}

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
      {/* --   */}
    </body>
  );
}
