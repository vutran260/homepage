import React, { useState, useContext } from 'react'
import { AppContext } from 'src/contexts/app.context.jsx'
import LogoNew from 'src/assets/images/LogoNew.png'
import 'src/scss/components/sidebarMobile.scss'
import closeIcon from 'src/assets/images/closeIcon.png'
import ToggleSideBarIcon from 'src/components/Icon/ToggleSideBarIcon/index.jsx'

export const SideBarMobile = () => {
  const { menuActive, setMenuActive } = useContext(AppContext)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  const handleItemClick = (e) => {
    const itemName = e.currentTarget.name
    setMenuActive(itemName === 'Portfolio1' ? 'Portfolio' : itemName)
    handleScrollToElement(e.currentTarget.name)
    setIsDrawerOpen(false)
  }

  const handleScrollToElement = (targetName) => {
    const section = document.querySelector(`#${targetName}`)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeIndex = arrItemSideBar.findIndex(
    (item) => item === (menuActive === 'Portfolio1' ? 'Portfolio' : menuActive)
  )
  const centerText = activeIndex !== -1 ? arrNameSideBar[activeIndex] : 'ホーム'

  return (
    <div className='mobile-sidebar'>
      {isDrawerOpen && (
        <div className='drawer-overlay' onClick={() => setIsDrawerOpen(false)}>
          <div className='drawer-content' onClick={(e) => e.stopPropagation()}>
            {arrItemSideBar.map((item, index) => {
              const itemName = item === 'Portfolio1' ? 'Portfolio' : item
              return (
                <a
                  key={item}
                  name={item}
                  onClick={handleItemClick}
                  className={`drawer-item ${menuActive === itemName ? 'active' : ''}`}
                >
                  {arrNameSideBar[index]}
                </a>
              )
            })}
          </div>
        </div>
      )}
      <div className='mobile-nav-bar'>
        <img src={LogoNew} alt='Logo' className='mobile-logo' onClick={() => handleScrollToElement('Home')} />
        <span className='nav-center-text cursor-pointer' onClick={handleToggleDrawer}>
          {centerText}
        </span>
        <button className='toggle-btn' onClick={handleToggleDrawer} aria-label='Toggle menu'>
          {isDrawerOpen ? <img src={closeIcon} width={20} height={20} alt='' /> : <ToggleSideBarIcon />}
        </button>
      </div>
    </div>
  )
}
