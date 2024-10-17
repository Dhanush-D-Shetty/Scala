import React from "react";

const Blog = () => {
  return (
    <div className="">
      {/* buttons */}
      <div className="font-montserrat flex justify-center gap-3 sm:gap-8 items-center my-20 font-bold">
        <button className="bg-[#EE3235] text-white text-xs px-3 md:px-12 py-2 md:text-sm font-bold rounded-full">
          Submit
        </button>
        <button className="bg-[#F2EFF4] text-xs  px-3 py-2  md:px-12  font-bold rounded-full md:text-sm">
          Case Study
        </button>
        <button className="bg-[#F2EFF4] text-xs px-3 py-2 font-bold md:px-12 rounded-full md:text-sm">
          Events
        </button>
        <button className="bg-[#F2EFF4] text-xs px-3 py-2 font-bold md:px-12 rounded-full md:text-sm">
          News
        </button>
      </div>

      {/* cards */}

      <div class="md:max-w-xl mx-5 -mt-8 md:mx-auto bg-[#F4F5F9] shadow-lg rounded-2xl  overflow-hidden flex flex-row p-1 sm:p-4  mb-12 font-montserrat">
        <div class="w-1/2">
          <img
            src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/Blogs/What-is-a-Digital-Signage-Media-Player-A-Comprehensive-GuideImage-1-thumbnail.webp"
            alt="Card Image"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div class=" px-2 sm:px-7 md:w-2/3">
          <h3 class="text-base   leading-4 font-semibold text-gray-900">
            What is a Digital Signage Media Player? A Comprehensive Guide
          </h3>
          <p class="text-[#666] font-medium my-3">by Scala Team</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
