import "src/scss/components/teams.scss"
import {SliderCommon} from "src/components/HomePage/SliderCommon";
import ButtonGoDown from "src/components/Button/index.js";
import {useEffect, useState} from "react";
import http from "../../utils/http";

export const Teams = () => {
  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`teams?populate=*`)
    setData(res.data.data)
  }
  console.log('team', data)

  useEffect(() => {
    fetchPortfolios()
  }, [])

  return (
    <div className='wrap-teams heightSection flex w-full flex-col pt-6'>
      <div className='flex justify-center pb-4'>
        <div className='flex flex-col justify-center'>
          <span className='text-OurStaff mb-2 flex justify-center text-white'>Our staff</span>
          <span className='textLarge flex justify-center text-white'>Teams</span>
        </div>
      </div>
      <div className='wrap-slider-common'>
        <SliderCommon data={data} />
      </div>
      <div className='ButtonGoDown'>
        <ButtonGoDown target='Feedback' />
      </div>
    </div>
  )
}