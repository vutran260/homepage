import React, { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import { ButtonGradient } from 'src/components/Button/index.js'
import { Link } from 'react-router-dom'

function Footer() {
  const { setting } = useContext(AppContext)
  return (
    // <div className='footer heightSection'>
    //   <div className=' h-full text-white'>
    //     <AnimationInViewToTop>
    //       <h4 className='text-white'>お気軽にお問い合わせください</h4>
    //     </AnimationInViewToTop>
    //     <AnimationInViewToTop>
    //       <h3 className='mt-2 mb-[94px] text-5xl font-extrabold text-white max-lg:mb-[30px]'>Contact Us</h3>
    //     </AnimationInViewToTop>
    //     <div className='flex flex-wrap items-center'>
    //       <div className='basis-2/3 max-md:w-full max-md:basis-full'>
    //         <div className='flex flex-wrap'>
    //           <AnimationInViewToTop className='basis-1/2 max-md:basis-full'>
    //             <h4 className='mb-2 text-2xl'>CET.inc</h4>
    //             <p>アプリ開発ならCET</p>
    //             <p
    //               className='mt-10 max-w-[250px] opacity-70 max-md:hidden'
    //               dangerouslySetInnerHTML={{ __html: setting?.description }}
    //             ></p>
    //           </AnimationInViewToTop>
    //           <AnimationInViewToTop className='basis-1/2 max-md:basis-full'>
    //             <h4 className='mb-2 text-2xl max-lg:mt-[30px]'>Contact</h4>
    //             <div className='mb-2 flex items-center gap-5'>
    //               <span className='text-orange'>T</span>
    //               <span className='opacity-60'>{setting?.phone}</span>
    //             </div>
    //             <div className='mb-2 flex items-center gap-5'>
    //               <span className='text-orange'>F</span>
    //               <span className='opacity-60'>{setting?.tel}</span>
    //             </div>
    //             <div className='mb-2 flex items-center gap-5'>
    //               <span className='text-orange'>E</span>
    //               <span className='opacity-60'>{setting?.email}</span>
    //             </div>
    //           </AnimationInViewToTop>
    //           <AnimationInViewToTop className='mt-[80px] flex basis-1/2 items-center gap-3 max-lg:mt-[30px] max-md:hidden max-md:basis-full'>
    //             <Link to='/contact' className='h-10 w-10'>
    //               <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconContact} alt='' />
    //             </Link>
    //             <span className='opacity-60'>お問い合わせ</span>
    //           </AnimationInViewToTop>
    //           <AnimationInViewToTop className='basis-1/2 max-md:basis-full'>
    //             <h4 className='mb-2 text-2xl'>Address</h4>
    //             <span className='leading-5 opacity-60' dangerouslySetInnerHTML={{ __html: setting?.address }}></span>
    //           </AnimationInViewToTop>
    //
    //           <AnimationInViewToTop className='mt-[80px] flex basis-1/2 items-center gap-3 max-lg:mt-[30px] max-md:basis-full min-[768px]:hidden'>
    //             <Link to='/contact' className='h-10 w-10'>
    //               <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconContact} alt='' />
    //             </Link>
    //             <span className='opacity-60'>お問い合わせ</span>
    //           </AnimationInViewToTop>
    //           <AnimationInViewToTop className='mt-10 max-w-[250px] opacity-70 min-[768px]:hidden'>
    //             {setting?.description}
    //           </AnimationInViewToTop>
    //         </div>
    //       </div>
    //       <AnimationInViewToTop className='basis-1/3 max-md:mb-5 max-md:w-full max-md:basis-full'>
    //         <img className='max-lg:w-2/3' src={Frame29} />
    //       </AnimationInViewToTop>
    //     </div>
    //   </div>
    // </div>
    <div className='page-container bg-light-2'>
      <div className='center pb-4 md:pb-8'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='お気軽にお問い合わせください' className='text-3xl' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1}>
            <h2 className='mt-2 text-4xl text-white md:text-6xl'>お問い合わせ</h2>
          </AnimationFadeInUp>
        </div>
      </div>
      {/* Cards Grid */}
      <div className='grid gap-4 pt-4 !pb-20 md:grid-cols-2 md:gap-8 md:pt-10 md:pb-0'>
        {/* Left Card */}
        <AnimationFadeInUp
          shouldAnimate={true}
          index={2}
          className='border-card rounded-3xl bg-gradient-blue p-6 md:p-8'
        >
          <div className='flex flex-col sm:flex-row md:items-center md:justify-between'>
            <div className='mb-4 sm:mb-0'>
              <h2 className='text-3xl font-bold'>CET.inc</h2>
              <p className='mt-2 text-3xl'>アプリ開発ならCET</p>
            </div>
            <Link to='/contact'>
              <ButtonGradient className='w-full sm:w-[140px] md:w-[160px]' height={50} radius={16} fontSize={18}>
                お問い合わせ
              </ButtonGradient>
            </Link>
          </div>
          <div className='mt-6 text-base md:mt-12'>
            <p>© 2022 Request for application development is CET Co., Ltd.</p>
            <p>All Rights Reserved</p>
          </div>
        </AnimationFadeInUp>

        {/* Right Card */}
        <AnimationFadeInUp
          shouldAnimate={true}
          index={3}
          className='border-card rounded-3xl bg-gradient-blue p-6 md:p-8'
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8'>
            <div>
              <h3 className='mb-4 text-3xl font-bold'>連絡先</h3>
              <div className='space-y-2'>
                <p className='text-base'>03-5322-2953</p>
                <p className='text-base'>info@cet-app.com</p>
              </div>
            </div>
            <div>
              <h3 className='mb-4 text-3xl font-bold'>住所</h3>
              <div className='space-y-2'>
                <p className='text-base'>〒163-0532</p>
                <p className='text-base'>東京都新宿区西新宿1丁目26-2</p>
                <p className='text-base'>新宿野村ビル32階</p>
              </div>
            </div>
          </div>
        </AnimationFadeInUp>
      </div>
    </div>
  )
}

export default Footer
