import '../../scss/components/homeComponent.scss'
import Banner from '../../assets/images/Banner.png'
import ButtonGoDown from '../Button'

export function Home() {
  return (
    <>
      <div className='homeComponent w-full'>
        <div className='relative'>
          <div className='textHome absolute top-0 z-10 flex flex-col text-white'>
            <span>アプリ開発</span>
            <span>といえばCET</span>
          </div>
          <img src={Banner} alt='' className='banner top-0  left-0 w-full object-cover'/>
          <div className='ButtonGoDown'>
            <ButtonGoDown/>
          </div>
        </div>
      </div>
    </>
  )
}
