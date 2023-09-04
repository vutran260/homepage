import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/clientFeedback.scss'
import Rec37 from '../../assets/images/Rectangle37.png'


import http from '../../utils/http'
import { AnimationInViewToTop, AnimationOpacity } from '../Animation'
import CustomArrow from '../CustomArrow'


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
      return <span className='dot'></span>
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '65px',
        }
      }
    ]
  }
  return (
    <div className='section-nine section-ten section wrap-clientFeedback heightSection relative flex flex-col'>
      <div className='wrap-textFeedback pb-20'>
        <AnimationInViewToTop>
          <div className='text-Feedback flex justify-center text-white'>Feedback</div>
        </AnimationInViewToTop>
        <AnimationInViewToTop>
          <h2 className='title textLarge flex justify-center text-white'>Client Voices</h2>
        </AnimationInViewToTop>
      </div>
        <AnimationOpacity className='wrap-person text-white'>
          {data.length && (
            <Slider {...settings}>
              {data?.map((fb) => {
                return (
                  <FeedBackItem fb={fb} key={fb.id} />
                )
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

  return (
    <div className='person'>
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
