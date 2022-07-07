



import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";


function SocialMedia() {
    return (  
        <div className="flex my-14">
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full hover:bg-slate-600">
                <a href="https://github.com/hosseint79" target="__blank"><TiSocialGithub size={50}/></a>
               
            </div>
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full hover:bg-green-700">
       
               <a href="https://api.whatsapp.com/send?phone=09397233907" target="__blank"><BsWhatsapp size={30}/></a>
                
            </div>
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87] duration-500 rounded-full hover:bg-blue-600">
                <BsLinkedin size={27}/>
            </div>
            <div className="p-1 w-16 h-16 flex items-center justify-center mx-1 bg-[#0b172f87]  duration-500 rounded-full hover:bg-red-700">
                
                <a href="mailto:hossein.w7979@gmail.com" target="__blank"><AiOutlineMail size={27}/></a>
            </div>
        </div>
    );
}

export  {SocialMedia};