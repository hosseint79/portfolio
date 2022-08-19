import CvButton from '~/components/CvButton/CvButton'
import Typewriter from 'typewriter-effect'
import { homePageData } from '~/lib/data/home-page.data'

function AboutMeText() {
  return (
    <div className="container z-10 order-2 mx-auto flex w-full items-center justify-end p-4 md:p-6 lg:order-1 lg:w-4/6 lg:p-8 ">
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
                  .typeString(homePageData.aboutmeTitle)
                  .start()
              }}
            />
          </span>
          <p
            dangerouslySetInnerHTML={{
              __html: homePageData.aboutmeText,
            }}
          ></p>
          <div className="mt-10 flex justify-end">
            <CvButton text="Download Cv" />
          </div>
        </div>
      </main>
    </div>
  )
}

export { AboutMeText }
