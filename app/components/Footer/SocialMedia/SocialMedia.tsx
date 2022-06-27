



import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";


function SocialMedia() {
    return (  
        <div className="flex my-14">
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full hover:bg-slate-600">
                <TiSocialGithub size={50}/>
            </div>
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full hover:bg-green-700">
                <BsWhatsapp size={30}/>
            </div>
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full hover:bg-blue-600">
                <BsLinkedin size={27}/>
            </div>
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87]  duration-500 rounded-full hover:bg-red-700">
                <AiOutlineMail size={27}/>
            </div>
        </div>
    );
}

export  {SocialMedia};