import backgroundFooter from '../../assets/images/backgroundFooter.png'
import './style.css'
function Footer() {
  return (
    <div className="footer">
      <div className=' text-white'>
        <h4 className='text-white'>お気軽にお問い合わせください</h4>
        <h3 className='mt-2 mb-[94px] text-5xl font-extrabold text-white max-lg:mb-[30px]'>Contact Us</h3>
        <div className='flex items-center flex-wrap'>
          <div className='basis-2/3 max-lg:w-full max-lg:basis-full'>
            <div className='flex flex-wrap'>
              <div className='basis-1/2 max-lg:basis-full'>
                <h4 className='text-2xl mb-2'>CET.inc</h4>
                <p>アプリ開発ならCET</p>
                <p className='mt-10 opacity-70 max-w-[250px] max-lg:hidden'>
                  @ 2023 Request for application development is CET Co., Ltd. All Rights Reserved
                </p>
              </div>
              <div className='basis-1/2 max-lg:basis-full'>
                <h4 className='text-2xl mb-2 max-lg:mt-[30px]'>Contact</h4>
                <div className='flex items-center gap-5 mb-2'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
                <div className='flex items-center gap-5 mb-2'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
                <div className='flex items-center gap-5 mb-2'>
                  <span className='text-orange'>T</span>
                  <span className='opacity-60'>03-5322-2953</span>
                </div>
              </div>
              <div className='mt-[80px] basis-1/2 max-lg:basis-full max-lg:mt-[30px]'>
                <span className='opacity-60'>CONTACT NOW</span>
              </div>
              <div className='basis-1/2 max-lg:basis-full'>
                <h4 className='text-2xl mb-2'>Address</h4>
                <span className='opacity-60 leading-5'>
                  〒163-0532
                  <br />
                  東京都新宿区西新宿１丁目２６−２
                  <br /> 新宿野村ビル 32階
                </span>
              </div>
            </div>
          </div>
          <div className='basis-1/3 max-lg:w-full max-lg:basis-full'>
            <img className='max-lg:w-2/3' src='/images/Frame29.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
