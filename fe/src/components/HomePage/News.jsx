import ButtonGoDown from '../Button'
import portfolio from '../../assets/images/portfolio.png'
import '../../scss/components/news.scss'
import {NewCard} from './NewCard'
import {Link} from 'react-router-dom'
import iconRow from '../../assets/images/iconRow.png'

export function News() {
  return (
    <>
      <div className='news b flex flex-col bg-darkGray-900 heightSection'>
        <div className='wrap-text flex flex-col'>
          <span className='mb-2 flex justify-center text-white LastPost-text'>Last post</span>
          <span className='ourNews flex justify-center text-white'>Our News</span>
        </div>
        <div>
          <div className='wap-item grid grid-cols-3 w-full gap-12 pt-8'>
            <NewCard/>
            <NewCard/>
            <NewCard/>
          </div>
          <div className="wrap-buttonCardNew">
            <div className='flex items-center'>
              <Link to='/' className='mr-3'>
                <img src={iconRow} alt=''/>
              </Link>
              <span className='top-2 text-white opacity-40 text-xs'>ニュース一覧</span>
            </div>
          </div>
        </div>
        <div className='ButtonGoDown'>
          <ButtonGoDown target="About Us"/>
        </div>
      </div>
    </>
  )
}
