import React from "react";
import SingleButtton from "./SingleButtton";
import Heading from "./Heading";
import SolutionCard from "./SolutionCard";

const Featured = () => {
  return (
    <section className="bg-[#F4F5F9] py-10">
      <Heading txt="Featured Solutions" />
      <div className="hidden  md:flex justify-center items-center gap-8 mt-11">
        <SolutionCard
          imageAddres="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/videowall.webp"
          title="Video Walls"
          descripton="Create impressive, high impact displays that capture attention, engage customers and drive foot traffic"
        />
        <SolutionCard
          imageAddres="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/interactivekiosk.webp"
          title="Interactive Kiosk"
          descripton="Create and deploy fully interactive experiences to engage customers, gather insights and drive sales."
        />
        <SolutionCard
          imageAddres="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/FIDS.webp"
          title="FIDS"
          descripton="Make the airport experience seamless and improve operational efficiency with real-time flight information and updates."
        />
      </div>
      <div className="flex justify-center items-center md:hidden">
        <div className="w-64 sm:w-80 rounded">
          <img
            src="hhttps://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/FIDS.webp"
            alt="Retail Digital Signage"
            className="object-cover w-full"
          />
        </div>
      </div>
      <div className="my-16">
        <SingleButtton txt="View all Solutions" />
      </div>
    </section>
  );
};

export default Featured;
