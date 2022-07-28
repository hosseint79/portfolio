import { Link } from '@remix-run/react'
import { BsMouse } from 'react-icons/bs'
import Particles from 'react-tsparticles'
import Typewriter from 'typewriter-effect'

import { loadFull } from 'tsparticles'
import { particleConfig } from '~/lib/configs/particlesjs-config'
import CvButton from '../CvButton/CvButton'

const About = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-b from-black via-black  to-[#110f1c] md:flex-row">
      <Particles
        style={{ position: 'absolute' }}
        id="tsparticles"
        init={particlesInit}
        options={{ ...particleConfig }}
      />

      <div className=" z-10 order-2 flex w-full items-center justify-end md:order-1 md:w-4/6 md:p-8 ">
        <main className=" relative mx-4 w-full md:w-5/6">
          <h1
            className="-top-20 -left-16 z-0 text-[4rem] font-semibold md:absolute md:text-[7.2rem]"
            style={{
              fontFamily: 'sans-serif',
              //fontSize: "",
              color: 'rgba(252,246,244,0.1)',
            }}
          >
            ABOUT
          </h1>
          <div
            style={{
              fontFamily: 'monospace',
              fontStyle: 'italic',
            }}
            className="relative z-10 w-full border-2 border-solid  border-white py-14 px-5 text-xl text-white backdrop-blur-[6px] md:px-11"
          >
            <span className="text-2xl font-bold italic text-cyan-800">
              <Typewriter
                onInit={(typewriter: any) => {
                  typewriter
                    .changeDelay(100)
                    .typeString("I'm Hossein Talebi")
                    .start()
                }}
              />
            </span>
            Talented and experienced Front-end Developer with <b>+4</b> years of
            experience executing with a plethora of diverse skills.
            <br /> <br />
            Equipped with a record of success in consistently identifying and
            providing the technological needs of companies through ingenious
            innovation.
            <br /> <br />
            Proficient in developing and creating user interfaces, writing and
            testing codes, troubleshooting simple/complex issues, and
            implementing new features based on user feedback.
            <div className="mt-6 flex justify-end">
              <CvButton text="Download Cv" />
            </div>
          </div>
        </main>
      </div>
      <div className="z-10 order-1 flex w-full items-center justify-center md:order-2 md:w-2/6 ">
        <img
          className=" mb-20 h-auto w-64 animate-wiggle md:mb-36"
          src="/images/spaceman.png"
        />
      </div>

      <a
        href="#footer"
        className="absolute -right-12 bottom-28 z-50  hidden h-auto rotate-90 items-center p-4 text-white md:flex "
      >
        <span className="mx-3 h-[3px] w-6 border border-white"> </span>
        <h6>SCROLL DOWN</h6>
        <BsMouse className="ml-2 rotate-90" />
        <span className="mx-3 h-[3px] w-6 border border-white"> </span>
      </a>
    </div>
  )
}
export { About }
