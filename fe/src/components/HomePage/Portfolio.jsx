import '../../scss/components/portfolio.scss'
import portfolio from '../../assets/images/portfolio.png'
import ButtonGoDown from '../Button'

export function Portfolio() {
  return (
    <>
      <div className='portfolio heightSection bg-darkGray-900'>
        <div className='flex flex-col justify-center pt-4'>
          <div className='portfolio-text flex flex-col text-white'>
            <span>What We’ve Done</span>
            <span className='text'>Portfolio</span>
          </div>
          <div className='wrap-img grayscale-image'>
            <img src={portfolio} alt='' />
          </div>
        </div>
        <div className='ButtonGoDown'>
          <ButtonGoDown target='Portfolio1' />
        </div>
      </div>
    </>
  )
}
