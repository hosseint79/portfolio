import {HeaderSection} from "./HeaderSection/HeaderSection";
import { ShortInfo } from "./ShortInfo/ShortInfo";
import { SkillsContainer } from "./SkillsContainer/SkillsContainer";

function Skills() {
    return ( 
        <section className="w-full my-6">
            <HeaderSection />
            <div className="container m-auto  ">
                <ShortInfo />
                <SkillsContainer />
            </div>
        </section>
     );
}

export {Skills};