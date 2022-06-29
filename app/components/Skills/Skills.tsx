import { Container } from "../common/Container/Container";
import {HeaderSection} from "./HeaderSection/HeaderSection";
import { ShortInfo } from "./ShortInfo/ShortInfo";
import { SkillsContainer } from "./SkillsContainer/SkillsContainer";

function Skills() {
    return ( 
        <section className="w-full my-6">
            <HeaderSection />
            <Container>
                <ShortInfo />
                <SkillsContainer />
            </Container>      
        </section>
     );
}

export {Skills};