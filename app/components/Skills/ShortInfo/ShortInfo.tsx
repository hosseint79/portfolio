import { homePageData } from '~/lib/data/home-page.data'
import { ShortInfoItem } from './ShortInfoItem/ShortInfoItem'

function ShortInfo() {
  return (
    <div className="flex items-center justify-center text-white">
      <ShortInfoItem
        count={homePageData.skills.YearsExperience}
        firstTitle="Years"
        secondTitle="experience"
      />
      <ShortInfoItem
        count={homePageData.skills.CompletedProjects}
        firstTitle="Completed"
        secondTitle="projects"
      />

      <ShortInfoItem
        count={homePageData.skills.CompaniesWorked}
        firstTitle="Companies"
        secondTitle="worked"
      />
    </div>
  )
}

export { ShortInfo }
