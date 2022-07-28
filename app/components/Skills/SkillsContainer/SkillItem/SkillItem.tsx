interface IProps {
  percentageer: number
  title: string
}

function SkillItem({ percentageer, title }: IProps) {
  return (
    <div>
      <div className="mb-3 flex justify-between">
        <span className="text-xl font-semibold text-white"> {title} </span>
        {/* <span className="text-[#BBB9C2]"> {percentageer}%</span> */}
      </div>
      <div className="h-2 w-full rounded bg-violet-300">
        <div
          className="h-full rounded-tl rounded-bl bg-indigo-800"
          style={{ width: percentageer + '%' }}
        ></div>
      </div>
    </div>
  )
}

export { SkillItem }
