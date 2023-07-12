import "src/scss/components/teams.scss"
import {SliderCommon} from "src/components/HomePage/SliderCommon";
import ButtonGoDown from "src/components/Button/index.js";

export const Teams = () => {
  return (
    <div className="wrap-teams w-full pt-6 flex flex-col">
      <div className="flex justify-center pb-4">
        <div className="flex flex-col justify-center">
          <span className="text-white mb-2 flex justify-center">Our staff</span>
          <span className="textLarge text-white flex justify-center">Teams</span>
        </div>
      </div>
      <div className="wrap-slider-common">
        <SliderCommon/>
      </div>
      <div className='ButtonGoDown'>
        <ButtonGoDown/>
      </div>

    </div>
  )
}