import React from 'react'
import {
  SiCss3,
  SiLeaflet,
  SiMaterialui,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import CarouselContainer from '../../components/Carousel/CarouselContainer/CarouselContainer'
import { BsFillBootstrapFill } from 'react-icons/bs'

export const responsiveSlides = [
  {
    src: '/images/works/work1.jpg',
    url: 'https://erp.sabak.org/',
  },
  {
    src: '/images/works/work2.jpg',
    url: 'https://zeemind.ir/',
  },
  {
    src: '/images/works/work4.png',
    url: 'https://skinpedia.ir/',
  },
]

export const slides = [
  {
    key: 11,
    content: (
      <CarouselContainer
        url="https://erp.sabak.org/"
        image="/images/works/work1.jpg"
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
            id: '3',
          },
          {
            animation: 'moveInLeft',
            icon: <SiTypescript size={52} color="#17d6d7" />,
            text: 'Typescript',
            id: '4',
          },
          {
            animation: 'moveInUp',
            icon: <SiCss3 size={52} color="#17d6d7" />,
            text: 'Css',
            id: '5',
          },
          {
            animation: 'moveInUp',
            icon: <SiLeaflet size={52} color="#17d6d7" />,
            text: 'Leaflet',
            id: '6',
          },
        ]}
      />
    ),
  },
  {
    key: 33,
    content: (
      <CarouselContainer
        url="https://skinpedia.ir/"
        image="/images/works/work4.png"
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
            id: '3',
          },
          {
            animation: 'moveInLeft',
            icon: <SiTypescript size={52} color="#17d6d7" />,
            text: 'Typescript',
            id: '4',
          },
          {
            animation: 'moveInUp',
            icon: <SiCss3 size={52} color="#17d6d7" />,
            text: 'Css',
            id: '5',
          },
          {
            animation: 'moveInUp',
            icon: <SiMaterialui size={52} color="#17d6d7" />,
            text: 'Material Ui',
            id: '6',
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
        image="/images/works/work2.jpg"
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
            id: '3',
          },
          {
            animation: 'moveInLeft',
            icon: <SiTypescript size={52} color="#17d6d7" />,
            text: 'Typescript',
            id: '4',
          },
          {
            animation: 'moveInUp',
            icon: <SiCss3 size={52} color="#17d6d7" />,
            text: 'Css',
            id: '5',
          },
          {
            animation: 'moveInUp',
            icon: <SiMaterialui size={52} color="#17d6d7" />,
            text: 'Material Ui',
            id: '6',
          },
        ]}
      />
    ),
  },
]
