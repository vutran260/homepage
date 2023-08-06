import ButtonGoDown from '../Button'
import '../../scss/components/aboutUs.scss'
import Rectangle30 from '../../assets/images/Rectangle30.svg'
import Rectangle1Mobile from '../../assets/images/Rectangle1Mobile.png'
import Rectangle31Mb from '../../assets/images/Rectangle31Mobile.png'
import { AnimationInViewToTop } from '../Animation'

export const AboutUs = () => {
  return (
    <>
      <div className='aboutUS heightSection flex flex-col bg-darkGray-900'>
        <AnimationInViewToTop className='wrap-aboutContent mb-5 flex h-full gap-7 max-[500px]:justify-end'>
          <div className='wrap-img grayscale-image h-5/6 w-full'>
            <img src={Rectangle30} alt='' className='pc h-full w-full' />
            <img src={Rectangle1Mobile} className='mobile h-full w-full' alt='' />
          </div>
          <div className='aboutUS-wrap-text flex flex-col text-white'>
            <span className='mb-3'>About us</span>
            <span className='text-large aboutUs-text mb-4'>私たちについて</span>
            <p>
              CETのアプリ開発はエンジニアリングだけに特化せず、プロジェクトの初動からデザインプロセスを連動し、デザインとエンジニアリングを両立させた開発を実現しています。アプリを利用していただくユーザーに最高の体験を提供できることがCETの強みであり、ご依頼いただくお客様への最大の提供価値だと考えています。
            </p>
          </div>
        </AnimationInViewToTop>
        <AnimationInViewToTop className='wrap-aboutContent flex h-full gap-7 max-[700px]:flex-col max-[500px]:justify-end'>
          <div className='aboutUS-wrap-text flex flex-col text-white'>
            <span className='mb-3'>Skill</span>
            <span className='text-large aboutUs-text mb-4'>私たちについて</span>
            <p>
              マッチングアプリ、SNSアプリ、ライブ配信アプリ、音声配信アプリ、動画配信アプリ、NFTマーケットプレイス構築、etc...
              iOS/Androidに関してリリース経験が豊富にあるメンバーがマネジメントを行い、Kotlin、Swift、Objective-C
              を用いたネイティブアプリケーションから、一部がHTM5 + CSS + JavaScript
              のWebアプリケーションを組み込んだハイブリッド方式のアプリケーション、.
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
