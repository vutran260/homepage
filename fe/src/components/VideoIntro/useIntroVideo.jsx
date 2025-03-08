import { useState } from 'react'
import { isMobile } from 'react-device-detect'

const VIDEO_SEEN_KEY = 'introVideoSeen'

const useIntroVideo = () => {
  const [showIntroVideo, setShowIntroVideo] = useState(() => {
    const hasSeenVideo = sessionStorage.getItem(VIDEO_SEEN_KEY) === 'true'
    return !hasSeenVideo && !isMobile
  })

  const [shouldAnimate, setShouldAnimate] = useState(() => {
    const hasSeenVideo = sessionStorage.getItem(VIDEO_SEEN_KEY) === 'true'
    return hasSeenVideo || isMobile
  })

  const handleVideoEnd = () => {
    sessionStorage.setItem(VIDEO_SEEN_KEY, 'true')
    setShowIntroVideo(false)
    setShouldAnimate(true)
  }

  return {
    showIntroVideo,
    shouldAnimate,
    handleVideoEnd
  }
}

export default useIntroVideo
