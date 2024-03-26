// Imports
import React from "react";

// Icons
import mkdLogo from "../assets/logo/mkd-white.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="flex flex-col items-center h-[230px] bg-slate-200 sm:bg-slate-600 md:bg-red-500 lg:bg-[#3e1c00] ">
      {" "}
      <div className="flex items-center w-[80%] justify-between ">
        <div className="flex flex-col">
          <img src={mkdLogo} className="w-[150px] h-[150px]" />
          <p className="text-white font-Poppins">
            MKD Sollutions (PTY) LTD 2024
          </p>
        </div>
        <div className="h-[120px] border-[1px] border-white"></div>
        <div className="">
          <div className="flex flex-col items-center text-[20px]">
            <p className="text-white underline">Contact Us</p>
            <p className="text-[15px] text-gray-300 mb-[20px] font-Poppins">
              25 Mthatha Rd, New Brighton, 7110
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-[20px] text-center underline font-Poppins">
              Follow Us
            </p>
            <div className="flex w-[70%] justify-around my-2 ">
              <FaInstagram color="white" size={20} className="cursor-pointer" />
              <FaTiktok color="white" size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[1px] border-white w-[700px] my-2 "></hr>
      <p className="text-white font-Poppins">
        &copy; MKD Sollutions (PTY) LTD {new Date().getFullYear()}
      </p>
    </section>
  );
}
