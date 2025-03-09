import React, { useEffect, useRef } from 'react'
import { ButtonGradient } from 'src/components/Button'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import bgHomeVideo from 'src/assets/videos/bgHome.mp4'
import bgHomeMobile from 'src/assets/images/bgHomeMobile.png'

export function Home({ shouldAnimate, isMobile }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (shouldAnimate && videoRef.current) {
      const isIOSSafari =
        /iPhone|iPad|iPod/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent) && !window.MSStream

      if (!isIOSSafari) {
        const playPromise = videoRef.current.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Autoplay prevented:', error)
          })
        }
      }
    }
  }, [shouldAnimate])

  return (
    <div
      className='home-container relative bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `${isMobile ? `url(${bgHomeMobile})` : 'none'}` }}
    >
      <div className='z-10 h-screen pt-4'>
        <div className='flex flex-row justify-center'>
          <div className='textHome mb-10 flex flex-col items-center text-white'>
            <AnimationFadeInUp
              shouldAnimate={shouldAnimate}
              className='pb-6 text-center text-4xl leading-tight tracking-widest xl:text-6xl'
              index={0}
            >
              アプリ開発といえば
            </AnimationFadeInUp>
            <AnimationFadeInUp
              shouldAnimate={shouldAnimate}
              className='text-center font-secondBold text-9xl font-bold leading-tight tracking-widest md:text-9xl'
              index={0}
            >
              CET
            </AnimationFadeInUp>
            <AnimationFadeInUp shouldAnimate={shouldAnimate} index={1} className='mt-10 w-full md:w-auto'>
              <ButtonGradient className='h-[80px] w-full px-[40px] py-[10px] md:w-[300px]' radius={22} fontSize={30}>
                CETを知る
              </ButtonGradient>
            </AnimationFadeInUp>
          </div>
        </div>
      </div>
      {!isMobile && (
        <video
          autoPlay={false}
          ref={videoRef}
          loop
          muted
          className='video-background absolute inset-0 h-screen w-full object-cover'
        >
          <source src={bgHomeVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
