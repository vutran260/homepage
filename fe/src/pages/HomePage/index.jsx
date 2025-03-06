import React, { useContext, useEffect, useState } from 'react'
import { AboutUs } from 'src/components/HomePage/AboutUs'
import { Home } from 'src/components/HomePage/Home'
import { Portfolio } from 'src/components/HomePage/Portfolio'
import { Services } from 'src/components/HomePage/Services'
import { Teams } from 'src/components/HomePage/Teams'
import { Value } from 'src/components/HomePage/Value'
import { SideBar } from 'src/components/SideBar/SideBar'
import { useInView } from 'react-intersection-observer'
import 'src/scss/components/homePage.scss'
import { SideBarMobile } from 'src/components/SideBar/SideBarMobile.jsx'
import Footer from 'src/components/Footer'
import ClientFeedback from 'src/components/HomePage/ClientFeedback'
import { isMobile } from 'react-device-detect'

import { Element } from 'react-scroll'
import { AppContext } from 'src/contexts/app.context'
import { ButtonGoDown } from 'src/components/Button'
import { useLocation } from 'react-router-dom'
import CompanyInfo from 'src/components/HomePage/CompanyInfo'
import { Articles } from 'src/components/HomePage/Articles'
import VideoIntro from 'src/components/VideoIntro/VideoIntro.jsx'
import { Blogs } from 'src/components/HomePage/Blogs.jsx'

function Section({ children, id }) {
  const { inView, ref } = useInView({
    /* Optional options */
    threshold: 0.3
  })
  const { setMenuActive } = useContext(AppContext)
  useEffect(() => {
    if (inView) {
      setMenuActive(id)
    }
  }, [inView])

  return (
    <section ref={ref}>
      <div
        className='bg-black'
        style={{
          // transform: inView ? 'none' : 'translateY(200px)',
          // opacity: inView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default function HomePage() {
  const [position, setPosition] = useState('-100%')
  const HandleOpenSideBar = () => {
    setPosition('0')
  }
  const handleCloseSideBar = () => {
    setPosition('-100%')
  }

  let { state } = useLocation()
  useEffect(() => {
    if (state?.redirect) {
      const section = document.querySelector(`#${state?.redirect}`)
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }
  }, [])

  const { setting } = useContext(AppContext)
  const VIDEO_SEEN_KEY = 'introVideoSeen'

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

  const [scale, setScale] = useState(1)

  useEffect(() => {
    function handleResize() {
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
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {!isMobile && showIntroVideo && <VideoIntro onEnd={handleVideoEnd} />}
      <div className='min-h-screen'>
        {/*<Header HandleOpenSideBar={HandleOpenSideBar} />*/}
        <SideBarMobile position={position} handleCloseSideBar={handleCloseSideBar} />
        <SideBar shouldAnimate={shouldAnimate} />
        {setting?.banner && (
          <div className='mainContainerHome mx-auto flex h-full w-full justify-between'>
            <div className='placeSideBar'></div>
            <div className='mainHomeContent'>
              <div className='ButtonGoDown'>
                <ButtonGoDown />
              </div>
              <Element id='Home'>
                <Section id='Home'>
                  <Home shouldAnimate={shouldAnimate || isMobile} />
                </Section>
              </Element>
              <Element id='Portfolio' style={{ transform: `scale(${scale})` }}>
                <Section id='Portfolio'>
                  <Portfolio />
                </Section>
              </Element>
              {/*<Element id='Portfolio1'>*/}
              {/*  <Section id='Portfolio1'>*/}
              {/*    <SliderPortfolio />*/}
              {/*  </Section>*/}
              {/*</Element>*/}
              <Element id='Blogs' style={{ transform: `scale(${scale})` }}>
                <Section id='Blogs'>
                  <Blogs />
                </Section>
              </Element>
              <Element id='News' style={{ transform: `scale(${scale})` }}>
                <Section id='News'>
                  <Articles />
                </Section>
              </Element>
              <Element id='About_Us' style={{ transform: `scale(${scale})` }}>
                <Section id='About_Us'>
                  <AboutUs />
                </Section>
              </Element>
              <Element id='Services' style={{ transform: `scale(${scale})` }}>
                <Section id='Services'>
                  <Services />
                </Section>
              </Element>
              <Element id='Value' style={{ transform: `scale(${scale})` }}>
                <Section id='Value'>
                  <Value />
                </Section>
              </Element>
              <Element id='Team' style={{ transform: `scale(${scale})` }}>
                <Section id='Team'>
                  <Teams />
                </Section>
              </Element>
              <Element id='Feedback' style={{ transform: `scale(${scale})` }}>
                <Section id='Feedback'>
                  <ClientFeedback />
                </Section>
              </Element>
              <Element id='CompanyInfo' style={{ transform: `scale(${scale * 0.9})` }}>
                <Section id='CompanyInfo'>
                  <CompanyInfo />
                </Section>
              </Element>
              <Element id='Contact_Us' style={{ transform: `scale(${scale})` }}>
                <Section id='Contact_Us'>
                  <Footer />
                </Section>
              </Element>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
