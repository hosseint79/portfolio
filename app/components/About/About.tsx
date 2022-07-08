import { Link } from "@remix-run/react";
import { BsMouse } from "react-icons/bs";
import Particles from "react-tsparticles";


import { loadFull } from "tsparticles";
import { particleConfig } from "~/lib/configs/particlesjs-config";
import CvButton from "../CvButton/CvButton";

const About = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };


  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-[#110f1c] relative flex  flex-col md:flex-row">
      <Particles
        style={{ position: "absolute" }}
        id="tsparticles"
        init={particlesInit}
        options={{...particleConfig}}
      />

      <div className=" w-full md:p-8 md:w-4/6 z-10 flex justify-end items-center order-2 md:order-1 ">
        <main className=" w-full mx-4 md:w-5/6 relative">
          <div
            style={{ fontFamily: "monospace", fontStyle: "italic" }}
            className="w-full z-10 relative border-2 border-solid  border-white backdrop-blur-[6px] text-white text-xl py-14 px-5 md:px-11"
          >
            I'm a front-end developer located in iran. I love to create simple
            yet beautiful websites with great user experience.
            <br /> <br />
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger. I love to write blogs and read books.
            <br /> <br />I believe everything is an Art when you put your
            consciousness in it. You can connect with me via social links.
            <div className="flex mt-5 justify-end">
              <CvButton text="Download Cv"/>
            </div>
          </div>

          <h1
            className=" text-9xl z-0 absolute font-semibold -top-20 -left-16"
            style={{
              fontFamily: "sans-serif",
              fontSize: "calc(5rem + 5vw)",
              color: "rgba(252,246,244,0.1)",
            }}
          >
            ABOUT
          </h1>
        </main>
      </div>
      <div className="w-full md:w-2/6 flex justify-center items-center z-10 order-1 md:order-2 ">
        <img
          className=" w-64 h-auto animate-wiggle mb-36"
          src="/images/spaceman.png"
        />
      </div>

      <a
        href="#footer"
        className="flex items-center h-auto absolute  z-50 -right-12 bottom-28 p-4 rotate-90 text-white"
      >
        <span className="h-[3px] w-6 border border-white mx-3"> </span>
        <h6>SCROLL DOWN</h6>
        <BsMouse className="ml-2 rotate-90" />
        <span className="h-[3px] w-6 border border-white mx-3"> </span>
      </a>
      
    </div>
  );
};
export { About };
