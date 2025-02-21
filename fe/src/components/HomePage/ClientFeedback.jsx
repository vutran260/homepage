import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/clientFeedback.scss'
import Rec37 from '../../assets/images/Rectangle37.png'

import http from '../../utils/http'
import { AnimationInViewToTop, AnimationOpacity } from '../Animation'
import CustomArrow from '../CustomArrow'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'

const ClientFeedback = () => {
  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`feedbacks?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])
  const settings = {
    customPaging: function (i) {
      let currentIndex
      if (i + 1 === data.length) {
        currentIndex = 0
      } else {
        currentIndex = i + 1
      }
      const activeItem = data[currentIndex]
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
    nextArrow: <CustomArrow transform='rotate(-90deg)' />,
    prevArrow: <CustomArrow transform='rotate(90deg)' />,
    dotsClass: 'slick-slide-feedback',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          centerPadding: '65px'
        }
      }
    ]
  }
  return (
    <div className='section-ten section wrap-clientFeedback heightSection relative flex flex-col'>
      <div className='flex justify-center pb-10'>
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
      <AnimationOpacity className='wrap-person text-white'>
        {data.length && (
          <Slider {...settings}>
            {data?.map((fb) => {
              return <FeedBackItem fb={fb} key={fb.id} />
            })}
          </Slider>
        )}
      </AnimationOpacity>
    </div>
  )
}

export default ClientFeedback

const FeedBackItem = ({ fb }) => {
  const [showMore, setShowMore] = useState(false)
  const containerRef = useRef(null)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const getDescription = () => {
    if (showMore) {
      return fb.attributes.description // Hiển thị toàn bộ nội dung
    } else {
      return fb.attributes.description.length > 200
        ? fb.attributes.description.slice(0, 200) + '...'
        : fb.attributes.description // Hiển thị nội dung ngắn hoặc đầy đủ
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowMore(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='person' ref={containerRef}>
      <img className='overlay h-full' src={Rec37} alt='' />
      <p className='whitespace-pre-line'>{getDescription()}</p>
      {fb.attributes.description.length > 200 && <button onClick={toggleShowMore}>{showMore ? '縮小' : '続く'}</button>}
      <div className='avatar mt-5 flex items-center gap-4'>
        <div className='left'>
          <img
            className='max-h-[48px] max-w-[48px] rounded-full'
            src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${fb.attributes.avatar.data?.attributes.url}`}
            alt=''
          />
        </div>
        <div className='right'>
          <div className='text-orange'>{fb.attributes.nameFeedback}</div>
          <p className='fs-14'>{fb.attributes.company}</p>
        </div>
      </div>
    </div>
  )
}
