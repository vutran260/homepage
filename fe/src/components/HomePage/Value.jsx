import 'src/scss/components/value.scss'
import { AnimationFadeInUp } from '../Animation'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import React from 'react'
import ourValue from 'src/assets/jsons/ourValue.json'
import LottieAnimation from 'src/components/LottieAnimation/index.jsx'

export function Value() {
  return (
    <div className='page-container bg-dark-1'>
      <div className='flex justify-between'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0} className='text-center md:text-left'>
            <FlexibleGradient text='私たちの価値' className='mb-5 items-center text-3xl md:text-left' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1} className='text-center md:text-left'>
            <h2 className='pb-2 text-xl tracking-widest md:text-3xl'>最先端のIT技術を駆使し、</h2>
            <h2 className='pb-4 text-xl tracking-widest md:text-3xl'>トレンドに合わせたアプリ開発</h2>
          </AnimationFadeInUp>
          <div className='rounded-2xl border border-solid border-darkGray-600 bg-black-800 p-4 md:p-8'>
            <AnimationFadeInUp shouldAnimate={true} index={2}>
              <div className='w-full !font-normal tracking-widest text-whiteGray-700 md:w-[800px]'>
                <p className='mb-4 text-base md:mb-8'>
                  豊富な実績から<span className='font-sansBlack text-white'>ライブ配信アプリ開発</span>
                  には特に強みを持っており、多方面からアプローチ可能な企画提案や、よく使われている機能などを速やかに実装可能です。開発だけではなく、
                  <span className='font-sansBlack text-white'>保守に関してもフレキシブルに対応</span>をしております。
                </p>
                <p className='mb-4 text-base md:mb-8'>
                  「ユーザーに長く愛されるアプリにしたい」「アプリ開発を知り尽くしたプロフェッショナルと一緒に作りたい」「新しい技術で開発したい」
                </p>
                <p className='mb-4 text-base md:mb-8'>
                  そんな法人様・個人様に、要件定義から運用保守までお応えすることが可能です。
                </p>
                <p className='mb-4 text-base md:mb-8'>
                  また、近年流行しているアプリの特性を一早く理解し、テストとして似たようなアプリを制作するよう心掛けておりますので、その実績上、
                  <span className='font-sansBlack text-white'>質の高い提案が出来る自負があります。</span>
                </p>
              </div>
            </AnimationFadeInUp>
            <AnimationFadeInUp
              shouldAnimate={true}
              index={3}
              className='absolute right-0 bottom-0 z-[-1] w-full md:w-1/2'
            >
              <LottieAnimation animationData={ourValue} className='h-auto w-full' />
            </AnimationFadeInUp>
          </div>
        </div>
      </div>
    </div>
  )
}
