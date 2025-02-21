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
            className='square-content h-[320px] w-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='mt-4 mb-1 flex justify-start truncate text-xl text-blueCustom-100'>
            {props.jobDescription}
          </span>
          <span className='textName mb-2 flex justify-start truncate text-3xl font-medium text-white'>
            {props.name}
          </span>
          <span className='flex justify-start truncate text-xl text-white'>{props.experience}</span>
          <span className='text-custom  mb-2 flex justify-start text-xl text-white'>{props.technologies}</span>
        </div>
      </div>
    </>
  )
}
