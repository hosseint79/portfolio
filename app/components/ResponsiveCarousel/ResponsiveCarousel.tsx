import React from 'react'

const ResponsiveCarousel = () => {
  return (
    <div className="flex-no-wrap flex overflow-auto">
      <div className="mr-3 w-4/5 flex-shrink-0 ">
        <img
          src="/images/works/work1.png"
          className="h-auto w-full rounded-lg"
        />
      </div>
      <div className="mr-3 w-4/5 flex-shrink-0">
        <img
          src="/images/works/work2.png"
          className="h-auto w-full rounded-lg"
        />
      </div>
      <div className="mr-3 w-4/5 flex-shrink-0">
        <img
          src="/images/works/work3.png"
          className="h-auto w-full rounded-lg"
        />
      </div>
    </div>
  )
}

export { ResponsiveCarousel }
