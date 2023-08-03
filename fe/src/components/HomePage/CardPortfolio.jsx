import portImage from '../../assets/images/portapp.png'
import '../../scss/components/CardPortfolio.scss'
import { Link } from 'react-router-dom'
import iconRow from '../../assets/images/iconRow.png'

export const CardPortfolio = (props) => {
  return (
    <>
      <div className='slider-item flex items-center justify-items-center gap-5 max-[500px]:flex-wrap'>
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
        <div className='slider-image grayscale-image'>
          <img className='w-full' src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${props.thumpnail}`} alt='port' />
        </div>
      </div>
      <div className='slider-text-right bottom-0 flex h-full w-full items-center justify-start'>
        <div className='absolute items-center gap-4 bottom-0 flex max-[500px]:flex-row'>
          <div className='flex w-full justify-center max-[500px]:mb-0'>
            <Link to='/portfolio' className=''>
              <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
            </Link>
          </div>
          <span className='top-2 break-keep text-white opacity-70 max-[500px]:text-[12px]'>詳細へ</span>
        </div>
      </div>{' '}
    </>
  )
}
