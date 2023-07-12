import '../../scss/components/sideBar.scss'
import {Link} from "react-scroll";

export const SideBar = () => {
  const arrItemSideBar = [
    'Home',
    'Portfolio',
    'News',
    'About us',
    'Our skill',
    'Services',
    'Value',
    'Team',
    'Feedback',
    'Contact us'
  ]
  return (

    <div className='side-bar fixed left-0 top-0 z-40 h-full bg-darkGray-900'>
      <div className='section-items fixed top-1/2 -translate-y-1/2 transform'>
        {arrItemSideBar.map((item, index) => (
          <div key={index} className='wrap-item-sideBar'>
            <div className='border-left'></div>
            <div className='section-item scroll-sec2 flex cursor-pointer items-center leading-none'>
              <div className='dot'></div>
              <Link to={item} activeClass="active" isDynamic={true} spy={true} smooth={true} offset={-96} duration={500}
              >
                <div className='fs-11'>{item}</div>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
