import React from 'react'
import { ButtonGradient } from 'src/components/Button'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'

export function Home({ shouldAnimate }) {
  return (
    <div className='home-container'>
      <AnimationFadeInUp
        shouldAnimate={shouldAnimate}
        className='pb-6 text-center text-4xl leading-tight tracking-widest xl:text-6xl'
        index={0}
      >
        アプリ開発といえば
      </AnimationFadeInUp>
      <div className='bg-home h-screen pt-4'>
        <div className='flex flex-row justify-center'>
          <div className='textHome mb-10 flex flex-col items-center text-white'>
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
    </div>
  )
}
