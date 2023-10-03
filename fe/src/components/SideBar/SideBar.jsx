import { useContext } from 'react'
import '../../scss/components/sideBar.scss'
import { AppContext } from '../../contexts/app.context'
import './styles.scss'
import { AnimationInViewToLeft, AnimationInViewToTop } from '../Animation'
export const SideBar = () => {
  let { menuActive } = useContext(AppContext)
  if(menuActive == 'Portfolio1') menuActive = 'Portfolio'
  const arrItemSideBar = [
    'Home',
    'Portfolio',
    'News',
    'About_Us',
    'Services',
    'Value',
    'Team',
    'Feedback',
    'CompanyInfo',
    'Contact_Us'
  ]
  const arrNameSideBar = [
    'ホーム',
    '実績',
    'ニュース',
    '私たちについて',
    'サービス',
    '価値提供',
    'チームについて',
    'フィードバック',
    '会社概要',
    'お問い合わせ'
  ]
  const handleScrollToElement = (e) => {
    const section = document.querySelector( `#${e.currentTarget.name}` );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }
  return (
    <div className='section-items fixed top-1/2 -translate-y-1/2 transform'>
      <AnimationInViewToLeft>
        {arrItemSideBar.map((item, index) => (
          <div key={index} className='wrap-item-sideBar'>
            <div className='border-left'></div>
            <div className='section-item scroll-sec2 flex cursor-pointer items-center leading-none'>
              <div className={menuActive === item ? 'active dot' : 'dot'}></div>
              <a name={item} onClick={handleScrollToElement} className={menuActive === item ? 'active' : ''}>
                <div className='fs-11'>{arrNameSideBar[index]}</div>
              </a>
            </div>
          </div>
        ))}
      </AnimationInViewToLeft>
    </div>
  )
}
