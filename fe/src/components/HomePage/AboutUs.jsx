import '../../scss/components/aboutUs.scss'
import bgAboutUs from 'src/assets/images/bgAboutUs.png'
import bgAboutUs2 from 'src/assets/images/bgAboutUs2.png'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'

export const AboutUs = () => {
  return (
    <>
      <div
        className='aboutUS relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${bgAboutUs})` }}
      >
        <div className='px-4 py-4 md:px-28 md:py-16'>
          <div className='flex flex-wrap items-center'>
            <div className='z-10 w-full'>
              <AnimationFadeInUp shouldAnimate={true} index={0} className=' text-center'>
                <FlexibleGradient text='私たちについて' className='text-xl md:text-3xl' />
              </AnimationFadeInUp>

              <AnimationFadeInUp shouldAnimate={true} index={1} className=' text-center'>
                <h2 className='mt-2 mb-6 text-4xl font-bold text-white md:mb-8 md:text-6xl'>私たちについて</h2>
              </AnimationFadeInUp>

              <AnimationFadeInUp shouldAnimate={true} index={2}>
                <div className='w-full rounded-2xl border border-solid border-darkGray-600 bg-black-800 p-4 text-whiteGray-600 md:w-[800px] md:p-8'>
                  <p className='mb-4 md:mb-8'>
                    CETのアプリ開発は、単なるエンジニアリングの先端を行くものではありません。私たちのアプローチは、プロジェクトの初動からデザインプロセスを深く組み込み、デザインとエンジニアリングの融合を真の意味で実現しています。
                  </p>
                  <p className='mb-4 md:mb-8'>
                    この独自のスタイルにより、アプリを通じてユーザーに感動的な体験を提供することが可能となっています。
                  </p>
                  <p className='mb-4 md:mb-8'>更に、ビジネスの成長を加速させるための手助けも私たちの得意分野です。</p>
                  <p className='mb-4 md:mb-8'>
                    CETは単なるアプリ開発者集団ではなく、ビジネスパートナーとしてお客様の成長をサポートします。私たちは市場のトレンドを分析し、ターゲットユーザーのニーズに合わせた最適な戦略を提供し、アプリを通じてビジネスの拡大を実現します。
                  </p>
                  <p>
                    私たちの提供するアプリの保守継続率が90%以上という結果は、私たちの品質とサービスへの継続的な取り組みを示しています。...
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
    </>
  )
}
