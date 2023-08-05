import { useContext } from 'react'
import '../../scss/components/sideBar.scss'
import { AppContext } from '../../contexts/app.context'
import './styles.scss'
export const SideBar = () => {
  const { menuActive } = useContext(AppContext)
  const arrItemSideBar = [
    'Home',
    'Portfolio',
    'News',
    'About_Us',
    'Services',
    'Value',
    'Team',
    'Feedback',
    'Contact_Us'
  ]
  const arrNameSideBar = [
    'Home',
    'Portfolio',
    'News',
    'About Us',
    'Services',
    'Value',
    'Team',
    'Feedback',
    'Contact Us'
  ]
  const handleScrollToElement = (e) => {
    const section = document.querySelector( `#${e.currentTarget.name}` );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }
  return (
    <div className='section-items fixed top-1/2 -translate-y-1/2 transform'>
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
    </div>
  )
}
