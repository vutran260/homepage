import { AnimationFadeInUp, ContainerMotion, HoverFloatMotion } from 'src/components/Animation/index.jsx'
import ProjectBasicInfo from 'src/components/Portfolio/ProjectBasicInfo.jsx'
import CardGradient from 'src/components/Gradient/CardGradient.jsx'
import React from 'react'

const PortfolioData = ({ portfolio }) => {
  if (!portfolio) return null

  const {
    attributes: { title, image }
  } = portfolio

  const getImageUrl = (imageData, index = 0) => {
    if (!imageData || !imageData.data || !imageData.data[index]) {
      return ''
    }

    const url = imageData.data[index].attributes.url
    return url.startsWith('http') ? url : `${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${url}`
  }

  return (
    <ContainerMotion className='flex flex-col md:flex-row md:justify-between'>
      <div className='w-[368px]'>
        <div className='p-4 text-center md:text-left'>
          <ProjectBasicInfo portfolio={portfolio} />
        </div>
      </div>

      {/* First image */}
      {image && image.data && image.data.length > 0 && (
        <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={4}>
          <HoverFloatMotion>
            <CardGradient className='h-[600px] w-full rounded-lg border border-solid border-darkGray-600 px-4 pt-6 text-center md:w-[455px] md:px-6'>
              <p className='mb-6 text-2xl text-white'>STEP① 出発地を指定</p>
              <div>
                <img src={getImageUrl(image, 0)} className='h-full w-full object-contain' alt={title} />
              </div>
            </CardGradient>
          </HoverFloatMotion>
        </AnimationFadeInUp>
      )}

      {/* Second image */}
      {image && image.data && image.data.length > 1 && (
        <AnimationFadeInUp delay={0.1} shouldAnimate={true} index={5}>
          <HoverFloatMotion>
            <CardGradient className='h-[600px] w-full rounded-lg border border-solid border-darkGray-600 px-4 pt-6 text-center md:w-[500px] md:pl-8 md:pr-0'>
              <p className='mb-6 text-xl text-white'>お迎え希望の位置をマップ上で指定。「ここに呼ぶ」</p>
              <img src={getImageUrl(image, 1)} className='h-full w-full' alt={title} />
            </CardGradient>
          </HoverFloatMotion>
        </AnimationFadeInUp>
      )}
    </ContainerMotion>
  )
}

export default PortfolioData
