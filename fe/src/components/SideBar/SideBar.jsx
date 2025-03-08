import React, { useContext } from 'react'
import 'src/scss/components/sideBar.scss'
import { AppContext } from 'src/contexts/app.context'
import LogoNew from 'src/assets/images/LogoNew.png'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'

export const SideBar = ({ shouldAnimate }) => {
  let { menuActive, setMenuActive } = useContext(AppContext)
  if (menuActive == 'Portfolio1') menuActive = 'Portfolio'
  const arrItemSideBar = [
    'Home',
    'Portfolio',
    'Blogs',
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

  const handleScrollToElement = (targetName) => {
    const section = document.querySelector(`#${targetName}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <AnimationFadeInUp className='bottom-sidebar' shouldAnimate={shouldAnimate} fixedElement={true}>
      <div className='bottom-sidebar'>
        <div className='nav-line-wrapper'>
          <div className='nav-line'>
            <div className='logo-wrapper'>
              <img
                src={LogoNew}
                onClick={() => handleScrollToElement('Home')}
                alt='Logo'
                className='nav-logo cursor-pointer'
                width={40}
                height={40}
              />
            </div>
            <nav className='nav-menu-wrapper'>
              <div className='nav-menu-list_wrap'>
                <div className='nav-menu-list'>
                  {arrItemSideBar.map((item, index) => (
                    <a
                      name={item}
                      onClick={() => handleScrollToElement(item)}
                      className={`nav-link ${menuActive === item ? 'active' : ''}`}
                      key={index}
                    >
                      {arrNameSideBar[index]}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </AnimationFadeInUp>
  )
}
