import '../../scss/components/sideBar.scss'
import {Link} from "react-scroll";

export const SideBar = () => {
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

    <div className='section-items fixed top-1/2 -translate-y-1/2 transform'>
      {arrItemSideBar.map((item, index) => (
        <div key={index} className='wrap-item-sideBar'>
          <div className='border-left'></div>
          <div className='section-item scroll-sec2 flex cursor-pointer items-center leading-none'>
            <div className='dot'></div>
            <Link to={item} activeClass="active" isDynamic={true} spy={true} smooth={true}
                  offset={-96} duration={500}
            >
              <div className='fs-11'>{item}</div>
            </Link>

          </div>
        </div>
      ))}
    </div>
  )
}
