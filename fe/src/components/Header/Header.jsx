import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import logoMobile from '../../assets/images/Logomobile.png'
import MenuIcon from '../../assets/images/menuIcon.png'
import {useContext, useEffect, useState} from "react";
import { AppContext } from '../../contexts/app.context';

export default function Header({HandleOpenSideBar}) {
    const { setting } = useContext(AppContext)

  return (
    <div className='Header fixed top-0 left-0 z-50 flex h-24 w-full justify-between bg-darkGray-900 px-8'>
      <div className='w-1/2'>
        <div className='flex h-full items-center'>
          <Link to='/' className=''>
            <img
              src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${setting?.logo?.data.attributes.url}`}
              className='w-12 h-12 max-md:w-10 max-md:h-10'
              alt='Cet-App'
            />
          </Link>
        </div>
      </div>
      <div className='flex w-1/2 justify-end'>
        <div className='Contact-pc flex h-full items-center'>
          <Link to='/contact' className='text-white'>
            CONTACT
          </Link>
        </div>
        <div className='menuIcon-mobile h-full items-center'>
          <button className='p-4' onClick={HandleOpenSideBar}>
            <img src={MenuIcon} alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}
