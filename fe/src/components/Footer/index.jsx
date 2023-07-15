import backgroundFooter from '../../assets/images/backgroundFooter.png'
import Frame29 from '../../assets/images/Frame29.png'
import './style.css'
import iconRow from '../../assets/images/iconRow.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className=' text-white'>
        <h4 className='text-white'>お気軽にお問い合わせください</h4>
        <h3 className='mt-2 mb-[94px] text-5xl font-extrabold text-white max-lg:mb-[30px]'>Contact Us</h3>
        <div className='flex flex-wrap items-center'>
          <div className='basis-2/3 max-md:w-full max-md:basis-full'>
            <div className='flex flex-wrap'>
              <div className='basis-1/2 max-md:basis-full'>
                <h4 className='mb-2 text-2xl'>CET.inc</h4>
                <p>アプリ開発ならCET</p>
                <p className='mt-10 max-w-[250px] opacity-70 max-md:hidden'>
                  @ 2023 Request for application development is CET Co., Ltd. All Rights Reserved
                </p>
              </div>
              <div className='basis-1/2 max-md:basis-full'>
                <h4 className='mb-2 text-2xl max-lg:mt-[30px]'>Contact</h4>
                <div className='mb-2 flex items-center gap-5'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
                <div className='mb-2 flex items-center gap-5'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
                <div className='mb-2 flex items-center gap-5'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
              </div>
              <div className='mt-[80px] flex basis-1/2 items-center gap-3 max-lg:mt-[30px] max-md:hidden max-md:basis-full'>
                <Link to='/contact' className='h-10 w-10'>
                  <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
                </Link>
                <span className='opacity-60'>CONTACT NOW</span>
              </div>
              <div className='basis-1/2 max-md:basis-full'>
                <h4 className='mb-2 text-2xl'>Address</h4>
                <span className='leading-5 opacity-60'>
                  〒163-0532
                  <br />
                  東京都新宿区西新宿１丁目２６−２
                  <br /> 新宿野村ビル 32階
                </span>
              </div>

              <div className='mt-[80px] flex basis-1/2 items-center gap-3 max-lg:mt-[30px] max-md:basis-full min-[768px]:hidden'>
                <Link to='/contact' className='h-10 w-10'>
                  <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
                </Link>
                <span className='opacity-60'>CONTACT NOW</span>
              </div>
              <p className='mt-10 max-w-[250px] opacity-70 min-[768px]:hidden'>
                @ 2023 Request for application development is CET Co., Ltd. All Rights Reserved
              </p>
            </div>
          </div>
          <div className='basis-1/3 max-md:w-full max-md:basis-full'>
            <img className='max-lg:w-2/3' src={Frame29} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
