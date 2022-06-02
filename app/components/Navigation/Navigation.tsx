import { Link } from "@remix-run/react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { NavigationItem } from "./Navigation-Item/Navigation-Item";

const Navigation = () => {
  return (
    <div className=" h-full z-50 fixed top-0 left-8 flex items-center">
      <div
        className=" w-10 bg-black opacity-60 z-50  p-4 box-content  rounded-[35px] flex items-center flex-col
    
    "
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
