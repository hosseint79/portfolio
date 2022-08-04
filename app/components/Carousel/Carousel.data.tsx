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
import CarouselContainer from './CarouselContainer/CarouselContainer'
import { BsFillBootstrapFill } from 'react-icons/bs'

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
        image="/images/works/work3.jpg"
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
