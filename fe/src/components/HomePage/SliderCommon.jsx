import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/sliderCommon.scss'
import persion from '../../assets/images/persion.png'
import {CardProfile} from "src/components/HomePage/CardProfile.jsx";
import React, {useEffect, useRef, useState} from "react";


export function SliderCommon({data}) {
  const settings = {
    customPaging: function (i) {
      return <span className="dot w-full"></span>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
    dotsClass: 'slick-slide-common  h-full',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          verticalSwiping: true,
          swipeToSlide: true,
          vertical: true,
        }
      }
    ]
  }
  return (
    <>
      <div className='slider-common h-full'>
        <Slider {...settings}>
          {data.map((team) => {
            return (
              <CardProfile key={team.id}
               name={team.attributes.name} 
               jobDescription={team.attributes.jobDescription} 
               avatar={team.attributes.avatar.data.attributes.url} 
               experience={team.attributes.experience}
               />
            )
          })}
        </Slider>
      </div>
    </>
  )
}