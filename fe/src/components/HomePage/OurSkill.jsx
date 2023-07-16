import ButtonGoDown from '../Button'
import '../../scss/components/ourSkill.scss'
import Rectangle31 from '../../assets/images/rectangle31.png'
import Rectangle31Mobile from '../../assets/images/Rectangle31Mobile.png'
import {Link} from "react-router-dom";
import iconRow from "src/assets/images/iconRow.png";

export const OurSkill = () => {
  return (
    <>
      <div className='ourSkill flex flex-col bg-darkGray-900 relative heightSection'>
        <div className='ButtonGoDown absolute'>
          <ButtonGoDown target="Services"/>
        </div>
        <div className='flex h-full wrap-skillContent'>
          <div className='ourSkill-wrap-text flex flex-col text-white justify-items-start pt-6'>
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
              <div className='flex justify-center absolute button-link left-0 bottom-10'>
                <Link to='/contact' className=''>
                  <img src={iconRow} alt=''/>
                </Link>
                <span
                  className='top-2 text-white opacity-40 no-ww text-xs whitespace-nowrap flex items-center ml-3'>お問い合わせはこちら</span>
              </div>
            </div>


          </div>
          <div className='wrap-img h-5/6 w-full'>
            <img src={Rectangle31Mobile} className="w-full mobile" alt=""/>
            <img src={Rectangle31} alt='' className='h-full w-full pc'/>
          </div>
        </div>
      </div>
    </>
  )
}
