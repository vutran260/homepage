import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToSection = (sectionId) => {
  const { state } = useLocation()

  useEffect(() => {
    if (state?.redirect) {
      const section = document.querySelector(`#${state.redirect || sectionId}`)
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }
  }, [state])
}

export default useScrollToSection
