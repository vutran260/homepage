import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/clientFeedback.scss'
import Rec37 from '../../assets/images/Rectangle37.png'
import Rec39 from '../../assets/images/Rectangle39.png'


import ButtonGoDown from "src/components/Button";
import http from '../../utils/http'


const ClientFeedback = () => {
  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`feedbacks?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])
  console.log('datafb',data)
  const settings = {
    customPaging: function (i) {
      return <span className='dot'></span>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
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
          initialSlide: 2,
          centerMode: true,
          centerPadding: '65px',
          infinite: false,
        }
      }
    ]
  }
  return (
    <div className='section-nine section-ten section wrap-clientFeedback heightSection relative flex flex-col'>
      <div className='wrap-textFeedback pb-20'>
        <div className='text-Feedback flex justify-center text-white'>Feedback</div>
        <h2 className='title textLarge flex justify-center text-white'>Client Voices</h2>
      </div>
      <div className='wrap-person text-white'>
        <Slider {...settings}>
          {data?.map((fb) => {
            return (
              <div className='person' key={fb.id}>
                <img className='overlay h-full' src={Rec37} alt='' />
                <p className='fs-14 '>{fb.attributes.description}</p>
                <div className='avatar flex gap-4 items-center mt-5'>
                  <div className='left'>
                    <img
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
          })}
        </Slider>
      </div>
      <div className='ButtonGoDown'>
        <ButtonGoDown target='Contact Us' />
      </div>
    </div>
  )
}

export default ClientFeedback
