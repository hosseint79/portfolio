import { BsMouse } from 'react-icons/bs'

function ScrollDown() {
  return (
    <a
      href="#footer"
      className="absolute -right-12 bottom-28 z-50  hidden h-auto rotate-90 items-center p-4 text-white lg:flex "
    >
      <span className="mx-3 h-[3px] w-6 border border-white"> </span>
      <h6>SCROLL DOWN</h6>
      <BsMouse className="ml-2 rotate-90" />
      <span className="mx-3 h-[3px] w-6 border border-white"> </span>
    </a>
  )
}

export { ScrollDown }
