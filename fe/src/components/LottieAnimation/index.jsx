import React from 'react'
import Lottie from 'react-lottie'

const LottieAnimation = ({ animationData, width, height, className, options }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const mergedOptions = { ...defaultOptions, ...options }

  return (
    <div className={className}>
      <Lottie options={mergedOptions} height={height} width={width} />
    </div>
  )
}

export default LottieAnimation
