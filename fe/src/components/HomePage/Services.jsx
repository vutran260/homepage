import React, { useEffect, useRef, useState } from 'react'
import serviceUIUXData from 'src/assets/jsons/serviceUIUX.json'
import 'src/scss/components/services.scss'
import Slider from 'react-slick'

import http from 'src/utils/http'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { ButtonGradient, ButtonNormal } from 'src/components/Button/index.js'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import NextIcon from 'src/components/Icon/NextIcon/index.jsx'
import PreviousArrow from 'src/components/CustomArrow/PreviousArrow.jsx'
import NextArrow from 'src/components/CustomArrow/NextArrow.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import LottieAnimation from 'src/components/LottieAnimation/index.jsx'

export function Services() {
  const sliderRef = useRef(null)

  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`services?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

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
          slidesToShow: 2,
          prevArrow: false,
          nextArrow: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '30px',
          prevArrow: false,
          nextArrow: false
        }
      }
    ]
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <div className='wrap-services page-container bg-dark-1'>
      <div className='pb-4 text-center'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='私たちの仕事' className='text-3xl' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1}>
            <h2 className='mt-2 text-4xl md:text-6xl'>当社のサービス</h2>
          </AnimationFadeInUp>
        </div>
        <AnimationFadeInUp shouldAnimate={true} index={2} className='mx-auto mt-4 w-[80%] md:w-[50%]'>
          <p className='text-whiteGray-600 md:text-2xl'>
            クリエイティブ × プランニング ×
            エンジニアリング企画戦略・デザイン・開発・保守まで、ITに関するあらゆる課題に対応
          </p>
        </AnimationFadeInUp>
      </div>
      <AnimationFadeInUp shouldAnimate={true} index={3} className='wrap-sliderServices w-full'>
        {data.length && (
          <Slider ref={sliderRef} {...settings} className='overflow-hidden'>
            {data?.map((service, i) => {
              return (
                <div key={service.id}>
                  <div className='h-[400px] rounded-2xl border border-solid border-darkGray-600 bg-gradient-green p-4 md:h-[500px] md:p-8'>
                    <div className='relative flex h-full flex-col'>
                      {/* Content container with adjusted padding for mobile button */}
                      <div className='flex flex-col pb-16 md:pb-0'>
                        <span className='mb-2 text-3xl font-bold text-white md:mb-4'>{service.attributes.title}</span>
                        <p className='z-10 text-base font-normal text-white opacity-60 line-clamp-[10] md:text-xl md:leading-[34px] md:line-clamp-none'>
                          {service.attributes.description}
                        </p>
                        {/* Button for desktop view */}
                        <ButtonGradient
                          className='z-10 mt-2 hidden w-full md:mt-10 md:flex md:w-[160px]'
                          height={50}
                          radius={16}
                          fontSize={20}
                        >
                          続きを読む
                        </ButtonGradient>
                      </div>

                      {/* Button for mobile view - fixed at bottom */}
                      <ButtonGradient
                        className='absolute bottom-0 left-1/2 z-10 w-[200px] -translate-x-1/2 md:hidden'
                        height={50}
                        radius={16}
                        fontSize={20}
                      >
                        続きを読む
                      </ButtonGradient>

                      {/* Image container */}
                      <div className='absolute bottom-0 right-0 z-0 w-full opacity-20 md:w-1/2 md:opacity-100'>
                        <LottieAnimation animationData={serviceUIUXData} className='h-auto w-full' />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        )}
      </AnimationFadeInUp>
      <AnimationFadeInUp shouldAnimate={true} index={4}>
        <div className='mt-4 flex justify-center gap-2 pb-2 lg:hidden'>
          <ButtonNormal width={60} height={60} radius={30} onClick={handlePrev}>
            <PrevIcon />
          </ButtonNormal>
          <ButtonGradient width={60} height={60} radius={30} onClick={handleNext}>
            <NextIcon />
          </ButtonGradient>
        </div>
      </AnimationFadeInUp>
    </div>
  )
}
