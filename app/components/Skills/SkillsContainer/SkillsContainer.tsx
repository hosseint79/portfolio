import { homePageData } from '~/lib/data/home-page.data'
import { SkillItem } from './SkillItem/SkillItem'

function SkillsContainer() {
  return (
    <div className="py-2">
      <div className="my-8 flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-0 lg:px-16">
        {homePageData.skills.items.map(item => {
          return (
            <div className=" md:w-1/2 md:p-5">
              <SkillItem title={item.title} percentageer={item.percentageer} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { SkillsContainer }
