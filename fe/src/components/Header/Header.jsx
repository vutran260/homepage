import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
export default function Header() {
  return (
    <div className='fixed top-0 top-0 left-0 z-10 z-50 flex h-24 w-full justify-between bg-darkGray-900 px-8'>
      <div className='w-1/2'>
        <div className='flex h-full items-center'>
          <Link to='/' className=''>
            <img src={Logo} alt='Cet-App' />
          </Link>
        </div>
      </div>
      <div className='flex w-1/2 justify-end'>
        <div className='flex h-full items-center  '>
          <Link to='/contact' className='text-white'>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}
