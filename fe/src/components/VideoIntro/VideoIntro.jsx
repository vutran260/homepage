import React, { useEffect, useRef } from 'react'
import videoIntro from '../../assets/videos/intro.mp4'

const VideoIntro = ({ onEnd }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }

    const handleVideoEnd = () => {
      if (onEnd) {
        onEnd()
      }
    }

    videoRef.current.addEventListener('ended', handleVideoEnd)

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [onEnd])

  return (
    <div style={styles.videoContainer} className='z-[1000]'>
      <video ref={videoRef} style={styles.video} controls={false} muted loop={false}>
        <source src={videoIntro} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

const styles = {
  videoContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: 'black'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}

export default VideoIntro
