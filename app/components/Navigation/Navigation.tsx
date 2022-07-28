import {AiOutlineHome} from 'react-icons/ai'
import {BsArrowDownCircle} from 'react-icons/bs'
import {NavigationItem} from './Navigation-Item/Navigation-Item'
import {FiFigma, FiMail, FiPackage} from 'react-icons/fi'

const Navigation = () => {
  return (
    <div className=" lg:h-full lg:w-auto w-full z-50 fixed bottom-0 lg:top-0  lg:left-8  flex items-center">
      <div className="w-screen  lg:mr-6 flex-row h-10 lg:h-auto lg:w-10 justify-around bg-zinc-800 opacity-90 z-50  p-4 box-content  lg:rounded-[35px] flex items-center lg:flex-col ">
        <NavigationItem Icon={AiOutlineHome} go="about" />
        <NavigationItem Icon={FiPackage} go="skills" />
        <NavigationItem Icon={FiMail} go="contact" />
        <NavigationItem Icon={FiFigma} go="projects" />
        <NavigationItem Icon={BsArrowDownCircle} go="footer" />
      </div>
    </div>
  )
}
export {Navigation}
