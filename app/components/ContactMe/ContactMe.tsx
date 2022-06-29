import { FiPhone } from "react-icons/fi";
import { Container } from "../common/Container/Container";


function ContactMe() {
    return (  
        <Container>
            <div className=" grid gap-6 py-8 grid-cols-5">
                 <div className="col-span-2 ">
                    <div className="flex items-center text-white">
                        
                        <FiPhone size={28} className="mx-4"/>
                        
                        <div>
                            <h5 className="font-bold text-lg mb-[2px]">
                               Call Me
                            </h5>
                            <h6>
                                09397233907
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    ads
                </div>
            </div>
        </Container>

    );
}

export  {ContactMe};