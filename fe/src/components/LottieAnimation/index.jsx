import React, { useState, useEffect, memo } from 'react'
import Lottie from 'react-lottie'
import { useInView } from 'react-intersection-observer'

const LottieAnimation = memo(({ animationData, width, height, className, options, priority = false }) => {
  const [isPaused, setIsPaused] = useState(!priority)
  const [isLoaded, setIsLoaded] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  const defaultOptions = React.useMemo(
    () => ({
      loop: true,
      autoplay: !isPaused,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
        hideOnTransparent: true
      }
    }),
    [animationData, isPaused]
  )

  const mergedOptions = { ...defaultOptions, ...options }

  useEffect(() => {
    if (!isPaused && !inView && !priority) {
      setIsPaused(true)
    } else if (isPaused && (inView || priority)) {
      const timer = setTimeout(() => setIsPaused(false), 100)
      return () => clearTimeout(timer)
    }
  }, [inView, priority, isPaused])

  const handleLottieLoad = () => {
    setIsLoaded(true)
  }

  if (!priority && !inView && !isLoaded) {
    return <div ref={ref} className={className} style={{ width, height }} />
  }

  return (
    <div
      ref={(el) => {
        ref(el)
      }}
      className={`lottie-container ${className || ''}`}
      style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
    >
      <Lottie
        options={mergedOptions}
        height={height}
        width={width}
        isPaused={isPaused}
        eventListeners={[
          {
            eventName: 'DOMLoaded',
            callback: handleLottieLoad
          }
        ]}
      />
    </div>
  )
})

LottieAnimation.displayName = 'LottieAnimation'

export default LottieAnimation
