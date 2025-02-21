import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/SliderPortfolio.scss'
import { CardPortfolio } from './CardPortfolio.jsx'
import { useEffect, useState } from 'react'
import http from '../../utils/http'
import CustomArrow from '../CustomArrow'

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
      return <button className='w-full'>0{i + 1}</button>
    },
    dots: true,
    // prevArrow: <></>,
    // nextArrow: <></>,
    dotsClass: 'slick-slide-home md:absolute bottom-0 max-[500px]:mt-20',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow transform='rotate(-90deg)' />,
    prevArrow: <CustomArrow transform='rotate(90deg)' />
  }
  return (
    <>
      <div className='slider-home heightSection relative md:pt-9'>
        <Slider {...settings} className='overflow-hidden'>
          {data?.map((portfolio) => {
            return (
              <CardPortfolio
                key={portfolio.id}
                title={portfolio.attributes.title}
                release_time={portfolio.attributes.release_time}
                description={portfolio.attributes.description}
                technologies={portfolio.attributes.technologies}
                thumpnail={portfolio.attributes.image}
                id={portfolio.id}
                domain={portfolio.attributes.domain}
              />
            )
          })}
        </Slider>
      </div>
    </>
  )
}
