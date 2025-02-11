import React, { useContext, useEffect, useRef } from 'react'
import bgHomeVideo from 'src/assets/videos/bgHome.mp4'
import 'src/scss/components/homeComponent.scss'
import { AppContext } from '../../contexts/app.context'
import { ButtonGradient } from 'src/components/Button'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import LogoNew from 'src/assets/images/LogoNew.png'

export function Home({ shouldAnimate }) {
  const { setting } = useContext(AppContext)
  const videoRef = useRef(null)

  useEffect(() => {
    if (shouldAnimate) {
      videoRef.current.play()
    }
  }, [shouldAnimate])

  return (
    <>
      <div className='homeComponent heightSection w-full'>
        <div className='h-full'>
          <div className='relative h-full'>
            <div className='flex justify-center pt-10'>
              <img src={LogoNew} alt='Logo' className='nav-logo' width={60} height={60} />
            </div>
            <AnimationFadeInUp
              shouldAnimate={shouldAnimate}
              className='textHome flex flex-col text-white max-md:text-4xl'
            >
              <span
                className='font-bold max-md:text-3xl'
                dangerouslySetInnerHTML={{ __html: setting.title_banner }}
              ></span>
            </AnimationFadeInUp>
            <AnimationFadeInUp shouldAnimate={shouldAnimate} duration={4} className='mt-10 flex justify-center'>
              <ButtonGradient>CETを知る</ButtonGradient>
            </AnimationFadeInUp>
            <video
              autoPlay={false}
              ref={videoRef}
              loop
              muted
              className='video-background'
              onPlaying={() => console.log('playing video')}
            >
              <source src={bgHomeVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  )
}
