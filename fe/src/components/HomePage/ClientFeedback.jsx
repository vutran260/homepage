import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/clientFeedback.scss'

import http from '../../utils/http'
import { AnimationOpacity } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import PrevIconV2 from 'src/components/Icon/PrevIconV2/index.jsx'
import NextIconV2 from 'src/components/Icon/NextIconV2/index.jsx'
import { ButtonGradient, ButtonNormal } from 'src/components/Button/index.js'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import NextIcon from 'src/components/Icon/NextIcon/index.jsx'

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
          centerPadding: '20px',
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
    <div className='wrap-clientFeedback heightSection relative flex flex-col pt-6'>
      <div className='flex justify-center pb-4 md:pb-10'>
        <div className='flex flex-col justify-center text-center'>
          <div className='wap-textLan-space w-full'>
            <div>
              <FlexibleGradient text='フィードバック' className='text-3xl' />
            </div>
            <div className='mt-2'>
              <span className='text-4xl text-white md:text-6xl'>クライアントの声</span>
            </div>
          </div>
        </div>
      </div>
      <AnimationOpacity className='wrap-sliderClientFb wrap-person text-white md:px-10'>
        {data.length && (
          <Slider ref={sliderRef} {...settings} className=' overflow-hidden'>
            {data?.map((fb) => {
              return <FeedBackItem fb={fb} key={fb.id} />
            })}
          </Slider>
        )}
        <div className='mt-5 flex justify-center gap-2 pb-2 lg:hidden'>
          <ButtonNormal width={60} height={60} radius={30} onClick={handlePrev}>
            <PrevIcon />
          </ButtonNormal>
          <ButtonGradient width={60} height={60} radius={30} onClick={handleNext}>
            <NextIcon />
          </ButtonGradient>
        </div>
      </AnimationOpacity>
    </div>
  )
}

export default ClientFeedback

const FeedBackItem = ({ fb }) => {
  return (
    <div className='person relative h-[400px] rounded-3xl border border-solid border-[#181818] bg-[#060606] p-4'>
      {/* Content container with scroll */}
      <div
        className='h-[calc(100%-60px)] overflow-y-auto'
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: '#333333 #060606' }}
      >
        <p className='relative whitespace-pre-line text-lg md:text-xl'>{fb.attributes.description}</p>
      </div>

      {/* Avatar section (unchanged) */}
      <div className='avatar absolute bottom-5 mt-5 flex items-center gap-4'>
        <div className='left'>
          <img
            className='max-h-[48px] max-w-[48px] rounded-full'
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

const PreviousArrow = (props) => (
  <button {...props} className='slick-arrow slick-prev' aria-label='Previous'>
    <PrevIconV2 />
  </button>
)

const NextArrow = (props) => (
  <button {...props} className='slick-arrow slick-next' aria-label='Next'>
    <NextIconV2 />
  </button>
)
