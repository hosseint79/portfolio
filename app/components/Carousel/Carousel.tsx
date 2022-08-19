import React from 'react'
import { config } from 'react-spring'
import Carousel from 'react-spring-3d-carousel'
import { InView } from 'react-intersection-observer'
import { Container } from '../common/Container/Container'
import { useNavigationContext } from '../Layout/Layout/Layout'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { responsiveSlides, slides } from '../../lib/data/Carousel.data'
import { ResponsiveCarousel } from '../ResponsiveCarousel/ResponsiveCarousel'

function TdCarousel() {
  const { setActiveNavigation } = useNavigationContext()

  return (
    <InView
      as="div"
      onChange={inView => {
        setActiveNavigation(prev => {
          return prev.map((item, index) => {
            return index === 3 ? inView : item
          })
        })
      }}
    >
      <div id="projects" className="lg:mb-40">
        <Container>
          <SectionHeader title="Projects" caption="Some of my projects" />
          <div>
            <div className="block lg:hidden">
              <ResponsiveCarousel slides={responsiveSlides} />
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
    </InView>
  )
}

export default TdCarousel
