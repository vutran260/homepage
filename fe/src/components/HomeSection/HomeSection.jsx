import React, { useContext, useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { AppContext } from 'src/contexts/app.context.jsx'

export const Section = ({ children, id, loadData, bgLoadingClass = 'bg-black' }) => {
  const { inView, ref } = useInView({
    /* Optional options */
    threshold: 0.1
  })
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(!!loadData)
  const timerRef = useRef(null)

  const { setMenuActive } = useContext(AppContext)

  useEffect(() => {
    if (inView) {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        setMenuActive(id)
      }, 300)
    }

    // Cleanup function to clear the timer when component unmounts or inView changes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [inView, id, setMenuActive])

  useEffect(() => {
    if (inView && loadData && !data) {
      setLoading(true)
      loadData()
        .then((fetchedData) => {
          setData(fetchedData.data.data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error loading data:', error)
          setLoading(false)
        })
    }
  }, [inView, id, loadData, data, setMenuActive])

  const ChildrenWithData = () => {
    const child = React.Children.only(children)
    return React.cloneElement(child, { data: data })
  }

  const LoadingState = () => (
    <div className={`flex h-screen w-full items-center justify-center ${bgLoadingClass}`}></div>
  )

  return (
    <section ref={ref} id={id} className='section-container h-full'>
      <div
        className='h-full bg-black'
        style={{
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {loadData ? loading ? <LoadingState /> : <ChildrenWithData /> : children}
      </div>
    </section>
  )
}
