import 'src/scss/components/teams.scss'
import { SliderCommon } from 'src/components/HomePage/SliderCommon'
import React, { useEffect, useState } from 'react'
import http from 'src/utils/http'
import { AnimationInViewToTop } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import bgTeams from 'src/assets/images/bgTeams.png'

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
    <div
      className='heightSection flex w-full flex-col bg-cover bg-center bg-no-repeat pt-6'
      style={{ backgroundImage: `url(${bgTeams})` }}
    >
      <div className='flex justify-center pb-4'>
        <div className='flex flex-col justify-center text-center'>
          <div className='wap-textLan-space w-full'>
            <div>
              <FlexibleGradient text='スタッフ' className='text-3xl' />
            </div>
            <div className='mt-2'>
              <span className='text-4xl text-white md:text-6xl'>チーム</span>
            </div>
          </div>
        </div>
      </div>
      <AnimationInViewToTop className='wrap-slider-common'>
        <SliderCommon data={data} />
      </AnimationInViewToTop>
    </div>
  )
}
