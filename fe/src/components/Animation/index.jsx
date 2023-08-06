import { motion } from 'framer-motion'
import { Fragment, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { AppContext } from '../../contexts/app.context'

export const AnimationWrap = ({ children }) => (
  <motion.div style={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
    {children}
  </motion.div>
)

export const AnimationInViewToLeft = ({ children, delay = 1, duration = 1.5, className, id }) => {
  const { inView, ref } = useInView({
    threshold: 0.5
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: '50%' }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? '0' : '50%' }}
      transition={{ duration: duration, ease: [0.17, 0.55, 0.55, 1], delay: delay }}
      id={id}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimationInViewToTop = ({ children, delay = 0.5, duration = 1.5, className }) => {
  const { inView, ref } = useInView({
    threshold: 0.5
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: '100px' }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : '100px' }}
      transition={{ duration: duration, ease: [0.17, 0.55, 0.55, 1], delay: delay }}
      className={className}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export const AnimationOpacity = ({ children, delay = 1.5, duration = 2, className, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: duration, ease: [0, 0, 0.58, 1], delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimationFullPage = ({ children, delay = 1.5, duration = 2 }) => {
  const { inView, ref } = useInView({
    threshold: 0.5
  })
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 1, y: '0%' }}
        animate={{ opacity: inView ? 1 : 1, y: inView ? '-100%' : '0' }} // Giá trị x chuyển từ 0 (trung tâm) đến -100 (trái 100%)
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        className='h-sceen fixed inset-0 z-[1000000] w-screen bg-[#191C22]'
      >
        {children}
      </motion.div>
    </div>
  )
}
