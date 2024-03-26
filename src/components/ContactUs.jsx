import React from "react";

// Icons
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center h-[550px] bg-slate-200 sm:bg-slate-600 md:bg-red-500 lg:bg-white">
      {" "}
      <div className="flex w-[80%] items-center justify-between">
        <div className="flex flex-col bg-white h-[500px] border-2 border-[#854d1f] w-[600px] rounded-xl p-4 ">
          <h4 className="font-bold text-[50px] font-Poppins">Get In Touch</h4>
          <p className="w-[450px] text-[20px] font-Poppins">
            Feel free to contact us about all your tember needs and queries. We
            will reply to you as soon as possible.
          </p>
          <form className="flex flex-col my-2 ">
            <input
              placeholder="Name"
              className="w-[450px] m-2 h-[40px] border-b-2"
              required={true}
            ></input>
            <input
              placeholder="Email"
              className="w-[450px] m-2 h-[40px] border-b-2"
              required={true}
            ></input>
            <textarea
              placeholder="Message"
              className="w-[450px] m-2 h-[100px] border-b-2"
              required={true}
            ></textarea>
            <button
              type="submit"
              className="bg-slate-700 w-[150px] h-[50px] my-2 duration-150 hover:bg-slate-500 hover:border-2 hover:border-[#854d1f] text-xl text-white rounded-xl "
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex items-center absolute  right-[200px] bg-lime-600 w-[500px] h-[350px] rounded-3xl p-4 hover:scale-[1.1] duration-300 hover:h-[350px]">
          <div className="flex flex-col justify-between h-[300px] w-[450px] text-white">
            <h4 className="text-2xl mb-[20px] ">Info</h4>
            <div className="flex items-center">
              <MdOutlineEmail size={30} />
              <p className="ml-[20px] font-Poppins">info@mkdSollutions.co.za</p>
            </div>
            <div className="flex items-center">
              <MdCall size={30} />
              <p className="ml-[20px] font-Poppins"> +27 71 234 5678</p>
            </div>
            <div className="flex items-center">
              <MdCorporateFare size={30} />
              <p className="ml-[20px] font-Poppins">
                {" "}
                25 Mthatha Rd, New Brighton, 7110
              </p>
            </div>
            <div className="flex items-center">
              <MdAccessTime size={30} />
              <p className="ml-[20px] font-Poppins">09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
