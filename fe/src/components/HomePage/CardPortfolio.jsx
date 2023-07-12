import portImage from '../../assets/images/portapp.png'
import '../../scss/components/CardPortfolio.scss'
import {Link} from 'react-router-dom'
import iconRow from '../../assets/images/iconRow.png'

export const CardPortfolio = () => {
  return (
    <>
      <div className='slider-item flex items-center justify-items-center'>
        <div className='slider-text-left flex h-full items-center'>
          <div className='flex  flex-col'>
            <Link to='/' className='linkText'>
              ショッピングアプリ
            </Link>
            <span className='text-large text-white'>
              投げ銭型ライブ
              <br/>
              配信アプリ
            </span>
            <span className='text-small break-words text-white'>
              10ヶ月（要件定義～納品） FLUTTER,node.js,FIREBASE,AWS,agora.io <br/><br/>
              50時間 <br/><br/>
              配信中に多人数でのゲームが可能。多人数配信も可能且つ、多彩な機能を搭載しております。VCバトル、多人数配信、ゲーム配信、大手ライブ配信アプリに備わっている約8割の機能を備えております。
            </span>
          </div>
        </div>
        <div className='slider-image'>
          <img src={portImage} alt='port'/>
        </div>
        <div className='slider-text-right flex h-full items-center justify-center'>
          <div className='flex flex-col'>
            <div className='mb-3 flex w-full justify-center'>
              <Link to='/' className=''>
                <img src={iconRow} alt=''/>
              </Link>
            </div>
            <span className='top-2 text-white opacity-40'>VISIT THIS SITE</span>
          </div>
        </div>
      </div>
      {' '}
    </>
  )
}
