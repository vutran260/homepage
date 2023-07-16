import portImage from '../../assets/images/portapp.png'
import '../../scss/components/CardPortfolio.scss'
import { Link } from 'react-router-dom'
import iconRow from '../../assets/images/iconRow.png'

export const CardPortfolio = (props) => {
  return (
    <>
      <div className='slider-item flex items-center justify-items-center max-[500px]:flex-wrap gap-5'>
        <div className='slider-text-left flex h-full items-center'>
          <div className='flex  flex-col'>
            <Link to='/' className='linkText'>
              ショッピングアプリ
            </Link>
            <span className='text-large text-white'>{props.title}</span>
            <span className='text-small break-words text-white'>
              {props.release_time} <br />
              <br />
              {props.technologies} <br />
              <br />
              {props.description}
            </span>
          </div>
        </div>
        <div className='slider-image'>
          <img src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${props.thumpnail}`} alt='port' />
        </div>
      </div>
      <div className='slider-text-right flex h-full items-center justify-center'>
        <div className='flex flex-col max-[500px]:flex-row'>
          <div className='mb-3 flex w-full justify-center max-[500px]:mb-0'>
            <Link to='/portfolio' className=''>
              <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
            </Link>
          </div>
          <span className='top-2 text-white opacity-70 max-[500px]:text-[12px]'>VISIT THIS SITE</span>
        </div>
      </div>{' '}
    </>
  )
}
