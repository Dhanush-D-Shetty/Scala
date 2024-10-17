import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const SingleButtton = ({ txt }) => {
  return (
    // <div className="flex justify-center items-center my-5">
    //   <button className="bg-[#EE3235] group rounded-full text-white py-3 px-8 font-bold md:py-3 text-sm md:text-xl font-montserrat text-center md:px-28 md:rounded-xl">
    //     {txt} 

    //   </button>
    // </div>
    <div className="flex justify-center items-center my-5">
      <button class="group relative             bg-[#EE3235] group rounded-full text-white py-3 px-8 font-bold md:py-3 text-sm md:text-xl font-montserrat text-center md:px-28 md:rounded-xl">
        <span class="relative z-10">{txt}</span>
        <span
          class="absolute opacity-0 right-1/2 top-1/2 transform -translate-y-1/2 text-white font-bold text-lg transition-all duration-500 ease-out group-hover:opacity-100 group-hover:right-[70px]">
         <RiArrowRightSLine size="30"/>
        </span>
      </button>
    </div>

  );
};

export default SingleButtton;
