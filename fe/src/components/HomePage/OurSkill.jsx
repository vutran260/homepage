import ButtonGoDown from '../Button'
import '../../scss/components/ourSkill.scss'
import Rectangle31 from '../../assets/images/rectangle31.png'
import Rectangle31Mobile from '../../assets/images/Rectangle31Mobile.png'
import {Link} from "react-router-dom";
import iconRow from "src/assets/images/iconRow.png";

export const OurSkill = () => {
  return (
    <>
      <div className='ourSkill heightSection relative flex flex-col bg-darkGray-900'>
        <div className='ButtonGoDown absolute'>
          <ButtonGoDown target='Services' />
        </div>
        <div className='wrap-skillContent flex h-full'>
          <div className='ourSkill-wrap-text flex flex-col justify-items-start pt-6 text-white'>
            <div className='flex flex-col'>
              <span className='mb-3'>Skill</span>
              <span className='text-large mb-4'>私たちの技術</span>
              <p>
                マッチングアプリ、SNSアプリ、ライブ配信アプリ、音声配信アプリ、動画配信アプリ、NFTマーケットプレイス構築、etc...{' '}
                <br />
                <br />
                iOS/Androidに関してリリース経験が豊富にあるメンバーがマネジメントを行い、Kotlin、Swift、Objective-C
                を用いたネイティブアプリケーションから、一部がHTM5 + CSS + JavaScript
                のWebアプリケーションを組み込んだハイブリッド方式のアプリケーション、flutterを用いたネイティブアプリまで、お客様のご予算や特性に合わせて最適な開発プラットフォームを提案します。{' '}
              </p>
              <div className='button-link absolute left-0 bottom-10 flex justify-center'>
                <Link to='/contact' className=''>
                  <img src={iconRow} alt='' />
                </Link>
                <span className='no-ww top-2 ml-3 flex items-center whitespace-nowrap text-xs text-white opacity-40'>
                  お問い合わせはこちら
                </span>
              </div>
            </div>
          </div>
          <div className='wrap-img grayscale-image h-5/6 w-full'>
            <img src={Rectangle31Mobile} className='mobile w-full' alt='' />
            <img src={Rectangle31} alt='' className='pc h-full w-full' />
          </div>
        </div>
      </div>
    </>
  )
}
