import '../../scss/components/aboutUs.scss'
import Rectangle31Mb from '../../assets/images/skills.png'
import Rectangle31Mb2 from '../../assets/images/about-us.png'
import { AnimationInViewToTop } from '../Animation'

export const AboutUs = () => {
  return (
    <>
      <div className='aboutUS heightSection flex flex-col bg-darkGray-900'>
        <AnimationInViewToTop className='wrap-aboutContent mb-10 flex h-full gap-7 max-[500px]:justify-end'>
          <div className='wrap-img grayscale-image h-5/6 w-full'>
            <img src={Rectangle31Mb2} alt='' className='pc h-full w-full' />
            <img src={Rectangle31Mb2} className='mobile h-full w-full' alt='' />
          </div>
          <div className='aboutUS-wrap-text flex flex-col text-white'>
            <span className='mb-3'>About us</span>
            <span className='text-large aboutUs-text mb-4'>私たちについて</span>
            <div className='text-container'>
              <p className='leading-normal opacity-80'>
                CETのアプリ開発は、単なるエンジニアリングの先端を行くものではありません。私たちのアプローチは、プロジェクトの初動からデザインプロセスを深く組み込み、デザインとエンジニアリングの融合を真の意味で実現しています。
                <br />
                <br />
                この独自のスタイルにより、アプリを通じてユーザーに感動的な体験を提供することが可能となっています。
                <br />
                <br />
                更に、ビジネスの成長を加速させるための手助けも私たちの得意分野です。
                <br />
                <br />
                CETは単なるアプリ開発者集団ではなく、ビジネスパートナーとしてお客様の成長をサポートします。私たちは市場のトレンドを分析し、ターゲットユーザーのニーズに合わせた最適な戦略を提供し、アプリを通じてビジネスの拡大を実現します。
                <br />
                <br />
                私たちの提供するアプリの保守継続率が90%以上という結果は、私たちの品質とサービスへの継続的な取り組みを示しています。
                <br />
                <br />
                CETとの関係は、一度のプロジェクトだけで終わるものではありません。私たちの専門知識と熱意をもってサポートし続けることで、お客様からの再度のご依頼もいただいています。これは、私たちがお客様のビジネスの成長をサポートするパートナーであることを示しています。
                <br />
                <br />
              </p>
              <div className='leading-normal opacity-80'>
                CETとの協力は、単なるアプリ開発以上の価値をもたらします。私たちはユーザーに良好な体験を提供するだけでなく、お客様のビジネスの拡大を心から応援するパートナーです。私たちのビジョンや経験、ビジネスの成長への専門的な知識とともに、次のステップへと進むお手伝いをさせていただけませんか？
              </div>
            </div>
          </div>
        </AnimationInViewToTop>
        <AnimationInViewToTop className='wrap-aboutContent flex h-full gap-7 max-[700px]:flex-col max-[500px]:justify-end'>
          <div className='aboutUS-wrap-text flex flex-col text-white'>
            <span className='mb-3'>Skill</span>
            <span className='text-large aboutUs-text mb-4'>私たちの技術</span>
            <p className='text-font font-normal leading-normal text-white opacity-80'>
              CETでは、200以上のさまざまなアプリの構築を手掛けてきました。それには、マッチングアプリやSNSアプリ、ライブや音声、動画配信アプリ、さらにはNFTマーケットプレイスの構築など、多岐にわたる経験があります。私たちのチームには、iOSやAndroidでのリリース経験を豊富に持つプロフェッショナルが在籍しており、FlutterやKotlin、Swift、Objective-Cを活用したネイティブアプリケーションの開発はもちろん、React.jsやAngular.js、Vue.jsを組み込んだハイブリッドアプリケーションの構築も得意としています。
              <br /> <br />
              さらに、最先端の技術を取り入れることも忘れません。AIエンジニアとの連携により、画像や文字の認識AIをアプリに組み込むことができます。ゴルフの姿勢分析やQAチャットボットの制作など、多岐にわたるプロジェクトを手掛けてきた実績があります。CETは、技術の革新とクリエイティブな発想で、お客様のニーズに応じたアプリを提供いたします。
            </p>
          </div>
          <div className='wrap-img grayscale-image h-5/6 w-full'>
            <img src={Rectangle31Mb} alt='' className='pc h-full w-full' />
            <img src={Rectangle31Mb} className='mobile h-full w-full' alt='' />
          </div>
        </AnimationInViewToTop>
      </div>
    </>
  )
}
