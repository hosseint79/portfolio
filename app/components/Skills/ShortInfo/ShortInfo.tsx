import { ShortInfoItem } from './ShortInfoItem/ShortInfoItem'

function ShortInfo() {
  return (
    <div className="flex items-center justify-center text-white">
      <ShortInfoItem count={'04'} firstTitle="Years" secondTitle="experience" />
      <ShortInfoItem
        count={'05'}
        firstTitle="Completed"
        secondTitle="projects"
      />

      <ShortInfoItem count={'02'} firstTitle="Companies" secondTitle="worked" />
    </div>
  )
}

export { ShortInfo }
