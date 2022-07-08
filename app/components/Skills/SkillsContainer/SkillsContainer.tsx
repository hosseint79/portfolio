import { SkillItem } from "./SkillItem/SkillItem";

function SkillsContainer() {
    return (
        <div className="py-12">

        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
            <div className="md:w-1/2">
                    <SkillItem title="Css & html" percentageer={90} />
            </div>
            <div className="md:w-1/2">
                    <SkillItem title="Javascript " percentageer={90}/>
            </div>
     
        </div>
        
        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">    
            <div className="md:w-1/2">
                    <SkillItem title="React js" percentageer={90}/>
            </div>
            <div className="md:w-1/2">
                    <SkillItem title="next js" percentageer={80}/>
            </div>
     
        </div>
        
        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">    
            <div className="md:w-1/2">
                    <SkillItem title="Bootstrap" percentageer={80}/>
            </div>
            <div className="md:w-1/2">
                    <SkillItem title="Tailwind" percentageer={70}/>
            </div>
     
        </div>
        
        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">    
            <div className="md:w-1/2">
                    <SkillItem title="Material ui" percentageer={80}/>
            </div>
            <div className="md:w-1/2">
                    <SkillItem title="Ant design" percentageer={70}/>
            </div>
     
        </div>

        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">    
            <div className="md:w-1/2">
                    <SkillItem title="Redux" percentageer={70}/>
            </div>
            <div className="md:w-1/2">
                    <SkillItem title="Git" percentageer={80}/>
            </div>
     
        </div>

        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">    
            <div className="md:w-1/2">
                    <SkillItem title="Typescript" percentageer={70}/>
            </div>
            <div className="md:w-1/2">
                    <SkillItem title="Python" percentageer={60}/>
            </div>
     
        </div>
        
        </div>
        )

}

export {SkillsContainer};