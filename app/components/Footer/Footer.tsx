import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" h-[400px] text-white mt-64 flex flex-col  items-center text-xl font-light"
    >
      <span className="my-5">That's all</span>
      <a href="#home">
        <h2 className=" flex flex-col items-center justify-center ">
          <BsMouse className="mb-5" size={27} /> - scroll up -
        </h2>
      </a>
    </div>
  );
};

export { Footer };
