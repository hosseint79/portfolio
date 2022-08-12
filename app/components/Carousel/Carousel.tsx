import React from 'react'

import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { ResponsiveCarousel } from '../ResponsiveCarousel/ResponsiveCarousel'
import { slides } from './Carousel.data'

const projectImages = [
  {
    src: '/images/works/work1.jpg',
  },
  {
    src: '/images/works/work2.jpg',
  },
  {
    src: '/images/works/work3.jpg',
  },
]

function TdCarousel() {
  return (
    <div id="projects" className="lg:mb-40">
      <Container>
        <SectionHeader title="Projects" caption="Some of my projects" />
        <div>
          <div className="block lg:hidden">
            <ResponsiveCarousel slides={projectImages} />
          </div>
          <div className="threeD-carousel-button relative hidden h-[240px] px-4 md:h-[400px] md:px-16 lg:block ">
            <Carousel
              slides={slides}
              goToSlide={1}
              offsetRadius={2}
              showNavigation={true}
              animationConfig={config.gentle}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TdCarousel
