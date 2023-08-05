import React, {useEffect, useRef, useState} from 'react'
import graphicDesign1 from '../../assets/images/graphic-design1.png'
import "../../scss/components/services.scss"
import Slider from 'react-slick'

import ButtonGoDown from "src/components/Button";
import http from '../../utils/http';

export function Services() {
  const myRef = useRef(null);
  const preventDefault = (e) => {
    e.preventDefault();
    return false;
  }

  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`services?populate=*`)
    setData(res.data.data)
  }
  console.log(data);

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
    customPaging: function (i) {
      return <span className='dot w-full'></span>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    // infinite: true,
    // dotsClass: 'slick-slide-feedback',
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
    <div className='wrap-services heightSection relative'>
      <div className='wrapTitle pb-8 pl-2 text-center'>
        <div className='wap-textLan-space w-full'>
          <span className='mb-3 flex flex-col text-white'>What we do</span>
          <span className='textLarge text-white'>Our services</span>
        </div>
        <div className='textIpad mx-auto mt-[10px] w-[70%] text-center'>
          <p className='text-white'>
            クリエイティブ × プランニング ×
            エンジニアリング企画戦略・デザイン・開発・保守まで、ITに関するあらゆる課題に対応
          </p>
        </div>
      </div>
      <div className='flex'>
        {/* <div className="w-1/2 flex items-center justify-center wrap-imgHand">
          <img src={hand} alt=""/>
        </div> */}
        <div className='wrap-sliderServices w-full' ref={myRef}>
          {data.length && (
            <Slider {...settings}>
              {data?.map((service, i) => {
                return (
                  <div key={service.id} className='relative h-fit ease-linear'>
                    <div className='backgroundLinear w-full'></div>
                    <div className='mb-8 flex flex-col'>
                      <img className='icon mb-5 h-9 w-9 opacity-40' src={graphicDesign1} alt='' />
                      <span className='fontText mb-4 font-bold text-orange opacity-40'>{service.attributes.title}</span>
                      <p className='text-font font-normal text-white opacity-40'>{service.attributes.description}</p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          )}
        </div>
      </div>
      <div className='ButtonGoDown'>
        <ButtonGoDown target='Value' />
      </div>
    </div>
  )
}
