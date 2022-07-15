import { Link } from "@remix-run/react";
import { BsMouse } from "react-icons/bs";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";

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
        options={{ ...particleConfig }}
      />

      <div className=" w-full md:p-8 md:w-4/6 z-10 flex justify-end items-center order-2 md:order-1 ">
        <main className=" w-full mx-4 md:w-5/6 relative">
          <h1
            className="text-[4rem] md:text-[7.2rem] z-0 md:absolute font-semibold -top-20 -left-16"
            style={{
              fontFamily: "sans-serif",
              //fontSize: "",
              color: "rgba(252,246,244,0.1)",
            }}
          >
            ABOUT
          </h1>
          <div
            style={{ fontFamily: "monospace", fontStyle: "italic" }}
            className="w-full z-10 relative border-2 border-solid  border-white backdrop-blur-[6px] text-white text-xl py-14 px-5 md:px-11"
          >
            Talented and experienced{" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Front-end Developer")
                  .pauseFor(500)
                  .deleteAll(2)
                  .changeDelay(100)
                  .typeString("with <b>+4</b> years of experience")
                  .start();
              }}
            />{" "}
            executing with a plethora of diverse skills.
            <br /> <br />
            Equipped with a record of success in consistently identifying and
            providing the technological needs of companies through ingenious
            innovation.
            <br /> <br />
            Proficient in developing and creating user interfaces, writing and
            testing codes, troubleshooting simple/complex issues, and
            implementing new features based on user feedback.
            <div className="flex mt-6 justify-end">
              <CvButton text="Download Cv" />
            </div>
          </div>
        </main>
      </div>
      <div className="w-full md:w-2/6 flex justify-center items-center z-10 order-1 md:order-2 ">
        <img
          className=" w-64 h-auto animate-wiggle mb-20 md:mb-36"
          src="/images/spaceman.png"
        />
      </div>

      <a
        href="#footer"
        className="md:flex items-center h-auto absolute  z-50 -right-12 bottom-28 p-4 rotate-90 text-white hidden "
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
