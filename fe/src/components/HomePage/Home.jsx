import React, { useContext, useEffect, useRef } from 'react'
import bgHomeVideo from 'src/assets/videos/bgHome.mp4'
import 'src/scss/components/homeComponent.scss'
import { AppContext } from '../../contexts/app.context'
import { ButtonGradient } from 'src/components/Button'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import LogoNew from 'src/assets/images/LogoNew.png'
import bgHomeMobile from 'src/assets/images/bgHomeMobile.png'
import { isMobile } from 'react-device-detect'

export function Home({ shouldAnimate, isMobile }) {
  const { setting } = useContext(AppContext)
  const videoRef = useRef(null)

  useEffect(() => {
    if (shouldAnimate) {
      videoRef.current.play()
    }
  }, [shouldAnimate])

  return (
    <div
      className='homeComponent heightSection relative w-full bg-cover bg-center bg-no-repeat md:bg-none'
      style={{ backgroundImage: `url(${bgHomeMobile})` }}
    >
      <div className='absolute top-10 left-0 right-0 z-20 flex justify-center'>
        <img src={LogoNew} alt='Logo' className='nav-logo' width={60} height={60} />
      </div>
      <div className='absolute inset-0 flex flex-col justify-center px-2 md:items-center md:px-0'>
        <div className='z-10 flex flex-col items-center'>
          <AnimationFadeInUp
            shouldAnimate={shouldAnimate}
            className='textHome mb-10 flex flex-col items-center text-white max-md:text-4xl'
            index={0}
          >
            <span
              className='text-center font-bold max-md:text-3xl'
              dangerouslySetInnerHTML={{ __html: setting.title_banner }}
            ></span>
          </AnimationFadeInUp>

          <AnimationFadeInUp shouldAnimate={shouldAnimate} index={1} className='mt-10 w-full md:w-auto'>
            <ButtonGradient className='h-[80px] w-full px-[40px] py-[10px] md:w-[231px]'>CETを知る</ButtonGradient>
          </AnimationFadeInUp>
        </div>
      </div>
      {!isMobile && (
        <video
          autoPlay={false}
          ref={videoRef}
          loop
          muted
          className='video-background absolute inset-0 h-full w-full object-cover'
        >
          <source src={bgHomeVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
