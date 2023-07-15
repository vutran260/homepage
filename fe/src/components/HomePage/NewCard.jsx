import {Link} from 'react-router-dom'
import '../../scss/components/newCard.scss'
import Rectangle from '../../assets/images/Rectangle26.png'

export function NewCard() {
  return (
    <>
      <div className='flex w-full flex-col newCard-mobile'>
        <div className='overflow-hidden rounded-md newCard-mobile-image'>
          <img src={Rectangle} alt='' className='w-full object-cover'/>
        </div>
        <div className='mt-5 wrap-text-right'>
          <Link to='/' className='text-textBlueCustom-900'>
            アプリ開発
          </Link>
          <p className='text-custom mt-2 font-medium text-white '>
            ライブ配信アプリの市場規模は？今からビジネス参入するのはアリ？
          </p>
        </div>
      </div>
    </>
  )
}
