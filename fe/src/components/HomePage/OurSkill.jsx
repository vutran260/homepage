import ButtonGoDown from '../Button'
import '../../scss/components/ourSkill.scss'
import Rectangle31 from '../../assets/images/rectangle31.png'
import {Link} from "react-router-dom";
import iconRow from "src/assets/images/iconRow.png";

export const OurSkill = () => {
  return (
    <>
      <div className='ourSkill flex flex-col bg-darkGray-900 relative'>
        <div className='ButtonGoDown absolute'>
          <ButtonGoDown/>
        </div>
        <div className='flex h-full'>
          <div className='ourSkill-wrap-text flex flex-col text-white justify-around'>
            <div className="flex flex-col">
              <span className='mb-3'>Skill</span>
              <span className='text-large mb-4'>私たちの技術</span>
              <p>
                マッチングアプリ、SNSアプリ、ライブ配信アプリ、音声配信アプリ、動画配信アプリ、NFTマーケットプレイス構築、etc...{' '}
                <br/>
                <br/>
                iOS/Androidに関してリリース経験が豊富にあるメンバーがマネジメントを行い、Kotlin、Swift、Objective-C
                を用いたネイティブアプリケーションから、一部がHTM5 + CSS + JavaScript
                のWebアプリケーションを組み込んだハイブリッド方式のアプリケーション、flutterを用いたネイティブアプリまで、お客様のご予算や特性に合わせて最適な開発プラットフォームを提案します。{' '}
              </p>
            </div>
            <div className='flex button-custom items-center pb-8'>
              <div className='mb-3 flex justify-center mr-3'>
                <Link to='/' className=''>
                  <img src={iconRow} alt=''/>
                </Link>
              </div>
              <span className='top-2 text-white opacity-40 no-ww text-xs whitespace-nowrap'>お問い合わせはこちら</span>
            </div>
          </div>
          <div className='wrap-img h-5/6 w-full'>
            <img src={Rectangle31} alt='' className='h-full w-full'/>
          </div>
        </div>
      </div>
    </>
  )
}
