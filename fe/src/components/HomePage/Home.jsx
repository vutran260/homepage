import '../../scss/components/homeComponent.scss'
import Banner from '../../assets/images/Banner.png'
import BannerMobile from '../../assets/images/BannerHomeMobile.png'
import ButtonGoDown from '../Button'

export function Home() {
  return (
    <>
      <div className='homeComponent w-full heightSection'>
        <div className='relative h-full'>
          <div className='textHome absolute top-0 z-10 flex flex-col text-white max- max-md:text-3xl'>
            <span className='max-md:text-3xl'>アプリ開発</span>
            <span className='max-md:text-3xl'>といえばCET</span>
          </div>
          <img src={Banner} alt='' className='banner desktop top-0  left-0 w-full object-cover max-[500px]:hidden'/>
          <img src={BannerMobile} alt=''
               className='banner desktop top-0  left-0 w-full object-cover min-[500px]:hidden'/>
          <div className='ButtonGoDown'>
            <ButtonGoDown target="Portfolio"/>
          </div>
        </div>
      </div>
    </>
  )
}
