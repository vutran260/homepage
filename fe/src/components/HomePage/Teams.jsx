import 'src/scss/components/teams.scss'
import { SliderCommon } from 'src/components/HomePage/SliderCommon'
import React from 'react'
import { AnimationFadeInUp } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'

export const Teams = ({ data }) => {
  return (
    <div className='page-container bg-light-2'>
      <div className='center pb-4 md:pb-8'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='チーム' className='text-3xl' />
          </AnimationFadeInUp>
        </div>
      </div>
      <div className='wrap-slider-common'>
        <SliderCommon data={data} />
      </div>
    </div>
  )
}
