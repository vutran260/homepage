import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
export default function LogoFixed() {
  return (
    <div className='top-0 w-full bg-transparent py-4 pl-4'>
      <Link to='/'>
        <img className='h-[40px] w-[40px]' src={Logo} alt='' />
      </Link>
    </div>
  )
}
