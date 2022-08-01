import { particleConfig } from '~/lib/configs/particlesjs-config'
import { AboutMeText } from './AboutMeText/AboutMeText'
import { ScrollDown } from './ScrollDown/ScrollDown'
import { SpaceMan } from './SpaceMan/SpaceMan'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const About = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <div className="bg-gradient-to-b from-black via-black to-[#110f1c]">
      <div className="relative mx-auto flex min-h-screen w-full  flex-col lg:flex-row 2xl:w-[1536px]">
        <Particles
          style={{ position: 'absolute' }}
          id="tsparticles"
          init={particlesInit}
          options={{ ...particleConfig }}
        />

        <SpaceMan />
        <AboutMeText />
        <ScrollDown />
      </div>
    </div>
  )
}
export { About }
