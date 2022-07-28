interface IProps {
  percentageer: number
  title: string
}

function SkillItem({percentageer, title}: IProps) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <span className="text-white text-xl font-semibold"> {title} </span>
        {/* <span className="text-[#BBB9C2]"> {percentageer}%</span> */}
      </div>
      <div className="bg-violet-300 w-full h-2 rounded">
        <div
          className="bg-indigo-800 h-full rounded-tl rounded-bl"
          style={{width: percentageer + '%'}}
        ></div>
      </div>
    </div>
  )
}

export {SkillItem}
