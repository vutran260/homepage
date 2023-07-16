import classNames from 'classnames'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { AppContext } from '../../contexts/app.context'
export default function LogoFixed({ fixed }) {
  const {setting} = useContext(AppContext)
  return (
    <div className={classNames({ fixed: fixed }, 'top-0 h-[110px] w-full bg-transparent py-4 pl-4')}>
      <Link to='/'>
        <img
          className='h-[40px] w-[40px]'
          src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${setting?.logo?.data.attributes.url}`}
          alt=''
        />
      </Link>
    </div>
  )
}
