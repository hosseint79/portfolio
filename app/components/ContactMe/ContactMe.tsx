import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";


function ContactMe() {
    return (  
        <Container>
            <SectionHeader title="Contact Me" caption="Get in touch"/>
            <div className=" grid gap-6 py-8 grid-cols-5 px-16" >
                 <div className="col-span-2 ">
                    <div className="flex items-center text-white mb-6">
                        
                        <FiPhone size={30} className="mx-4 text-indigo-600"  />
                        
                        <div>
                            <h5 className="font-bold text-lg mb-[2px]">
                               Call Me
                            </h5>
                            <h6>
                                09397233907
                            </h6>
                        </div>
                    </div>
                      <div className="flex items-center text-white mb-6">
                        
                        <AiOutlineMail size={30} className="mx-4 text-indigo-600"  />
                        
                        <div>
                            <h5 className="font-bold text-lg mb-[2px]">
                               Email
                            </h5>
                            <h6>
                                hossein.w7979@gmail.com
                            </h6>
                        </div>
                    </div>
                      <div className="flex items-center text-white mb-6">
                        
                        <TiLocation size={33} className="mx-4 text-indigo-600"  />
                        
                        <div>
                            <h5 className="font-bold text-lg mb-[2px]">
                               Location
                            </h5>
                            <h6>
                                iran - sari
                            </h6>
                        </div>
                    </div>
                 </div>
                <div className="col-span-3 ">
                    <div className="flex">
                        <div className="w-full md:w-1/2 px-3 ">
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-[#211D35] text-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#312d42c8] border-[#211D35] border-2 focus:border-[#443d6c]" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-[#211D35] text-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#312d42c8] border-[#211D35] border-2 focus:border-[#443d6c]" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>                     
                    </div>
                    <div className="w-full px-3 mt-5">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <textarea className="h-52 appearance-none block w-full bg-[#211D35] text-gray-400 rounded p-3 px-4 leading-tight focus:outline-none focus:bg-[#312d42c8] border-[#211D35] border-2 focus:border-[#443d6c]" id="grid-last-name"  placeholder="Doe" />
                    </div>                     
                </div>
                
            </div>
        </Container>

    );
}

export  {ContactMe};