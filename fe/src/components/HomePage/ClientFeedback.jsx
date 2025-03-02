import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'src/scss/components/clientFeedback.scss'

import http from 'src/utils/http'
import { AnimationFadeInUp } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import PreviousArrow from 'src/components/CustomArrow/PreviousArrow.jsx'
import NextArrow from 'src/components/CustomArrow/NextArrow.jsx'
import NavigationButtons from 'src/components/NavigationButtons/index.jsx'

const ClientFeedback = () => {
  const [data, setData] = useState([])
  const sliderRef = useRef(null)
  const fetchPortfolios = async () => {
    const res = await http.get(`feedbacks?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  const settings = {
    customPaging: function (i) {
      const activeItem = data[i]
      return (
        <div className='!h-[42px] !w-[42px] '>
          <img
            src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${activeItem?.attributes?.avatar?.data?.attributes?.url}`}
            className='h-full w-full rounded-3xl'
          />
        </div>
      )
    },
    dots: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    dotsClass: 'slick-slide-feedback',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
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
          centerPadding: '10px',
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
    <div className='wrap-clientFeedback page-container bg-light-2'>
      <div className='center pb-4 md:pb-5'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='フィードバック' className='text-3xl' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1}>
            <h2 className='page-title mt-2'>クライアントの声</h2>
          </AnimationFadeInUp>
        </div>
      </div>
      <AnimationFadeInUp shouldAnimate={true} index={2} className='wrap-sliderClientFb wrap-person md:px-10'>
        {data.length && (
          <Slider ref={sliderRef} {...settings} className='overflow-hidden'>
            {data?.map((fb) => {
              return <FeedBackItem fb={fb} key={fb.id} />
            })}
          </Slider>
        )}
      </AnimationFadeInUp>
      <AnimationFadeInUp shouldAnimate={true} index={3} className='mt-5 flex justify-center gap-2 pb-2 lg:hidden'>
        <NavigationButtons onNext={handleNext} onPrev={handlePrev} />
      </AnimationFadeInUp>
    </div>
  )
}

export default ClientFeedback

const FeedBackItem = ({ fb }) => {
  return (
    <div className='person relative h-[400px] rounded-3xl border border-solid border-[#181818] bg-[#060606] p-6'>
      <div
        className='h-[calc(100%-60px)] overflow-y-auto'
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: '#333333 #060606' }}
      >
        <p className='relative whitespace-pre-line text-lg md:text-xl'>{fb.attributes.description}</p>
      </div>
      <div className='avatar absolute bottom-2 flex items-center gap-4 pr-[20px] md:pr-0'>
        <div className='left'>
          <img
            className='h-[42px] w-[42px] rounded-full'
            src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${fb.attributes.avatar.data?.attributes.url}`}
            alt=''
          />
        </div>
        <div className='right'>
          <div className='text-blueCustom-100'>{fb.attributes.nameFeedback}</div>
          <p className='text-base text-whiteGray-500'>{fb.attributes.company}</p>
        </div>
      </div>
    </div>
  )
}
