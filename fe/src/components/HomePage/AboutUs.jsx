import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'

export const AboutUs = () => {
  return (
    <>
      <div className='page-container bg-aboutUs'>
        <div className='flex'>
          <div className='z-10 w-full'>
            <AnimationFadeInUp shouldAnimate={true} index={1} className='text-center md:text-left'>
              <h2 className='mb-8 font-third text-4xl font-bold tracking-widest text-white'>私たちについて</h2>
            </AnimationFadeInUp>

            <AnimationFadeInUp shouldAnimate={true} index={2}>
              <div className='w-full !font-normal tracking-widest text-whiteGray-700 md:w-[700px]'>
                <p className='text-base'>CETのアプリ開発は、単なるエンジニアリングの先端を行くものではありません。</p>
                <p className='mb-4 text-base md:mb-8'>
                  私たちのアプローチは、プロジェクトの初動からデザインプロセスを深く組み込み、
                  <span className='font-sansBlack text-white'>デザインとエンジニアリングの融合</span>
                  を真の意味で実現しています。
                </p>
                <p className='mb-4 text-base md:mb-8'>
                  この独自のスタイルにより、アプリを通じてユーザーに感動的な体験を提供することが可能となっています。
                </p>
                <p className='mb-4 text-base md:mb-8'>
                  更に、ビジネスの成長を加速させるための手助けも私たちの得意分野です。
                </p>
                <p className='mb-4 text-base md:mb-8'>
                  CETは単なるアプリ開発者集団ではなく、
                  <span className='font-sansBlack text-white'>ビジネスパートナー</span>
                  としてお客様の成長をサポートします。私たちは市場のトレンドを分析し、ターゲットユーザーのニーズに合わせた最適な戦略を提供し、
                  <span className='font-sansBlack text-white'>アプリを通じてビジネスの拡大を実現</span>します。
                </p>
                <p className='text-base'>
                  私たちの提供するアプリの保守継続率が90%以上という結果は、私たちの品質とサービスへの継続的な取り組みを示しています。...
                </p>
              </div>
            </AnimationFadeInUp>
          </div>
        </div>
      </div>
    </>
  )
}
