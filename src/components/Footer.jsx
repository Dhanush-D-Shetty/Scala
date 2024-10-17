import React from "react";
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlineMailOutline} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative font-montserrat bg-[#2B2E37]  text-[#C0C1C3] py-5">
      <img
        className="absolute w-32 -top-[50px]  right-8  md:w-60  md:-top-24 md:right-16 "
        src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/CMS-Lets-talk.webp"
        alt="CMS Lets talk"
        data-src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/HeaderFooterImages/CMS-Lets-talk.webp"
      />

      <div className=" flex flex-col  md:flex-row justify-evenly pt-12">
        <div className="left flex-col ">
          <div className="flex justify-center text-center md:justify-normal  md:text-left ">
            <ul>
              <img
                src="public/Scala-footer-logo.webp"
                alt="scala footer logo "
                className="md:w-full w-32 mx-auto"
              />
              <h2 className="md:text-lg text-sm  font-semibold mt-3 py-1">APAC Headquarters</h2>
              <li className="md:text-sm text-xs font-[500] py-1">Keck Seng Tower</li>
              <li className="md:text-sm text-xs font-[500] py-1">133 Cecil Street,</li>
              <li className="md:text-sm text-xs font-[500] py-1">#04-02</li>
              <li className="md:text-sm text-xs font-[500] py-1">Singapore 069535</li>
              <li className="md:text-sm text-xs font-[500]  p-1 cursor-pointer  flex justify-center items-center gap-2">
                <MdOutlineMailOutline />
                <a href="mailto:sales.apac@scala.com"> sales.apac@scala.com</a>
              </li>
              <li className="md:text-sm text-xs font-[500]  p-1 cursor-pointer flex justify-center items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:+6565094235">+65 6509 4235</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex justify-evenly items-center mt-3 gap-2 lg:gap-20">
          <div className=" text-center">
            <ul>
              <h2 className="text-base md:text-lg font-semibold cursor-pointer  p-1 ">
                Industries
              </h2>
              <li className="text-sm font-[500] cursor-pointer  p-1 pt-2">
                Wendy's
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">KIA</li>
              <li className="text-sm font-[500] cursor-pointer  p-1">
                Carrrefour
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">more</li>
            </ul>
          </div>
          <div className="text-center gap-10 ">
            <ul>
              <h2 className="text-base md:text-lg font-semibold cursor-pointer  p-1 pt-2">
                Case Studies
              </h2>
              <li className="text-sm font-[500] cursor-pointer  p-1">
                Wendy's
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">KIA</li>
              <li className="text-sm font-[500] cursor-pointer  p-1">
                Carrefour
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">more</li>
            </ul>
          </div>
          <div className="text-center  ">
            <ul>
              <h2 className="text-base md:text-lg font-semibold cursor-pointer  p-1 pt-2">
                Solutions
              </h2>
              <li className="text-sm font-[500] cursor-pointer  p-1">
                Lift 7 Learn
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">
                Place & Learn
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">
                Wayfinding
              </li>
              <li className="text-sm font-[500] cursor-pointer  p-1">more</li>
            </ul>
          </div>
          <div className=" text-center flex  ">
            <ul>
              <h2 className=" text-base md:text-lg font-semibold cursor-pointer p-1 pt-2">
                Resources
              </h2>
              <li className="text-sm font-[500] cursor-pointer p-1">Blogs</li>
              <li className="text-sm font-[500] cursor-pointer p-1">
                Digital Signage FAQ
              </li>
              <li className="text-sm font-[500] cursor-pointer p-1">
                Donloads
              </li>
              <li className="text-sm font-[500] cursor-pointer p-1">
                Partners
              </li>
              <li className="text-sm font-[500] cursor-pointer p-1">
                About Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 md:my-16">
        <h1 className="flex justify-center items-center text-sm md:text-xl font-semibold gap-3">
          <FaLocationDot />
          Singapore
        </h1>
        <h2 className="my-4 md:text-lg text-xs font-semibold px-4">
          Copyright © 2024 Scala. All rights reserved. Privacy Policy | Cookies
          | Sitemap
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
