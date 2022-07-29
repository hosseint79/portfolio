interface IProps {
  count: string
  firstTitle: string
  secondTitle: string
}
function ShortInfoItem({ count, firstTitle, secondTitle }: IProps) {
  return (
    <div className="mx-3 text-center sm:mx-5 md:mx-16">
      <h5 className="text-base font-semibold md:text-2xl">{count}+</h5>
      <h6 className="text-sm text-[#BBB9C2] md:text-xl">{firstTitle}</h6>
      <h6 className="text-sm text-[#BBB9C2] md:text-lg">{secondTitle}</h6>
    </div>
  )
}

export { ShortInfoItem }
