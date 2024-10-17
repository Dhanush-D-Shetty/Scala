import React from "react";
import SingleButtton from "./SingleButtton";
import Heading from "./Heading";

const About = () => {
  return (
    <section className="my-10">
      <div className="About-section bg-[#F4F5F9] pt-10">
        <Heading txt="About Scala" />
        <div className="text-[#666]  font-montserrat text-center px-4 text-sm md:text-lg font-semibold lg:px-72 leading-5 md:leading-8">
          <p className="">
            Scala, a STRATACACHE company, partners with brands across many
            industries to help transform their customer experience with smart
            marketing technology and digital signage.
          </p>{" "}
          <br />
          <p>
            Scala provides the platform to easily create and centrally manage
            deployment of digital experiences, while retaining the flexibility
            to adapt to local business conditions and audience preferences in
            real time.
          </p>{" "}
          <br />
          <p>
            With 30 years’ experience, Scala is well-known for its innovation
            and leveraging best-of-breed technologies to create solutions that
            are easy-to-use, flexible and infinitely customizable.
          </p>
        </div>
        <div className="mt-14 pb-10">
          <SingleButtton txt="Connect with Us" />
        </div>
      </div>
      <div className="flex  font-montserrat justify-center items-center mt-20">
        <div className="relative overflow-hidden pb-9/16 w-full max-w-4xl mx-10 ">
          <iframe
            className="absolute top-0 left-0 w-full h-3/4"
            src="https://www.youtube.com/embed/YeagYrGT-oE?si=DVtNzp-JB95P1265"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </div>

      <div className="logos lg:-mt-32">
        <Heading txt="Why work with Scala?" />

        <div className="logos-desktop hidden md:flex flex-wrap my-20 gap-6 justify-center items-center font-montserrat text-[#9294A3] font-semibold text-xl">
          <div className="flex flex-col">
            <img
              decoding="async"
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Digital-Signs-sg.jpg.webp"
              alt="Scala Digital Signs"
              title="Scala Digital Signs"
              class="perfmatters-lazy entered pmloaded"
              data-src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Digital-Signs-sg.jpg.webp"
              data-ll-status="loaded"
            />
            <p className="font-bold text-6xl  mt-10 mb-4  text-center">3.1M</p>
            <p className="text-black lg:text-sm text-center"> Digital Signs</p>
          </div>
          <div className="flex flex-col">
            <img
              decoding="async"
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Employees-Worldwide-sg.jpg.webp"
              alt="Scala Employees Worldwide"
              title="Scala Employees Worldwide"
              class="perfmatters-lazy entered pmloaded"
              data-src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Employees-Worldwide-sg.jpg.webp"
              data-ll-status="loaded"
            />
            <p className="font-bold text-6xl   mt-10 mb-4  text-center">
              1000+
            </p>
            <p className="text-black lg:text-sm text-center">
              Employees Worldwide
            </p>
          </div>

          <div className="flex flex-col">
            <img
              decoding="async"
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Countries-Represented-sg.webp"
              alt="Scala Countries Represented"
              title="Countries Represented-sg"
              class="perfmatters-lazy entered pmloaded"
              data-src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Countries-Represented-sg.webp"
              data-ll-status="loaded"
            />
            <p className="font-bold text-6xl   mt-10 mb-4  text-center">100+</p>
            <p className="text-black lg:text-sm text-center">
              Countries Represented
            </p>
          </div>

          <div className="flex flex-col">
            <img
              decoding="async"
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Offices-sg.jpg.webp"
              alt="Scala Countries Represented"
              title="Scala Countries Represented"
              class="perfmatters-lazy entered pmloaded"
              data-src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Offices-sg.jpg.webp"
              data-ll-status="loaded"
            />
            <p className="font-bold text-6xl   mt-10 mb-4   text-center">28</p>
            <p className="text-black lg:text-sm text-center">Offices</p>
          </div>

          <div className="flex flex-col">
            <img
              decoding="async"
              src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Languages-sg.jpg.webp"
              alt="Scala Countries Represented"
              title="Scala Countries Represented"
              class="perfmatters-lazy entered pmloaded"
              data-src="https://stgenpdsg1.sg-sin1.upcloudobjects.com/stgencntsg/apac-scala-sg/Sg-home-images/Languages-sg.jpg.webp"
              data-ll-status="loaded"
            />
            <p className="font-bold text-6xl  mt-10 mb-4   text-center">23</p>
            <p className="text-black lg:text-sm text-center"> Languages</p>
          </div>
        </div>

        <div className="m-10 p-4 py-6 flex font-montserrat  rounded-3xl justify-center gap-10 sm:gap-32 items-center md:hidden bg-[#F1F2F4]">
          <ul className="flex flex-col gap-3 font-bold list-none text-black text-start justify-start items-start  text-xl">
            <li>3.1 M</li>
            <li>1000+</li>
            <li>100+</li>
            <li>28</li>
            <li>23</li>
          </ul>
          <ul className="flex flex-col justify-start  text-sm text-[#666] gap-5">
            <li>Digital Signs</li>
            <li>Employees Worldwide</li>
            <li>Countries Represented</li>
            <li>Offices</li>
            <li>Languages</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
