import background from 'src/assets/images/ourValue.png'
import '../../scss/components/value.scss'
import { AnimationFadeInUp, AnimationInViewToTop } from '../Animation'
import bgAboutUs from 'src/assets/images/bgAboutUs.png'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import bgAboutUs2 from 'src/assets/images/bgAboutUs2.png'

export function Value() {
  return (
    <div className='heightSection relative'>
      <div
        className='aboutUS heightSection relative flex flex-col bg-black-800 bg-none md:bg-cover md:bg-center md:bg-no-repeat'
        style={{ backgroundImage: `url(${bgAboutUs})` }}
      >
        <div className='px-4 py-4 md:px-28 md:py-10'>
          <div className='flex flex-wrap items-center'>
            <div className='z-10 w-full'>
              <AnimationFadeInUp shouldAnimate={true} index={1} className='text-center md:text-left'>
                <h2 className='mt-2 mb-6 text-4xl font-bold text-white md:mb-6 md:text-6xl'>私たちの価値</h2>
              </AnimationFadeInUp>
              <AnimationFadeInUp shouldAnimate={true} index={2}>
                <div className='w-full rounded-2xl border border-solid border-darkGray-600 bg-black-800 p-4 text-whiteGray-600 md:w-[800px] md:p-8'>
                  <p className='mb-4 text-base md:mb-8 md:text-xl'>
                    私たちは最先端のIT技術を駆使し、トレンドに合わせたアプリ開発に特化しております。
                    豊富な実績から、ライブ配信アプリ開発には特に強みを持っており、
                    多方面からアプローチ可能な企画提案や、よく使われている機能などを速やかに実装可能です。
                    開発だけではなく、保守に関してもフレキシブルに対応をしております。
                  </p>
                  <p className='mb-4 text-base md:mb-8 md:text-xl'>
                    <b className='text-base text-blueCustom-100 md:text-xl'>
                      "ユーザーに長く愛されるアプリにしたい"
                      "アプリ開発を知り尽くしたプロフェッショナルと一緒につくりたい" "新しい技術で開発したい"
                    </b>{' '}
                    そんな法人様・個人様に要件定義から運用保守までお応えすることが可能です。
                  </p>
                  <p className='mb-4 text-base md:mb-8 md:text-xl'>
                    また、近年流行しているアプリの特性を一早く理解し、テストとして似たような
                    アプリを制作するよう心掛けておりますので、 その実績上、質の高い提案が出来る自負があります。
                  </p>
                </div>
              </AnimationFadeInUp>
            </div>
            <AnimationFadeInUp
              shouldAnimate={true}
              index={3}
              className='absolute bottom-[60px] right-0 z-0 w-full md:w-1/2'
            >
              <img src={bgAboutUs2} alt='Isometric technology illustration' className='h-auto w-full' />
            </AnimationFadeInUp>
          </div>
        </div>
      </div>
      {/*<AnimationInViewToTop className='grayscale-image w-4/5'>*/}
      {/*  <img src={background} alt='' />*/}
      {/*</AnimationInViewToTop>*/}
      {/*<div className='wrap-text absolute flex flex-col rounded-md bg-darkGray-900'>*/}
      {/*  <AnimationInViewToTop className='textLarge mb-4 text-white'>Our Value</AnimationInViewToTop>*/}
      {/*  <AnimationInViewToTop className='font-extralight leading-normal text-white'>*/}
      {/*    私たちは最先端のIT技術を駆使し、トレンドに合わせたアプリ開発に特化しております。*/}
      {/*    豊富な実績から、ライブ配信アプリ開発には特に強みを持っており、*/}
      {/*    多方面からアプローチ可能な企画提案や、よく使われている機能などを速やかに実装可能です。*/}
      {/*    開発だけではなく、保守に関してもフレキシブルに対応をしております。*/}
      {/*    <br />*/}
      {/*    <br />*/}
      {/*    <b className='font-extrabold text-sky-500'>*/}
      {/*      "ユーザーに長く愛されるアプリにしたい" "アプリ開発を知り尽くしたプロフェッショナルと一緒につくりたい"*/}
      {/*      "新しい技術で開発したい"*/}
      {/*    </b>{' '}*/}
      {/*    そんな法人様・個人様に要件定義から運用保守までお応えすることが可能です。*/}
      {/*    <br />*/}
      {/*    <br />*/}
      {/*    また、近年流行しているアプリの特性を一早く理解し、テストとして似たような*/}
      {/*    アプリを制作するよう心掛けておりますので、 その実績上、質の高い提案が出来る自負があります。*/}
      {/*  </AnimationInViewToTop>*/}
      {/*</div>*/}
    </div>
  )
}
