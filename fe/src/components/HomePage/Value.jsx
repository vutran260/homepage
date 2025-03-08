import 'src/scss/components/value.scss'
import { AnimationFadeInUp } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import React from 'react'

export function Value() {
  return (
    <div className='page-container bg-aboutUs'>
      <div className='flex justify-between'>
        <div className='text-center md:text-left'>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='私たちの価値' className='mb-5 items-center text-3xl md:text-left' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1} className='text-center md:text-left'>
            <h2 className='pb-2 text-xl tracking-widest md:text-3xl'>最先端のIT技術を駆使し、</h2>
            <h2 className='pb-4 text-xl tracking-widest md:text-3xl'>トレンドに合わせたアプリ開発</h2>
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={2}>
            <div className='w-full !font-normal tracking-widest text-whiteGray-700 md:w-[500px]'>
              <p className='mb-2 text-base md:leading-[30px]'>
                豊富な実績から<span className='font-sansBlack text-white'>ライブ配信アプリ開発</span>
                には特に強みを持っており、多方面からアプローチ可能な企画提案や、よく使われている機能などを速やかに実装可能です。開発だけではなく、
                <span className='font-sansBlack text-white'>保守に関してもフレキシブルに対応</span>をしております。
              </p>
              <p className='mb-2 text-base md:leading-[30px]'>
                「ユーザーに長く愛されるアプリにしたい」「アプリ開発を知り尽くしたプロフェッショナルと一緒に作りたい」「新しい技術で開発したい」
              </p>
              <p className='mb-2 text-base md:leading-[30px]'>
                そんな法人様・個人様に、要件定義から運用保守までお応えすることが可能です。
              </p>
              <p className='mb-2 text-base md:leading-[30px]'>
                また、近年流行しているアプリの特性を一早く理解し、テストとして似たようなアプリを制作するよう心掛けておりますので、その実績上、
                <span className='font-sansBlack text-white'>質の高い提案が出来る自負があります。</span>
              </p>
            </div>
          </AnimationFadeInUp>
        </div>
      </div>
    </div>
  )
}
