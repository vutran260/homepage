import Slider from 'react-slick'
import ButtonGoDown from '../../components/Button'
import { Link } from 'react-router-dom'
import portImage from '../../assets/images/portapp.png'
import iconRow from '../../assets/images/iconRow.png'
import '../../scss/components/sliderCommon.scss'
import './style.scss'
import CloseIcon from '../../components/Icon/CloseIcon'
import { useEffect, useState } from 'react'
import http from '../../utils/http'
const CardPortfolio = (props) => {
  return (
    <>
      <div className='slider-item flex items-center justify-items-center max-[768px]:flex-wrap'>
        <div className='slider-image'>
          <img src={props.thumpnail} alt='port' />
        </div>
        <div className='slider-text-left flex h-full items-center'>
          <div className='flex flex-col text-white'>
            <span className='text-large mb-7 text-white'>{props.title}</span>
            <div className='mb-5 flex max-md:mb-4'>
              <span className='min-w-[75px] text-blue'>期間 : </span>
              <span className='ml-6'>{props.release_time}</span>
            </div>
            <div className='mb-5 flex'>
              <span className='min-w-[75px] text-blue'>媒体 : </span>
              <span className='ml-6'>ios, android</span>
            </div>
            <div className='mb-5 flex'>
              <span className='min-w-[75px] text-blue'>主な技術 : </span>
              <span className='ml-6 text-blue'>{props.technologies}</span>
            </div>
            <div className='mb-5 flex'>
              <span className='min-w-[75px] text-blue'>Website : </span>
              <span className='ml-6'>{props.website}</span>
            </div>
            <div className='mb-5 flex'>
              <span className='min-w-[75px] text-blue'>導入 : </span>
              <span className='ml-6'>{props.description}</span>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  )
}

const ArrowLeft = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M2.51089 11.4629C2.51112 11.4627 2.51131 11.4624 2.51158 11.4622L6.47591 7.51701C6.7729 7.22146 7.25326 7.22256 7.54889 7.51959C7.84448 7.81658 7.84334 8.29695 7.54635 8.59254L4.8847 11.2413H20.9522C21.3713 11.2413 21.7109 11.581 21.7109 12C21.7109 12.419 21.3713 12.7587 20.9522 12.7587H4.88474L7.54631 15.4074C7.8433 15.703 7.84444 16.1834 7.54885 16.4804C7.25323 16.7774 6.77282 16.7785 6.47587 16.483L2.51154 12.5377C2.51131 12.5375 2.51112 12.5373 2.51086 12.537C2.21371 12.2405 2.21466 11.7585 2.51089 11.4629Z'
      fill='white'
    />
  </svg>
)

const ArrowRight = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M21.4891 11.4629C21.4889 11.4627 21.4887 11.4624 21.4884 11.4622L17.5241 7.51701C17.2271 7.22146 16.7467 7.22256 16.4511 7.51959C16.1555 7.81658 16.1567 8.29695 16.4537 8.59254L19.1153 11.2413H3.04776C2.62873 11.2413 2.28906 11.581 2.28906 12C2.28906 12.419 2.62873 12.7587 3.04776 12.7587H19.1153L16.4537 15.4074C16.1567 15.703 16.1556 16.1834 16.4511 16.4804C16.7468 16.7774 17.2272 16.7785 17.5241 16.483L21.4885 12.5377C21.4887 12.5375 21.4889 12.5373 21.4891 12.537C21.7863 12.2405 21.7853 11.7585 21.4891 11.4629Z'
      fill='white'
    />
  </svg>
)

function ArrowCustomLeft(props) {
  const { className, style, onClick } = props
  const styles = {
    position: 'absolute',
    left: '2rem',
    bottom: 0,
    cursor: 'pointer'
  }
  return (
    <div style={{ ...style, display: 'block', ...styles }} onClick={onClick}>
      {props.children}
    </div>
  )
}
function ArrowCustomRight(props) {
  const { className, style, onClick } = props
  const styles = {
    position: 'absolute',
    right: '50%',
    bottom: 0,
    cursor: 'pointer'
  }
  return (
    <div style={{ ...style, display: 'block', ...styles }} onClick={onClick}>
      {props.children}
    </div>
  )
}

function Portfolio() {
  const [data, setData] = useState([])
  const fetchPortfolios = async () => {
    const res = await http.get(`portfolios?populate=*`)
    console.log(res.data.data)
    setData(res.data.data)
  } 

  useEffect(() => {
    fetchPortfolios()
  },[])

  const settings = {
    customPaging: function (i) {
      return <span className='w-full'>0{i + 1}</span>
    },
    dots: true,
    prevArrow: (
      <ArrowCustomLeft className='arrowLeft'>
        <ArrowLeft />
      </ArrowCustomLeft>
    ),
    nextArrow: (
      <ArrowCustomRight className='arrowRight'>
        <ArrowRight />
      </ArrowCustomRight>
    ),
    dotsClass: 'slick-slide-common w-50 max-lg:w-full',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <div className='slider-home slider-portfolio relative'>
        <CloseIcon />
        <Slider {...settings} className='slider-common'>
          {data.map(function(portfolio, index) {
            return (
              <CardPortfolio
                key={portfolio.id}
                title={portfolio.attributes.title}
                release_time={portfolio.attributes.release_time}
                technologies={portfolio.attributes.technologies}
                website={portfolio.attributes.website}
                description={portfolio.attributes.description}
                thumpnail={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${
                  portfolio.attributes.image.data.attributes.url
                }`}
              />
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default Portfolio
