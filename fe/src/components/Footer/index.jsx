import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Frame29 from '../../assets/images/Frame29.png'
import iconRow from '../../assets/images/iconRow.png'
import { AppContext } from '../../contexts/app.context'
import { AnimationInViewToTop } from '../Animation'
import './style.css'

function Footer() {
  const { setting } = useContext(AppContext)
  return (
    <div className='footer heightSection'>
      <div className=' h-full text-white'>
        <AnimationInViewToTop>
          <h4 className='text-white'>お気軽にお問い合わせください</h4>
        </AnimationInViewToTop>
        <AnimationInViewToTop>
          <h3 className='mt-2 mb-[94px] text-5xl font-extrabold text-white max-lg:mb-[30px]'>Contact Us</h3>
        </AnimationInViewToTop>
        <div className='flex flex-wrap items-center'>
          <div className='basis-2/3 max-md:w-full max-md:basis-full'>
            <div className='flex flex-wrap'>
              <AnimationInViewToTop className='basis-1/2 max-md:basis-full'>
                <h4 className='mb-2 text-2xl'>CET.inc</h4>
                <p>アプリ開発ならCET</p>
                <p
                  className='mt-10 max-w-[250px] opacity-70 max-md:hidden'
                  dangerouslySetInnerHTML={{ __html: setting?.description }}
                ></p>
              </AnimationInViewToTop>
              <AnimationInViewToTop className='basis-1/2 max-md:basis-full'>
                <h4 className='mb-2 text-2xl max-lg:mt-[30px]'>Contact</h4>
                <div className='mb-2 flex items-center gap-5'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>{setting?.phone}</span>
                </div>
                <div className='mb-2 flex items-center gap-5'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
                <div className='mb-2 flex items-center gap-5'>
                  <span className='text-orange'>E</span>
                  <span className='opacity-60'>{setting?.email}</span>
                </div>
              </AnimationInViewToTop>
              <AnimationInViewToTop className='mt-[80px] flex basis-1/2 items-center gap-3 max-lg:mt-[30px] max-md:hidden max-md:basis-full'>
                <Link to='/contact' className='h-10 w-10'>
                  <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
                </Link>
                <span className='opacity-60'>CONTACT NOW</span>
              </AnimationInViewToTop>
              <AnimationInViewToTop className='basis-1/2 max-md:basis-full'>
                <h4 className='mb-2 text-2xl'>Address</h4>
                <span className='leading-5 opacity-60' dangerouslySetInnerHTML={{ __html: setting?.address }}></span>
              </AnimationInViewToTop>

              <AnimationInViewToTop className='mt-[80px] flex basis-1/2 items-center gap-3 max-lg:mt-[30px] max-md:basis-full min-[768px]:hidden'>
                <Link to='/contact' className='h-10 w-10'>
                  <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
                </Link>
                <span className='opacity-60'>CONTACT NOW</span>
              </AnimationInViewToTop>
              <AnimationInViewToTop className='mt-10 max-w-[250px] opacity-70 min-[768px]:hidden'>{setting?.description}</AnimationInViewToTop>
            </div>
          </div>
          <AnimationInViewToTop className='basis-1/3 max-md:mb-5 max-md:w-full max-md:basis-full'>
            <img className='max-lg:w-2/3' src={Frame29} />
          </AnimationInViewToTop>
        </div>
      </div>
    </div>
  )
}

export default Footer
