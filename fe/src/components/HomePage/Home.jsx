import Banner from '../../assets/images/Banner.png'
import BannerMobile from '../../assets/images/BannerHomeMobile.png'
import '../../scss/components/homeComponent.scss'
import { AnimationInViewToTop } from '../Animation'

export function Home() {
  return (
    <>
      <div className='homeComponent heightSection w-full'>
        <div className='relative h-full'>
          <div className='textHome max- absolute top-0 z-10 flex flex-col text-white max-md:text-3xl'>
            <AnimationInViewToTop>
              <span className='max-md:text-3xl'>アプリ開発</span>
            </AnimationInViewToTop>
            <AnimationInViewToTop>
              <span className='font-bold max-md:text-3xl'>といえばCET</span>
            </AnimationInViewToTop>
          </div>
          <div className='grayscale-image'>
            <img src={Banner} alt='' className='banner desktop top-0  left-0 w-full object-cover max-[600px]:hidden' />
            <img
              src={BannerMobile}
              alt=''
              className='banner desktop top-0  left-0 w-full object-cover min-[600px]:hidden'
            />
          </div>
        </div>
      </div>
    </>
  )
}
