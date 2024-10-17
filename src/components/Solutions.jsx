import React from "react";
import Heading from "./Heading";
import SolutionCard from "./SolutionCard";
import SingleButtton from "./SingleButtton";

const Solutions = () => {
  return (
    <main className="my-2">
      <div className="logos flex flex-wrap my-20 md:my-44 gap-4 lg:gap-8 justify-center items-center font-montserrat text-[#666] text-sm font-semibold md:text-xl">
        <div className="flex flex-col w-32 md:w-40">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-1.jpg.webp"
            alt="Scala Content Manager"
          />
          <p className="cursor-pointer  text-center">Content manager</p>
        </div>

        <div className="flex flex-col  w-32 md:w-40">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-2.jpg.webp"
            alt="Scala Designer"
          />
          <p className="cursor-pointer  text-center">Designer</p>
        </div>
        <div className="flex flex-col  w-32 sm:w-40">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Card-img-3-1.jpg.webp"
            alt="Scala Media Players"
          />
          <p className="cursor-pointer text-center">Media Players</p>
        </div>
        <div className="flex flex-col  w-32 sm:w-40">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-4.jpg.webp"
            alt="LinQ Tablet"
          />
          <p className="cursor-pointer text-center">All-in-One Tablets</p>
        </div>
        <div className="flex flex-col  w-32 sm:w-40">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-5.jpg.webp"
            alt="LINQ Shelf edge"
          />
          <p className="cursor-pointer text-center">Shelf Edge Displays</p>
        </div>
        <div className="flex flex-col  w-32 sm:w-40">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/card-img-6.jpg.webp"
            alt="Digital Signage SaaS"
          />
          <p className="cursor-pointer text-center">SaaS</p>
        </div>
      </div>

      <section className="solution-section">
        <Heading txt="Solution for every industry" />
        <div className="hidden  md:flex justify-center items-center gap-4 mt-11">
          <SolutionCard
            imageAddres="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/Industries-image-1-sg.jpg.webp"
            title="QSR"
            descripton="Drive customer engagement and sales and create an immers."
          />
          <SolutionCard
            imageAddres="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/Industries-image-1-sg.jpg.webp"
            title="Retail"
            descripton="Streamline ordering and boost sales with dynamic digital menu boards."
          />
          <SolutionCard
            imageAddres="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/Industries-image-1-sg.jpg.webp"
            title="Transportation"
            descripton="Create better passenger experiences with real-time updates and engaging content."
          />
        </div>

        <div className="flex justify-center items-center md:hidden">
          <div className="w-64 sm:w-80 rounded">
            <img
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/Industries-image-1-sg.jpg.webp"
              alt="Retail Digital Signage"
              className="object-cover w-full"
            />
          </div>
        </div>

        {/* <div className='flex justify-center items-center my-4'> */}
        <SingleButtton txt="View all industries" />
        {/* </div> */}
      </section>
    </main>
  );
};

export default Solutions;
