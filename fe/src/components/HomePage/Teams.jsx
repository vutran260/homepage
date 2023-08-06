import "src/scss/components/teams.scss"
import {SliderCommon} from "src/components/HomePage/SliderCommon";
import {useEffect, useState} from "react";
import http from "../../utils/http";
import { AnimationInViewToTop } from "../Animation";

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
    <div className='wrap-teams heightSection flex w-full flex-col pt-6'>
      <div className='flex justify-center pb-4'>
        <div className='flex flex-col justify-center'>
          <AnimationInViewToTop>
            <span className='text-OurStaff mb-2 flex justify-center text-white'>Our staff</span>
          </AnimationInViewToTop>
          <AnimationInViewToTop>
            <span className='textLarge flex justify-center text-white'>Teams</span>
          </AnimationInViewToTop>
        </div>
      </div>
      <div className='wrap-slider-common'>
        <SliderCommon data={data} />
      </div>
    </div>
  )
}