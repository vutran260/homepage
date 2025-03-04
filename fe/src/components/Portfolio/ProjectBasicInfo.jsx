import { AnimationFadeInUp, HoverScaleMotion, InteractiveMotion } from 'src/components/Animation/index.jsx'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ButtonGradient } from 'src/components/Button/index.js'
import React from 'react'
import technical1 from 'src/assets/images/technical1.png'
import technical2 from 'src/assets/images/technical2.png'
import technical3 from 'src/assets/images/technical3.png'
import technical4 from 'src/assets/images/technical4.png'
import technical5 from 'src/assets/images/technical5.png'
import technical6 from 'src/assets/images/technical6.png'

const ProjectBasicInfo = ({ portfolio, shouldAnimate = true, centerTech = null, hideButton = false }) => {
  if (!portfolio) return null

  const {
    id,
    attributes: { title, domain, release_time, technologies, image }
  } = portfolio

  const techArray = technologies ? technologies.split(',').map((tech) => tech.trim()) : []
  const techImages = [technical1, technical2, technical3, technical4, technical5, technical6]

  const technicalSkills = techArray.slice(0, 6).map((name, index) => ({
    name,
    image: techImages[index % techImages.length]
  }))

  // Determine alignment for tech skills
  // If centerTech is explicitly set, use that value
  // Otherwise default to responsive behavior (center on mobile, left on desktop)
  const techAlignment =
    centerTech !== null
      ? centerTech
        ? 'justify-center items-center'
        : 'justify-start'
      : 'justify-center md:justify-start'

  return (
    <>
      <AnimationFadeInUp delay={0.1} shouldAnimate={shouldAnimate} index={0}>
        <FlexibleGradient text={domain || 'アプリ制作'} className='mb-5 text-3xl' />
      </AnimationFadeInUp>

      <AnimationFadeInUp delay={0.1} shouldAnimate={shouldAnimate} index={1}>
        <p className='mb-5 text-4xl text-white md:text-5xl'>{title}</p>
      </AnimationFadeInUp>

      <AnimationFadeInUp delay={0.1} shouldAnimate={shouldAnimate} index={2}>
        <p className='mb-5 text-xl text-whiteGray-600'>{release_time}</p>
      </AnimationFadeInUp>

      <AnimationFadeInUp delay={0.1} shouldAnimate={shouldAnimate} index={3}>
        <p className='mb-2 text-xl text-whiteGray-600'>テクノロジー</p>
      </AnimationFadeInUp>

      <AnimationFadeInUp delay={0.1} shouldAnimate={shouldAnimate} index={3} className={`flex`}>
        <motion.div
          className={`mb-10 grid w-[218px] grid-cols-3 gap-2 md:flex md:w-full md:flex-wrap  ${techAlignment}`}
        >
          {technicalSkills.map((item, index) => (
            <HoverScaleMotion
              key={index}
              className='inline-block w-[66px] items-center justify-center rounded-[10px] border border-solid border-whiteGray-100 p-2'
            >
              <img src={item.image} alt={item.name} />
            </HoverScaleMotion>
          ))}
        </motion.div>
      </AnimationFadeInUp>

      {!hideButton && (
        <AnimationFadeInUp delay={0.1} shouldAnimate={shouldAnimate} index={6}>
          <Link to={`/portfolio/${id}`} className=''>
            <ButtonGradient className='h-[80px] w-full px-[40px] py-[10px] md:w-[320px]'>
              プロジェクト情報
            </ButtonGradient>
          </Link>
        </AnimationFadeInUp>
      )}
    </>
  )
}

export default ProjectBasicInfo
