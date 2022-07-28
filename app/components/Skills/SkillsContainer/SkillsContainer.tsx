import {SkillItem} from './SkillItem/SkillItem'

function SkillsContainer() {
        return (
                <div className="py-12">
                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="CSS"
                                                percentageer={90}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Javascript "
                                                percentageer={90}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="React JS"
                                                percentageer={90}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Next JS"
                                                percentageer={80}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Bootstrap"
                                                percentageer={80}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Tailwind"
                                                percentageer={70}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Material UI"
                                                percentageer={80}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Ant Design"
                                                percentageer={70}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Redux"
                                                percentageer={70}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Git"
                                                percentageer={80}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Typescript"
                                                percentageer={70}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="HTML"
                                                percentageer={90}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Sass"
                                                percentageer={80}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Remix"
                                                percentageer={60}
                                        />
                                </div>
                        </div>

                        <div className="my-8 md:gap-16 gap-10 md:px-16 flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Styled components"
                                                percentageer={70}
                                        />
                                </div>
                                <div className="md:w-1/2">
                                        <SkillItem
                                                title="Webpack"
                                                percentageer={60}
                                        />
                                </div>
                        </div>
                </div>
        )
}

export {SkillsContainer}
