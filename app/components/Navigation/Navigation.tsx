import { AiOutlineHome } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";
import { NavigationItem } from "./Navigation-Item/Navigation-Item";
import { FiFigma, FiMail, FiPackage } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className=" md:h-full md:w-auto w-full z-50 fixed bottom-0 md:top-0  md:left-8  flex items-center">
      <div
        className="w-screen  md:mx-6 flex-row h-10 md:h-auto md:w-10 justify-between bg-zinc-800 opacity-60 z-50  p-4 box-content  md:rounded-[35px] flex items-center md:flex-col "
      >
        <NavigationItem Icon={AiOutlineHome} go="about"/>
        <NavigationItem Icon={FiPackage} go="skills"/>
        <NavigationItem Icon={FiMail} go="contact"/>
        <NavigationItem Icon={FiFigma} go="projects"/>
        <NavigationItem Icon={BsArrowDownCircle} go="footer"/>
      </div>
    </div>
  );
};
export { Navigation };
