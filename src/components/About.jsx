import React from "react";

export default function About() {
  return (
    <section className="flex flex-col items-center h-[300px] bg-slate-200 sm:bg-slate-600 md:bg-red-500 lg:bg-white">
      {" "}
      <h1 className="text-[2rem] font-bold underline font-Poppins">About Us</h1>
      <p className=" m-5 w-[1200px] text-center rounded-xl p-5 border-2 font-semibold text-xl font-Poppins border-[#854d1f] text-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        voluptatum soluta nesciunt voluptatem aliquid distinctio labore
        explicabo tempora inventore cum debitis laborum dolorem, numquam
        similique, velit rem consequuntur provident? Maiores quaerat consequatur
        voluptate officia nostrum culpa quo ullam earum ratione.
      </p>
    </section>
  );
}
