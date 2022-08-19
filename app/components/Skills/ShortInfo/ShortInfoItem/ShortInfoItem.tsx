interface IProps {
  secondTitle: string
  firstTitle: string
  count: string
}
function ShortInfoItem({ count, firstTitle, secondTitle }: IProps) {
  return (
    <div className="mx-3 mb-5 text-center sm:mx-5 lg:mx-16">
      <h5 className="text-lg font-semibold lg:text-xl">{count}</h5>
      <h6 className="text-sm text-[#BBB9C2] ">{firstTitle}</h6>
      <h6 className="text-sm text-[#BBB9C2] ">{secondTitle}</h6>
    </div>
  )
}

export { ShortInfoItem }
