import Typewriter from 'typewriter-effect'
import CvButton from '~/components/CvButton/CvButton'

function AboutMeText() {
  return (
    <div className=" z-10 order-2 flex w-full items-center justify-end p-4 md:p-6 lg:order-1 lg:w-4/6 lg:p-8 ">
      <main className=" relative w-full lg:w-5/6">
        <h1
          className="-top-20 -left-16 z-0 text-[3.5rem] font-semibold  text-[rgba(243,240,240,0.32)] lg:absolute lg:text-[7.2rem] lg:text-[rgba(243,240,240,0.13)]"
          style={{
            fontFamily: 'sans-serif',
          }}
        >
          ABOUT
        </h1>
        <div
          style={{
            fontFamily: 'monospace',
            fontStyle: 'italic',
          }}
          className="relative z-10 w-full border-2 border-solid border-white  px-4 py-14 text-base text-white backdrop-blur-[6px] lg:px-11 lg:text-xl"
        >
          <span className="text-lg font-bold italic text-cyan-800 lg:text-2xl">
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
          testing codes, troubleshooting simple/complex issues, and implementing
          new features based on user feedback.
          <div className="mt-10 flex justify-end">
            <CvButton text="Download Cv" />
          </div>
        </div>
      </main>
    </div>
  )
}

export { AboutMeText }
