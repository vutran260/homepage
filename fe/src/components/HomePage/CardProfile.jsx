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
      <div key={props.key} className='px-0'>
        <div className='grayscale-image square-container h-fit overflow-hidden rounded-xl' ref={ref}>
          <img
            src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${props.avatar}`}
            alt=''
            className='square-content h-[300px] w-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='mt-4 flex justify-start truncate text-base text-blueCustom-100 md:text-xl'>
            {props.jobDescription}
          </span>
          <span className='textName flex justify-start truncate text-xl font-medium text-white md:text-3xl'>
            {props.name}
          </span>
          <span className='flex justify-start truncate text-base text-white md:text-xl'>{props.experience}</span>
          <span className='flex justify-start text-base text-white md:text-xl'>
            {props.technologies}
          </span>
        </div>
      </div>
    </>
  )
}
