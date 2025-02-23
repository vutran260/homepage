import React, { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'

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
      <div className='flex justify-center pb-4'>
        <div className='flex flex-col justify-center text-center'>
          <div className='wap-textLan-space w-full'>
            <div>
              <FlexibleGradient text='お気軽にお問い合わせください' className='text-3xl' />
            </div>
            <div className='mt-2'>
              <span className='text-4xl text-white md:text-6xl'>お問い合わせ</span>
            </div>
          </div>
        </div>
      </div>
      {/* Cards Grid */}
      <div className='grid gap-8 md:grid-cols-2 pt-10'>
        {/* Left Card */}
        <div className='rounded-3xl bg-gradient-blue p-8'>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold'>CET.inc</h2>
            <p className='mt-2 text-xl'>アプリ開発ならCET</p>
          </div>

          <button className='border-blue-400 text-blue-400 hover:bg-blue-400 rounded-full border px-8 py-2 transition hover:text-white'>
            お問い合わせ
          </button>

          <div className='mt-12 text-sm text-gray-400'>
            <p>© 2022 Request for application development is CET Co., Ltd.</p>
            <p>All Rights Reserved</p>
          </div>
        </div>

        {/* Right Card */}
        <div className='via-55% rounded-3xl bg-gradient-blue p-8'>
          <div className='grid gap-8'>
            {/* Contact Info */}
            <div>
              <h3 className='mb-4 text-xl'>連絡先</h3>
              <p className='text-lg'>03-5322-2953</p>
              <p className='text-blue-400'>info@cet-app.com</p>
            </div>

            {/* Address */}
            <div>
              <h3 className='mb-4 text-xl'>住所</h3>
              <p>〒163-0532</p>
              <p>東京都新宿区西新宿1丁目26-2 新宿野村ビル 32階</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
