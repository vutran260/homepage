import 'src/scss/components/teams.scss'
import { SliderCommon } from 'src/components/HomePage/SliderCommon'
import React, { useEffect, useState } from 'react'
import http from 'src/utils/http'
import { AnimationFadeInUp } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'

export const Teams = () => {
  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`teams?populate=*`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  return (
    <div className='page-container bg-light-2'>
      <div className='center pb-4 md:pb-8'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='スタッフ' className='text-3xl' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1}>
            <h2 className='page-title mt-2'>チーム</h2>
          </AnimationFadeInUp>
        </div>
      </div>
      <div className='wrap-slider-common'>
        <SliderCommon data={data} />
      </div>
    </div>
  )
}
