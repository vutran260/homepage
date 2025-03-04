import 'src/scss/components/sliderCommon.scss'
import './style.scss'
import CloseIcon from 'src/components/Icon/CloseIcon'
import React, { useEffect, useState } from 'react'
import http from 'src/utils/http'
import { useParams } from 'react-router-dom'
import ProjectBasicInfo from 'src/components/Portfolio/ProjectBasicInfo.jsx'
import { AnimationWrap } from 'src/components/Animation/index.jsx'

const CardPortfolio = (props) => {
  return (
    <>
      <div className='slider-item flex items-start justify-items-center max-[768px]:flex-wrap'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='mb-5 text-center'>
            <div className='leading-normal' dangerouslySetInnerHTML={{ __html: props.description }} />
          </div>
          {props.thumpnail.map(function (img) {
            return (
              <img key={img.id} src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${img.attributes.url}`} alt='port' />
            )
          })}
        </div>
      </div>
    </>
  )
}

function Portfolio() {
  let { id } = useParams()
  const [data, setData] = useState()
  const fetchPortfolio = async () => {
    const res = await http.get(`portfolios/${id}?populate=*`)
    setData(res.data.data)
  }
  useEffect(() => {
    fetchPortfolio()
  }, [])

  return (
    <div className='page-detail-container bg-dark-1'>
      <CloseIcon redirect={`Portfolio`} />
      {data && (
        <AnimationWrap>
          <div className='text-center'>
            <ProjectBasicInfo shouldAnimate={false} portfolio={data} centerTech={true} hideButton={true} />
          </div>
          <CardPortfolio
            key={data.id}
            title={data.attributes.title}
            release_time={data.attributes.release_time}
            media={data.attributes.media}
            technologies={data.attributes.technologies}
            website={data.attributes.website}
            description={data.attributes.description}
            thumpnail={data.attributes.image.data}
          />
        </AnimationWrap>
      )}
    </div>
  )
}

export default Portfolio
