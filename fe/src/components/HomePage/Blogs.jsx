import React, { useEffect, useRef, useState } from 'react'
import http from 'src/utils/http.js'
import '../../scss/components/blogs.scss'
import { BlogCard } from './BlogCard.jsx'
import Slider from 'react-slick'
import NextIconV2 from 'src/components/Icon/NextIconV2'
import PrevIconV2 from 'src/components/Icon/PrevIconV2'
import { ButtonGradient, ButtonNormal } from 'src/components/Button/index.js'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import NextIcon from 'src/components/Icon/NextIcon/index.jsx'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import bgArticle from 'src/assets/images/bgArticle.png'

export function Blogs() {
  const sliderRef = useRef(null)
  const [data, setData] = useState([])
  const fetchNews = async () => {
    const res = await http.get(`posts?populate=*&pagination[page]=1&pagination[pageSize]=6&sort=createdAt:desc`)

    setData(res.data.data)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          prevArrow: false,
          nextArrow: false,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false,
          centerPadding: '30px'
        }
      }
    ],
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <div className='heightSection bg-black flex items-center justify-center'>
      <div
        className='w-full max-w-full bg-cover bg-center bg-no-repeat px-4 pb-32 text-center'
        style={{ backgroundImage: `url(${bgArticle})` }}
      >
        <AnimationFadeInUp shouldAnimate={true} index={0} className='flex justify-center'>
          <FlexibleGradient text='最終投稿' className='mb-5 text-3xl md:mt-16' />
        </AnimationFadeInUp>
        <AnimationFadeInUp shouldAnimate={true} index={1} className='flex justify-center'>
          <h2 className='text-4xl font-bold text-white md:text-6xl'>私たちのブログ</h2>
        </AnimationFadeInUp>
        <AnimationFadeInUp shouldAnimate={true} index={2}>
          <Slider ref={sliderRef} {...settings} className='mt-5 overflow-hidden'>
            {data.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </Slider>
          <div className='mt-4 flex justify-center gap-2 pb-2 lg:hidden'>
            <ButtonNormal width={60} height={60} radius={30} onClick={handlePrev}>
              <PrevIcon />
            </ButtonNormal>
            <ButtonGradient width={60} height={60} radius={30} onClick={handleNext}>
              <NextIcon />
            </ButtonGradient>
          </div>
        </AnimationFadeInUp>
      </div>
    </div>
  )
}

const PreviousArrow = (props) => (
  <button className='slick-arrow slick-prev left-[-20px]' aria-label='Previous'>
    <PrevIconV2 />
  </button>
)

const NextArrow = (props) => (
  <button className='slick-arrow slick-next right-[-20px]' aria-label='Next'>
    <NextIconV2 />
  </button>
)
