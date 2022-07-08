import { Link } from "@remix-run/react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { NavigationItem } from "./Navigation-Item/Navigation-Item";

const Navigation = () => {
  return (
    <div className=" md:h-full md:w-auto w-full z-50 fixed bottom-0 md:top-0  md:left-8  flex items-center">
      <div
        className="w-screen  md:mx-6 flex-row h-10 md:w-10 justify-between bg-zinc-800 opacity-60 z-50  p-4 box-content  md:rounded-[35px] flex items-center md:flex-col "
      >
        <NavigationItem Icon={AiOutlineHome} />
        <NavigationItem Icon={AiOutlineUser} />
        <NavigationItem Icon={TiGroupOutline} />
        <NavigationItem Icon={BiMessageRoundedDots} />
        <NavigationItem Icon={BsArrowDownCircle} />
      </div>
    </div>
  );
};
export { Navigation };
