import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ButtonGradient } from 'src/components/Button/index.js'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import CardGradient from 'src/components/Gradient/CardGradient.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import { useMediaQuery } from 'react-responsive'
import NavigationButtons from 'src/components/NavigationButtons/index.jsx'
import http from 'src/utils/http.js'
import { Link } from 'react-router-dom'
import {
  HoverScaleMotion,
  HoverFloatMotion,
  InteractiveMotion,
  ContainerMotion
} from 'src/components/Animation/index.jsx'

import technical1 from 'src/assets/images/technical1.png'
import technical2 from 'src/assets/images/technical2.png'
import technical3 from 'src/assets/images/technical3.png'
import technical4 from 'src/assets/images/technical4.png'
import technical5 from 'src/assets/images/technical5.png'
import technical6 from 'src/assets/images/technical6.png'

export function Portfolio() {
  const [data, setData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right, 0 for initial
  const [isAnimating, setIsAnimating] = useState(false) // Thêm state kiểm soát animation
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const fetchPortfolios = async () => {
    const res = await http.get(`portfolios?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  const nextSlide = () => {
    // Prevent slide change if animation is in progress
    if (isAnimating || data.length <= 1) return

    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    // Prevent slide change if animation is in progress
    if (isAnimating || data.length <= 1) return

    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index) => {
    // Prevent slide change if animation is in progress or it's the current slide
    if (isAnimating || index === currentIndex || data.length <= 1) return

    setIsAnimating(true)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Add callback function for animation completion event
  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96]
  }

  return (
    <div className='page-container bg-dark-1 mx-auto max-w-[1500px] px-4 !pr-0 md:px-8'>
      {isMobile && (
        <div className='flex items-center justify-center gap-2'>
          <NavigationButtons onPrev={prevSlide} onNext={nextSlide} disabled={isAnimating} />
        </div>
      )}

      {data.length > 0 && (
        <div className='relative overflow-hidden'>
          <AnimatePresence custom={direction} initial={false} mode='wait' onExitComplete={handleAnimationComplete}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={transition}
              className='w-full'
            >
              <PortfolioCard portfolio={data[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {!isMobile && (
        <AnimationFadeInUp
          delay={0.1}
          shouldAnimate={true}
          index={isMobile ? 0 : 7}
          className='flex justify-center gap-2 pb-2 md:mt-2 md:pb-0'
        >
          <NavigationButtons onPrev={prevSlide} onNext={nextSlide} disabled={isAnimating} />
        </AnimationFadeInUp>
      )}
    </div>
  )
}

const PortfolioCard = ({ portfolio }) => {
  if (!portfolio) return null

  const {
    id,
    attributes: { title, domain, release_time, technologies, image }
  } = portfolio

  const techArray = technologies ? technologies.split(',').map((tech) => tech.trim()) : []
  const techImages = [technical1, technical2, technical3, technical4, technical5, technical6]

  const technicalSkills = techArray.slice(0, 6).map((name, index) => ({
    name,
    image: techImages[index % techImages.length]
  }))

  const getImageUrl = (imageData, index = 0) => {
    if (!imageData || !imageData.data || !imageData.data[index]) {
      return ''
    }

    const url = imageData.data[index].attributes.url
    return url.startsWith('http') ? url : `${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${url}`
  }

  return (
    <ContainerMotion className='flex flex-col md:flex-row md:justify-between'>
      <div className='w-[368px]'>
        <div className='p-4 text-center md:text-left'>
          <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={0}>
            <FlexibleGradient text={domain || 'アプリ制作'} className='mb-5 text-3xl' />
          </AnimationFadeInUp>

          <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={1}>
            <p className='mb-5 text-4xl text-white md:text-5xl'>{title}</p>
          </AnimationFadeInUp>

          <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={2}>
            <p className='mb-5 text-xl text-whiteGray-600'>{release_time}</p>
          </AnimationFadeInUp>

          <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={3}>
            <p className='mb-2 text-xl text-whiteGray-600'>テクノロジー</p>
          </AnimationFadeInUp>

          <AnimationFadeInUp
            delay={0.1}
            shouldAnimate={true}
            index={3}
            className='flex justify-center md:!justify-start'
          >
            <motion.div className='mb-10 grid w-[218px] grid-cols-3 gap-2 md:flex md:flex-wrap'>
              {technicalSkills.map((item, index) => (
                <HoverScaleMotion
                  key={index}
                  className='inline-block w-[66px] items-center justify-center rounded-[10px] border border-solid border-whiteGray-100 p-2'
                >
                  <img src={item.image} alt={item.name} />
                </HoverScaleMotion>
              ))}
            </motion.div>
          </AnimationFadeInUp>

          <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={6}>
            <InteractiveMotion>
              <Link to={`/portfolio/${id}`} className=''>
                <ButtonGradient className='h-[80px] w-full px-[40px] py-[10px] md:w-[320px]'>
                  プロジェクト情報
                </ButtonGradient>
              </Link>
            </InteractiveMotion>
          </AnimationFadeInUp>
        </div>
      </div>

      {/* First image */}
      {image && image.data && image.data.length > 0 && (
        <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={4}>
          <HoverFloatMotion>
            <CardGradient className='h-[600px] w-full rounded-lg border border-solid border-darkGray-600 px-4 pt-6 text-center md:w-[455px] md:px-6'>
              <p className='mb-6 text-2xl text-white'>STEP① 出発地を指定</p>
              <div>
                <img src={getImageUrl(image, 0)} className='h-full w-full object-contain' alt={title} />
              </div>
            </CardGradient>
          </HoverFloatMotion>
        </AnimationFadeInUp>
      )}

      {/* Second image */}
      {image && image.data && image.data.length > 1 && (
        <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={5}>
          <HoverFloatMotion>
            <CardGradient className='h-[600px] w-full rounded-lg border border-solid border-darkGray-600 px-4 pt-6 text-center md:w-[500px] md:pl-8 md:pr-0'>
              <p className='mb-6 text-xl text-white'>お迎え希望の位置をマップ上で指定。「ここに呼ぶ」</p>
              <img src={getImageUrl(image, 1)} className='h-full w-full' alt={title} />
            </CardGradient>
          </HoverFloatMotion>
        </AnimationFadeInUp>
      )}
    </ContainerMotion>
  )
}
