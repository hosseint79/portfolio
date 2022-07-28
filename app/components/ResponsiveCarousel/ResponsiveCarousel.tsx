import React from 'react'

const ResponsiveCarousel = () => {
        return (
                <div className="flex flex-no-wrap overflow-auto">
                        <div className="w-4/5 flex-shrink-0 mr-3 ">
                                <img
                                        src="/images/works/work1.png"
                                        className="w-full h-auto rounded-lg"
                                />
                        </div>
                        <div className="w-4/5 flex-shrink-0 mr-3">
                                <img
                                        src="/images/works/work2.png"
                                        className="w-full h-auto rounded-lg"
                                />
                        </div>
                        <div className="w-4/5 flex-shrink-0 mr-3">
                                <img
                                        src="/images/works/work3.png"
                                        className="w-full h-auto rounded-lg"
                                />
                        </div>
                </div>
        )
}

export {ResponsiveCarousel}
