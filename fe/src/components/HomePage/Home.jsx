import { useContext } from 'react'
import Banner from '../../assets/images/Banner.png'
import BannerMobile from '../../assets/images/BannerHomeMobile.png'
import '../../scss/components/homeComponent.scss'
import { AnimationInViewToTop } from '../Animation'
import { AppContext } from '../../contexts/app.context'

export function Home() {
  const { setting } = useContext(AppContext)
  console.log('setting', setting?.banner?.data?.attributes?.url)
  return (
    <>
      <div className='homeComponent heightSection w-full'>
        <div className='relative h-full'>
          <div className='textHome max- absolute top-0 z-10 flex flex-col text-white max-md:text-3xl'>
            <AnimationInViewToTop>
              <span
                className='font-bold max-md:text-3xl'
                dangerouslySetInnerHTML={{ __html: setting.title_banner }}
              ></span>
            </AnimationInViewToTop>
          </div>
          <div className='grayscale-image'>
            <img
              src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${setting?.banner?.data?.attributes?.url}`}
              alt=''
              className='banner desktop top-0  left-0 w-full object-cover max-[600px]:hidden'
            />
            <img
              src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${setting?.banner_mobile?.data?.attributes?.url}`}
              alt=''
              className='banner desktop top-0  left-0 w-full object-cover min-[600px]:hidden'
            />
          </div>
        </div>
      </div>
    </>
  )
}
