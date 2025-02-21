import React, { useEffect, useRef, useState } from 'react'
import serviceUIUX from 'src/assets/images/serviceUIUX.png'
import bgServiceUIUX from 'src/assets/images/bgServiceUIUX.png'
import bgService from 'src/assets/images/bgService.png'
import '../../scss/components/services.scss'
import Slider from 'react-slick'

import http from '../../utils/http'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { ButtonGradient } from 'src/components/Button/index.js'
import PrevIconV2 from 'src/components/Icon/PrevIconV2/index.jsx'
import NextIconV2 from 'src/components/Icon/NextIconV2/index.jsx'

export function Services() {
  const myRef = useRef(null)
  const preventDefault = (e) => {
    e.preventDefault()
    return false
  }

  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`services?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  // useEffect(() => {
  //     const element = myRef.current
  //     element.addEventListener('touchmove', preventDefault, {passive: false})
  //     return () => {

  //       element.removeEventListener('touchmove', preventDefault, {passive: false});

  //     }
  //   }
  //   , []);
  const settings = {
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '30px'
        }
      }
    ]
  }

  return (
    <div
      className='wrap-services heightSection bg-black relative bg-center bg-no-repeat md:bg-cover'
      style={{ backgroundImage: `url(${bgService})` }}
    >
      <div className='wrapTitle pt-8 pb-4 pl-2 text-center'>
        <div className='wap-textLan-space w-full'>
          <div>
            <FlexibleGradient text='私たちの仕事' className='text-3xl' />
          </div>
          <div className='mt-2'>
            <span className='text-4xl text-white md:text-6xl'>当社のサービス</span>
          </div>
        </div>
        <div className='mx-auto mt-4 w-[80%] text-center text-2xl md:w-[50%]'>
          <p className='text-whiteGray-600'>
            クリエイティブ × プランニング ×
            エンジニアリング企画戦略・デザイン・開発・保守まで、ITに関するあらゆる課題に対応
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='wrap-sliderServices w-full px-16' ref={myRef}>
          {data.length && (
            <Slider {...settings}>
              {data?.map((service, i) => {
                return (
                  <div key={service.id}>
                    <div
                      className='h-[500px] rounded-2xl border border-solid border-darkGray-600 bg-cover bg-center bg-no-repeat p-4 md:p-8'
                      style={{ backgroundImage: `url(${bgServiceUIUX})` }}
                    >
                      <div className='relative h-full'>
                        <div className='mb-8 flex flex-col'>
                          <span className='mb-2 text-3xl font-bold text-white md:mb-4'>{service.attributes.title}</span>
                          <p className='z-10 text-base font-normal text-white opacity-60 md:text-xl md:leading-[34px]'>
                            {service.attributes.description}
                          </p>
                          <ButtonGradient
                            className='z-10 mt-2 w-full md:mt-10 md:w-[160px]'
                            height={50}
                            radius={16}
                            fontSize={20}
                          >
                            続きを読む
                          </ButtonGradient>
                          <div className='absolute bottom-0 right-0 z-0 w-full md:w-1/2'>
                            <img src={serviceUIUX} alt='serviceUIUX' className='h-auto w-full' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  )
}

const PreviousArrow = (props) => (
  <button {...props} className='slick-arrow slick-prev left-[-15px] z-10' aria-label='Previous'>
    <PrevIconV2 />
  </button>
)

const NextArrow = (props) => (
  <button {...props} className='slick-arrow slick-next right-[-10px] z-10' aria-label='Next'>
    <NextIconV2 />
  </button>
)
