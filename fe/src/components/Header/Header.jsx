import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import logoMobile from '../../assets/images/Logomobile.png'
import MenuIcon from '../../assets/images/menuIcon.png'
import {useEffect, useState} from "react";

export default function Header({HandleOpenSideBar}) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='Header fixed top-0 top-0 left-0 z-10 z-50 flex h-24 w-full justify-between bg-darkGray-900 px-8'>
      <div className='w-1/2'>
        <div className='flex h-full items-center'>
          <Link to='/' className=''>
            <img src={windowSize?.width > 576 ? Logo : logoMobile} alt='Cet-App'/>
          </Link>
        </div>
      </div>
      <div className='flex w-1/2 justify-end'>
        <div className='flex h-full items-center Contact-pc'>
          <Link to='/contact' className='text-white'>
            CONTACT
          </Link>
        </div>
        <div className='h-full items-center menuIcon-mobile'>
          <button className="p-4" onClick={HandleOpenSideBar}>
            <img src={MenuIcon} alt=""/>
          </button>
        </div>
      </div>
    </div>
  )
}
