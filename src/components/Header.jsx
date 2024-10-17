import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Header = () => {
  let links = [
    "Solutions",
    "Industries",
    "Case Studies",
    "Products",
    "Professional Services",
    "Resources",
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="hidden font-montserrat shadow-lg lg:flex justify-around items-center bg-white w-screen">
        <div className="flex items-center ">
          <a href="#">
            <img
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-Logo-sg-.webp"
              alt="Scala Logo"
              title="Scala Logo-sg"
              // width={200}
              className="w-28 lg:w-52"
            />
          </a>
        </div>

        <ul className="hidden lg:flex font-medium gap-5 text-[15px]">
          {links.map((singleLink, i) => {
            return (
              <li key={i}>
                <a href="#" className=" hover:text-[#EE3235]">
                  {singleLink}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="font-montserrat  hidden lg:flex gap-1 text-[15px] font-bold">
          <button className="p-4 flex justify-center items-center gap-x-2">
            <FaLocationDot color="#EE3235" />
            Singapore
          </button>
          <button className="bg-[#EE3235] text-white px-4 py-1 font-bold rounded-xl">
            Contact Us
          </button>
        </div>
      </header>

      {/* medium screen header */}
      <header className="mob-header flex shadow-lg    justify-between px-5 items-center relative  bg-white w-screen lg:hidden">
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          {!open ? (
            <GiHamburgerMenu size="35" />
          ) : (
            <MdClose  size="35" />
          )}
        </div>
        <div>
          <a href="#">
            <img
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/Scala-Logo-sg-.webp"
              alt="Scala Logo"
              title="Scala Logo-sg"
              // width={200}
              className="w-32 lg:w-56"
            />
          </a>
        </div>
        <div>
          <FaPhoneSquareAlt color="#EE3235" size="35" />
        </div>

        {open && (
          <ul className="flex font-montserrat flex-col text-[#35425C] h-screen gap-5 w-72 bg-white text-[15px] absolute top-14 left-0 pl-4 pt-6 li leading-6 font-medium lg:hidden ">
            {links.map((singleLink, i) => {
              return (
                <li key={i}>
                  <a href="#" className=" hover:text-[#EE3235]">
                    {singleLink}
                  </a>
                </li>
              );
            })}
            <li> <button className=" flex justify-center items-center gap-x-2 ">
              <FaLocationDot />
             <span className="text-black"> Singapore</span> 
            </button></li>
            <li><input type="text" placeholder="Search" className="w-11/12 px-3 border-black border-2 rounded-full p-1 focus:outline-none focus:ring-0" /></li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
