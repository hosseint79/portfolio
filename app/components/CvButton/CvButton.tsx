export function CvButton({ text = '' }) {
  return (
    <a download href="/resume/resume.pdf">
      <span className="text-[#BBB9C2]cursor-pointer cvBtn relative cursor-pointer border border-[#BBB9C2] py-3 px-5">
        {text}
        <div className=" cvBtnAnimation absolute -top-2 -left-2 h-3 w-3 rounded-full"></div>
      </span>
    </a>
  )
}

export default CvButton
