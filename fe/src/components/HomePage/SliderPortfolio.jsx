import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/SliderPortfolio.scss'
import {CardPortfolio} from './CardPortfolio.jsx'
import ButtonGoDown from '../Button'
import { useEffect, useState } from 'react'
import http from '../../utils/http'

export function SliderPortfolio() {
  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`portfolios?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])
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
      <div className='slider-home heightSection relative'>
        <Slider {...settings}>
          {data?.map((portfolio) => {
            return (
              <CardPortfolio
                key={portfolio.id}
                title={portfolio.attributes.title}
                release_time={portfolio.attributes.release_time}
                description={portfolio.attributes.description}
                technologies={portfolio.attributes.technologies}
                thumpnail={portfolio.attributes.image.data.attributes.url}
              />
            )
          })}
          {/* <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio /> */}
        </Slider>
        <div className='ButtonGoDown'>
          <ButtonGoDown target='News' />
        </div>
      </div>
    </>
  )
}
