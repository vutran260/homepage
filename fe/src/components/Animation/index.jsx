import { motion, useAnimation } from 'framer-motion'
import { useCallback, useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'

export const AnimationWrap = ({ children }) => (
  <motion.div style={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
    {children}
  </motion.div>
)

export const AnimationInViewToLeft = ({ children, delay = 0.5, duration = 0.5, className, id }) => {
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

export const AnimationInViewToTop = ({ children, delay = 0, duration = 1, className }) => {
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

export const AnimationOpacity = ({ children, delay = 0, duration = 1, className }) => {
  const { inView, ref } = useInView({
    threshold: 0.5
  })
  return (
    <motion.div
      ref={ref}
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

export const AnimationFadeInUp = ({
  children,
  shouldAnimate = true,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  duration = 1.5,
  dangerouslySetInnerHTML,
  fixedElement = false,
  index = 0,
  onAnimationComplete,
  delay = 0.3,
  mobileBreakpoint = 768,
  ...rest
}) => {
  // Use memo to avoid recreating these objects on every render
  const initialState = useMemo(() => initial, [])
  const animateState = useMemo(() => animate, [])
  const controls = useAnimation()
  const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint })

  // Skip animation completely if on mobile
  const shouldUseAnimation = shouldAnimate && !isMobile

  // Optimize InView by only tracking when necessary
  const inViewOptions = useMemo(
    () => ({
      threshold: 0.1, // Lower threshold for better performance
      triggerOnce: true,
      // Disable tracking when not needed
      skip: fixedElement || !shouldUseAnimation
    }),
    [fixedElement, shouldUseAnimation]
  )

  const [ref, inView] = useInView(inViewOptions)

  // Memoize the animation function to prevent recreation on every render
  const startAnimation = useCallback(async () => {
    // If animation is disabled or on mobile, just set to final state
    if (!shouldUseAnimation) {
      await controls.set(animateState)
      onAnimationComplete?.()
      return
    }

    if (inView || fixedElement) {
      // Reset to initial state
      await controls.set(initialState)

      // Start animation with delay based on index
      await controls.start({
        ...animateState,
        transition: {
          duration,
          ease: 'easeOut',
          delay: index * delay
        }
      })

      onAnimationComplete?.()
    } else {
      // Reset to initial state when out of view
      await controls.set(initialState)
    }
  }, [
    controls,
    inView,
    fixedElement,
    initialState,
    animateState,
    duration,
    index,
    delay,
    onAnimationComplete,
    shouldUseAnimation
  ])

  // Run animation effect with proper dependencies
  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  // For mobile or when animations are disabled, render without motion
  if (!shouldUseAnimation) {
    return (
      <div className={className} dangerouslySetInnerHTML={dangerouslySetInnerHTML} {...rest}>
        {children}
      </div>
    )
  }

  // For desktop with animations enabled
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialState}
      animate={controls}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * HoverScaleMotion - Wrapper component that scales on hover
 */
export const HoverScaleMotion = ({ children, scale = 1.05, duration = 0.2, className = '', ...props }) => {
  return (
    <motion.div className={className} whileHover={{ scale }} transition={{ duration }} {...props}>
      {children}
    </motion.div>
  )
}

/**
 * HoverFloatMotion - Wrapper component that floats up on hover
 * @param {ReactNode} children - Child components to render
 */
export const HoverFloatMotion = ({ children, y = -5, duration = 0.3, className = '', ...props }) => {
  return (
    <motion.div className={className} whileHover={{ y }} transition={{ duration }} {...props}>
      {children}
    </motion.div>
  )
}

/**
 * InteractiveMotion - Wrapper component with hover and tap animations
 * Useful for interactive elements like buttons
 */
export const InteractiveMotion = ({
  children,
  hoverScale = 1.02,
  tapScale = 0.98,
  duration = 0.2,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ duration }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * ItemMotion - Item component for staggered animations
 * Used within ContainerMotion for orchestrated animations
 */
export const ItemMotion = ({
  children,
  className = '',
  variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  },
  ...props
}) => {
  return (
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  )
}

/**
 * ContainerMotion - Container component for staggered children animations
 * Orchestrates the animation of child components
 */
export const ContainerMotion = ({
  children,
  className = '',
  staggerDelay = 0.1,
  variants = null,
  initial = 'hidden',
  animate = 'show',
  ...props
}) => {
  const defaultVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={variants || defaultVariants}
      initial={initial}
      animate={animate}
      {...props}
    >
      {children}
    </motion.div>
  )
}
