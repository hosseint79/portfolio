import {HeaderSection} from "./HeaderSection/HeaderSection";
import { ShortInfo } from "./ShortInfo/ShortInfo";

function Skills() {
    return ( 
        <section className="w-full my-6">
            <HeaderSection />
            <div className="container m-auto  ">
                <ShortInfo />
            </div>
        </section>
     );
}

export {Skills};