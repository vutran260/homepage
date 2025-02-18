import persion from 'src/assets/images/persion.png'
import cardProfile from 'src/scss/components/cardProfile.scss'
import { useEffect, useRef } from 'react'

export const CardProfile = (props) => {
  const ref = useRef()
  const preventDefault = (e) => {
    e.preventDefault()
    return false
  }
  useEffect(() => {
    const element = ref.current
    element.addEventListener('touchmove', preventDefault, { passive: false })
    return () => {
      element.removeEventListener('touchmove', preventDefault, { passive: false })
    }
  }, [])
  return (
    <>
      <div className='wrapCard-profile' key={props.key}>
        <div className='grayscale-image square-container h-fit overflow-hidden rounded-xl' ref={ref}>
          <img
            src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${props.avatar}`}
            alt=''
            className='square-content w-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='mt-4 mb-1 flex justify-center truncate text-sm text-textBlueCustom-900'>
            {props.jobDescription}
          </span>
          <span className='textName mb-2 flex justify-center truncate text-2xl font-medium text-white'>
            {props.name}
          </span>
          <span className='flex justify-center truncate text-sm text-white'>{props.experience}</span>
          <span className='text-custom  mb-2 flex justify-center text-sm text-white'>{props.technologies}</span>
        </div>
      </div>
    </>
  )
}
