import { useEffect, useState } from 'react'

const useResponsiveScale = () => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1500
      const targetHeight = 768
      const isMobile = window.innerWidth <= 768

      if (isMobile) {
        setScale(1)
      } else {
        if (window.innerHeight < targetHeight) {
          const scaleWidth = window.innerWidth / targetWidth
          const scaleHeight = window.innerHeight / targetHeight
          let newScale = Math.min(scaleWidth, scaleHeight)

          const minScale = 0.6
          newScale = Math.max(Math.min(newScale, 1.0), minScale)

          setScale(newScale * 0.95)
        } else {
          setScale(1)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Gọi ngay một lần khi hook được khởi tạo

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return scale
}

export default useResponsiveScale
