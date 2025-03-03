import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import { useMediaQuery } from 'react-responsive'
import NavigationButtons from 'src/components/NavigationButtons/index.jsx'
import http from 'src/utils/http.js'
import PortfolioData from 'src/components/Portfolio/PortfolioData.jsx'

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
              <PortfolioData portfolio={data[currentIndex]} />
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
