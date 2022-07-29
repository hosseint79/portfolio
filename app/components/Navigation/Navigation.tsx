import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDownCircle } from 'react-icons/bs'
import { NavigationItem } from './Navigation-Item/Navigation-Item'
import { FiFigma, FiMail, FiPackage } from 'react-icons/fi'

const Navigation = () => {
  return (
    <div className=" fixed bottom-0 z-50 flex w-full items-center lg:top-0 lg:left-8 lg:h-full lg:w-auto">
      <div className="z-50  box-content flex h-10 w-screen flex-row items-center justify-around bg-zinc-800 p-4 opacity-90 lg:mr-6 lg:h-auto lg:w-10 lg:flex-col lg:rounded-[35px]">
        <NavigationItem Icon={AiOutlineHome} go="about" />
        <NavigationItem Icon={FiPackage} go="skills" />
        <NavigationItem Icon={FiMail} go="contact" />
        <NavigationItem Icon={FiFigma} go="projects" />
        <NavigationItem Icon={BsArrowDownCircle} go="footer" />
      </div>
    </div>
  )
}
export { Navigation }
