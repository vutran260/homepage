import '../../scss/components/sidebarMobile.scss'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logomobile.png'
import close from '../../assets/images/close.png'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

export const SideBarMobile = ({position, handleCloseSideBar}) => {
  const { menuActive } = useContext(AppContext)
  const arrItemName = [
    'Home',
    'Portfolio',
    'News',
    'Articles',
    'About_Us',
    'Services',
    'Value',
    'Team',
    'Feedback',
    // 'CompanyInfo',
    'Contact_Us',
  ]
  const arrItemSideBar = [
    'ホーム',
    '実績',
    'ブログ',
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
    section.scrollIntoView({block: "start"});
    handleCloseSideBar()
  }

  return (

    <div className='sideBarMobile bg-darkGray-900' style={{transform: `translateX(${position})`}}>
      <div className="headerSideBarMobile flex justify-between p-4 items-center">
        <div className="w-13 h-13">
          <Link to="/">
            <img src={Logo} alt=""/>
          </Link>

        </div>
        <button onClick={handleCloseSideBar} className="cursor-pointer p-4">
          <img src={close} alt=""/>
        </button>
      </div>
      <div className="flex items-center flex-col justify-start items-baseline">
        <div>
          {arrItemSideBar.map((item, index) => (
            <div key={index} className='wrap-item-sideBar  flex justify-start'>
              <div className='border-left'></div>
              <div className='section-item scroll-sec2 flex cursor-pointer items-center leading-none'
              >
                <div className='dot'></div>
                <a name={arrItemName[index]} onClick={handleScrollToElement} className={menuActive === arrItemName[index] ? 'active' : ''} 
                >
                  <div className='fs-text'>{item}</div>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>

  )
}
