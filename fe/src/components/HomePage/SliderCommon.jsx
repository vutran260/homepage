import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/sliderCommon.scss'
import persion from '../../assets/images/persion.png'
import {CardProfile} from "src/components/HomePage/CardProfile.jsx";
import React, {useEffect, useRef, useState} from "react";
import { AnimationInViewToTop } from '../Animation'


export function SliderCommon({data}) {
  const settings = {
    customPaging: function (i) {
      return <span className='dot w-full'></span>
    },
    dots: true,
    // prevArrow: <></>,
    // nextArrow: <></>,
    dotsClass: 'slick-slide-common',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinity: false,

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
          verticalSwiping: true,
          // swipeToSlide: true,
          vertical: true
        }
      }
    ]
  }
  return (
    <>
      <div className='slider-common h-full'>
        {data?.length && (
          <Slider {...settings}>
            {data.map((team) => {
              return (
                  <CardProfile
                    name={team.attributes.name}
                    jobDescription={team.attributes.jobDescription}
                    avatar={team.attributes.avatar.data.attributes.url}
                    experience={team.attributes.experience}
                  />
              )
            })}
          </Slider>
        )}
      </div>
    </>
  )
}