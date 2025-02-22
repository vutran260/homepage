import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/sliderCommon.scss'
import { CardProfile } from 'src/components/HomePage/CardProfile.jsx'
import React, { useRef } from 'react'
import PrevIconV2 from 'src/components/Icon/PrevIconV2/index.jsx'
import NextIconV2 from 'src/components/Icon/NextIconV2/index.jsx'
import { ButtonGradient, ButtonNormal } from 'src/components/Button/index.js'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import NextIcon from 'src/components/Icon/NextIcon/index.jsx'

export function SliderCommon({ data }) {
  const sliderRef = useRef(null)

  const settings = {
    nextArrow: <PreviousArrow />,
    prevArrow: <NextArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinity: false,
    centerMode: true,
    centerPadding: '60px',
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
          swipeToSlide: true,
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
    <>
      <div className='slider-common h-full'>
        {data?.length && (
          <Slider ref={sliderRef} {...settings}>
            {data.map((team, index) => {
              return (
                <CardProfile
                  name={team.attributes.name}
                  jobDescription={team.attributes.jobDescription}
                  avatar={team.attributes.avatar.data?.attributes.url}
                  experience={team.attributes.experience}
                  technologies={team.attributes.technologies}
                  key={index}
                />
              )
            })}
          </Slider>
        )}
        <div className='mt-4 flex justify-center gap-2 pb-2 lg:hidden'>
          <ButtonNormal width={60} height={60} radius={30} onClick={handlePrev}>
            <PrevIcon />
          </ButtonNormal>
          <ButtonGradient width={60} height={60} radius={30} onClick={handleNext}>
            <NextIcon />
          </ButtonGradient>
        </div>
      </div>
    </>
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
