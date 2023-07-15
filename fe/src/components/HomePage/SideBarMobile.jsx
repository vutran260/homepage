import '../../scss/components/sidebarMobile.scss'
import {Link} from 'react-router-dom'
import {Link as LinkSroll} from "react-scroll"
import Logo from '../../assets/images/Logomobile.png'
import close from '../../assets/images/close.png'
import {useState} from "react";

export const SideBarMobile = ({position, handleCloseSideBar}) => {
  const arrItemSideBar = [
    'Home',
    'Portfolio',
    'News',
    'About Us',
    'Our Skill',
    'Services',
    'Value',
    'Team',
    'Feedback',
    'Contact Us'
  ]

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
              <div className='section-item scroll-sec2 flex cursor-pointer items-center leading-none'>
                <div className='dot'></div>
                <LinkSroll to={item} activeClass="active" isDynamic={true} spy={true} smooth={true} offset={-96}
                           duration={500}
                >
                  <div className='fs-text'>{item}</div>
                </LinkSroll>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>

  )
}
