import React, {useEffect, useRef, useState} from 'react'
import hand from "../../assets/images/hand.svg"
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


  useEffect(() => {
      const element = myRef.current
      element.addEventListener('touchmove', preventDefault, {passive: false})
      return () => {

        element.removeEventListener('touchmove', preventDefault, {passive: false});

      }
    }
    , []);
  const settings = {
    customPaging: function (i) {
      return <></>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
    dotsClass: '',
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    infinite: true,
  }

  return (

    <div className="wrap-services relative heightSection">
      <div className="flex justify-between pb-8 pl-2 wrapTitle">
        <div className="w-1/3 wap-textLan-space">
          <span className="text-white flex flex-col mb-3">What we do</span><span className="textLarge text-white">Our services</span>
        </div>
        <div className="flex items-center w-2/3 textIpad">
          <p className="text-white">クリエイティブ × プランニング × エンジニアリング企画戦略・デザイン・開発・保守まで、ITに関するあらゆる課題に対応</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center wrap-imgHand">
          <img src={hand} alt=""/>
        </div>
        <div className="w-1/2 wrap-sliderServices" ref={myRef}>
          <Slider {...settings}>
            {data?.map((service) => {
              return <div className="relative h-fit ease-linear">
              <div className="backgroundLinear w-full"></div>
              <div className="flex flex-col mb-8">
                <span className="text-orange font-bold opacity-40 fontText mb-4">{service.attributes.title}</span>
                <p
                  className="text-white opacity-40 font-normal text-font">{service.attributes.description}</p>
              </div>
            </div>
            })}
          </Slider>

        </div>
      </div>
      <div className="ButtonGoDown">
        <ButtonGoDown target="Value"/>
      </div>
    </div>
  )
}
