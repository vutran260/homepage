import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/SliderPortfolio.scss'
import {CardPortfolio} from './CardPortfolio.jsx'
import ButtonGoDown from '../Button'

export function SliderPortfolio() {
  const settings = {
    customPaging: function (i) {
      return <span className='w-full'>0{i + 1}</span>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
    dotsClass: 'slick-slide-home',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <div className='slider-home relative'>
        <Slider {...settings}>
          <CardPortfolio/>
          <CardPortfolio/>
          <CardPortfolio/>
          <CardPortfolio/>
          <CardPortfolio/>
        </Slider>
        <div className='ButtonGoDown'>
          <ButtonGoDown/>
        </div>
      </div>
    </>
  )
}
