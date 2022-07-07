import { SkillItem } from "./SkillItem/SkillItem";

function SkillsContainer() {
    return (
        <div className="py-12">

        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Css & html" percentageer={90} />
            </div>
            <div className="w-1/2">
                    <SkillItem title="Javascript " percentageer={90}/>
            </div>
     
        </div>
        
        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="React js" percentageer={90}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="next js" percentageer={80}/>
            </div>
     
        </div>
        
        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Bootstrap" percentageer={80}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Tailwind" percentageer={70}/>
            </div>
     
        </div>
        
        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Material ui" percentageer={80}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Ant design" percentageer={70}/>
            </div>
     
        </div>

        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Redux" percentageer={70}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Git" percentageer={80}/>
            </div>
     
        </div>

        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Typescript" percentageer={70}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Python" percentageer={60}/>
            </div>
     
        </div>
        
        </div>
        )

}

export {SkillsContainer};