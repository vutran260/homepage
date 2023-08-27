import portImage from '../../assets/images/portapp.png'
import '../../scss/components/CardPortfolio.scss'
import { Link } from 'react-router-dom'
import iconRow from '../../assets/images/iconRow.png'
import { AnimationInViewToLeft, AnimationInViewToTop } from '../Animation'
import ReactMarkdown from 'react-markdown'

export const CardPortfolio = (props) => {
  return (
    <>
      <div className='slider-item flex h-screen items-center justify-items-center gap-5 max-md:h-[70vh] max-[500px]:flex-wrap'>
        <AnimationInViewToTop delay={0} className='slider-text-left flex items-center'>
          <div className='flex  flex-col'>
            <Link to='/' className='linkText'>
              {props.domain}
            </Link>
            <span className='text-large text-white'>{props.title}</span>
            <span className='text-small break-words text-white'>
              {props.release_time} <br />
              <br />
              {props.technologies} <br />
              <br />
              <div className='leading-normal' dangerouslySetInnerHTML={{ __html: props.description }} />
              {/* <ReactMarkdown className='text-container overflow-hidden line-clamp-3'>{props.description}</ReactMarkdown> */}
            </span>
          </div>
        </AnimationInViewToTop>
        <AnimationInViewToTop className={`slider-image`} delay={0.5}>
          <div className='grayscale-image'>
            <img
              className='max-h-[500px] w-full'
              src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${props.thumpnail.data[0].attributes.url}`}
              alt='port'
            />
          </div>
        </AnimationInViewToTop>
      </div>
      <div className='slider-text-right bottom-0 flex h-full w-full items-center justify-start'>
        <AnimationInViewToLeft delay={0.2} className='absolute bottom-0 flex items-center gap-4 max-[500px]:flex-row'>
          <div className='flex w-full justify-center max-[500px]:mb-0'>
            <Link to={`/portfolio/${props.id}`} className=''>
              <img className='max-[500px]:h-10 max-[500px]:w-10' src={iconRow} alt='' />
            </Link>
          </div>
          <span className='top-2 break-keep text-white opacity-70 max-[500px]:text-[12px]'>詳細へ</span>
        </AnimationInViewToLeft>
      </div>{' '}
    </>
  )
}
