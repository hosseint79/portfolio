import { SkillItem } from "./SkillItem/SkillItem";

function SkillsContainer() {
    return (
        <div>

        <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Css & html" percentageer={90}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Javascript & html" percentageer={80}/>
            </div>
     
        </div>
        
          <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Css & html" percentageer={90}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Javascript & html" percentageer={80}/>
            </div>
     
        </div>
        
          <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Css & html" percentageer={90}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Javascript & html" percentageer={80}/>
            </div>
     
        </div>
        
          <div className="my-8 gap-16 px-16 flex">
            <div className="w-1/2">
                    <SkillItem title="Css & html" percentageer={90}/>
            </div>
            <div className="w-1/2">
                    <SkillItem title="Javascript & html" percentageer={80}/>
            </div>
     
        </div>
        
        </div>
        )

}

export {SkillsContainer};