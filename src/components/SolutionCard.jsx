import React from "react";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";

const SolutionCard = ({
  title = "no name",
  imageAddres = "https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Industry-Home-Page-Image/Industries-image-1-sg.jpg.webp",
  descripton = "not availaable",
}) => {
  return (
    <div className="font-montserrat max-w-md rounded-xl overflow-hidden  bg-white">
      <img
        decoding="async"
        src={imageAddres}
        data-ll-status="loaded"
        className="rounded-3xl object-cover p-4"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[#EE3235]  lg:text-2xl md:text-xl mb-2">
          {title}
        </div>
        <p className="text-[#666666] font-medium text-base"> {descripton} </p>
      </div>
      <div className="px-3 pt-4 pb-2">
        <button className="text-[#EE3235] font-bold px-4 py-2 flex justify-center gap-2 items-center">
          Learn More <MdKeyboardDoubleArrowRight color="#EE3235" />
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
