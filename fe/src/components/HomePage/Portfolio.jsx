import '../../scss/components/portfolio.scss'
import portfolio from '../../assets/images/portfolio.png'
import { AnimationInViewToTop } from '../Animation'

export function Portfolio() {
  return (
    <>
      <div className='portfolio heightSection bg-darkGray-900'>
        <div className='flex flex-col justify-center pt-4'>
          <div className='portfolio-text flex flex-col text-white'>
            <AnimationInViewToTop className={`text-center`}>
              <span>What We’ve Done</span>
            </AnimationInViewToTop>
            <AnimationInViewToTop className={`text-center`}>
              <span className='text'>Portfolio</span>
            </AnimationInViewToTop>
          </div>
          <AnimationInViewToTop>
            <div className='wrap-img grayscale-image'>
              <img src={portfolio} alt='' />
            </div>
          </AnimationInViewToTop>
        </div>
      </div>
    </>
  )
}
