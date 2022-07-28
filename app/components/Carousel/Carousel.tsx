import React from 'react'

import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import {
  SiCss3,
  SiLeaflet,
  SiMaterialui,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import CarouselContainer from './CarouselContainer/CarouselContainer'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { ResponsiveCarousel } from '../ResponsiveCarousel/ResponsiveCarousel'

export const slides = [
  {
    key: 11,
    content: (
      <CarouselContainer
        url="https://erp.sabak.org/"
        image="/images/works/work1.png"
        listItems={[
          {
            animation: 'moveInRight',
            icon: <SiRedux size={52} color="#17d6d7" />,
            text: 'Redux',
            id: '1',
          },
          {
            animation: 'moveInLeft',
            icon: <DiReact size={52} color="#17d6d7" />,
            text: 'React',
            id: '2',
          },
          {
            animation: 'moveInRight',
            icon: <BsFillBootstrapFill size={52} color="#17d6d7" />,
            text: 'Bootstrap',
            id: '2',
          },
          {
            animation: 'moveInLeft',
            icon: <SiTypescript size={52} color="#17d6d7" />,
            text: 'Typescript',
            id: '1',
          },
          {
            animation: 'moveInUp',
            icon: <SiCss3 size={52} color="#17d6d7" />,
            text: 'Css',
            id: '2',
          },
          {
            animation: 'moveInUp',
            icon: <SiLeaflet size={52} color="#17d6d7" />,
            text: 'Leaflet',
            id: '2',
          },
        ]}
      />
    ),
  },
  {
    key: 33,
    content: (
      <CarouselContainer
        url="https://navaa.co/"
        image="/images/works/work3.png"
        listItems={[
          {
            animation: 'moveInRight',
            icon: <SiRedux size={52} color="#17d6d7" />,
            text: 'Redux',
            id: '1',
          },
          {
            animation: 'moveInLeft',
            icon: <DiReact size={52} color="#17d6d7" />,
            text: 'React',
            id: '2',
          },
          {
            animation: 'moveInRight',
            icon: <SiNextdotjs size={52} color="#17d6d7" />,
            text: 'Next js',
            id: '2',
          },
          {
            animation: 'moveInLeft',
            icon: <SiTypescript size={52} color="#17d6d7" />,
            text: 'Typescript',
            id: '1',
          },
          {
            animation: 'moveInUp',
            icon: <SiCss3 size={52} color="#17d6d7" />,
            text: 'Css',
            id: '2',
          },
          {
            animation: 'moveInUp',
            icon: <SiMaterialui size={52} color="#17d6d7" />,
            text: 'Material Ui',
            id: '2',
          },
        ]}
      />
    ),
  },

  {
    key: 22,
    content: (
      <CarouselContainer
        url="https://zeemind.ir/"
        image="/images/works/work2.png"
        listItems={[
          {
            animation: 'moveInRight',
            icon: <SiRedux size={52} color="#17d6d7" />,
            text: 'Redux',
            id: '1',
          },
          {
            animation: 'moveInLeft',
            icon: <DiReact size={52} color="#17d6d7" />,
            text: 'React',
            id: '2',
          },
          {
            animation: 'moveInRight',
            icon: <SiNextdotjs size={52} color="#17d6d7" />,
            text: 'Next js',
            id: '2',
          },
          {
            animation: 'moveInLeft',
            icon: <SiTypescript size={52} color="#17d6d7" />,
            text: 'Typescript',
            id: '1',
          },
          {
            animation: 'moveInUp',
            icon: <SiCss3 size={52} color="#17d6d7" />,
            text: 'Css',
            id: '2',
          },
          {
            animation: 'moveInUp',
            icon: <SiMaterialui size={52} color="#17d6d7" />,
            text: 'Material Ui',
            id: '2',
          },
        ]}
      />
    ),
  },
]

function TdCarousel() {
  return (
    <div id="projects" className="overflow-hidden">
      <Container>
        <SectionHeader title="Projects" caption="Some of my projects" />
        <div>
          <div className="block lg:hidden">
            <ResponsiveCarousel />
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
