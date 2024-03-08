import React from "react";

export default function Navbar() {
  return (
    <section className=" flex items-center w-screen h-[90px] fixed">
      <div className="mx-auto w-[80%] bg-[#3e1c00] opacity-70 rounded-lg h-[70px] flex justify-between items-center hover:opacity-100">
        <div className="mx-10">Logo</div>
        <div className="mx-10 ">
          <a className="mx-2 text-white font-semibold" href="">
            Home
          </a>
          <a className="mx-2 text-white font-semibold" href="">
            {" "}
            Services
          </a>
          <a className="mx-2 text-white font-semibold" href="">
            Gallery
          </a>
          <a className="mx-2 text-white font-semibold" href="">
            About Us
          </a>
        </div>
        <div className="mx-10">Call Us</div>
      </div>
    </section>
  );
}
