import React from "react";
import {FaPlayCircle} from "react-icons/fa";

const Landing = () => {
  return (
    <main>
      <section className="hidden lg:block relative font-montserrat top-20 overflow-hidden">
        <div className="right absolute z-10 top-48 left-20">
          <h1 className="text-3xl font-semibold leading-none">
            TRANSFORM YOUR DIGITAL <br /> SIGNAGE EXPERIENCE
          </h1>
          <p className="text-lg font-medium mt-3">
            Captivate your audience with seamless content delivery <br /> and
            centralised, smart content management.
          </p>

          <div className="buttons flex gap-3 mt-4">
            <button className="bg-[#EE3235] hover:bg-[#b44749] px-4 py-1 rounded-full text-white font-semibold text-xs">
              Broucher
            </button>
            <button className=" rounded-full font-bold text-xs border border-black px-4 py-1 flex justify-center items-center gap-2">
              Overview <FaPlayCircle color="#EE3235" />
            </button>
          </div>
        </div>
        <video
          src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/videos/Home-banner-desktop.mp4"
          autoPlay
          muted></video>
      </section>

      <section className="mob-landPage relative block w-full  top-6 font-montserrat overflow-hidden  lg:hidden">
        <video
          className="w-full overflow-hidden"
          src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/videos/Home-page-mob-banner-video.mp4"
          autoPlay
          muted></video>
        <div className="absolute top-2/3  text-xl md:text-3xl font-bold text-center">
          <h1 className="w-full text-center p-5">
            Endless possibilities to reinvent your digital experience
          </h1>
          <button className="bg-[#EE3235] px-4 py-3 rounded-lg text-white font-bold text-xs">
            {" "}
            Download Broucher
          </button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
