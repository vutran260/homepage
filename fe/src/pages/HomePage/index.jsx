import React, { useContext, useEffect, useState } from 'react'
import { AboutUs } from '../../components/HomePage/AboutUs'
import { Home } from '../../components/HomePage/Home'
import { Portfolio } from '../../components/HomePage/Portfolio'
import { Services } from '../../components/HomePage/Services'
import { Teams } from '../../components/HomePage/Teams'
import { Value } from '../../components/HomePage/Value'
import { SideBar } from '../../components/SideBar/SideBar'
import { useInView } from 'react-intersection-observer'
import '../../scss/components/homePage.scss'
import { SideBarMobile } from 'src/components/SideBar/SideBarMobile.jsx'
import Footer from '../../components/Footer'
import ClientFeedback from '../../components/HomePage/ClientFeedback'
import { isMobile } from 'react-device-detect'

import { Element } from 'react-scroll'
import { AppContext } from '../../contexts/app.context'
import { ButtonGoDown } from 'src/components/Button'
import { useLocation } from 'react-router-dom'
import CompanyInfo from '../../components/HomePage/CompanyInfo'
import { Articles } from '../../components/HomePage/Articles'
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

  const [showIntroVideo, setShowIntroVideo] = useState(true)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  const handleVideoEnd = () => {
    setShowIntroVideo(false)
    setShouldAnimate(true)
  }

  return (
    <>
      {!isMobile && showIntroVideo && <VideoIntro onEnd={handleVideoEnd} />}
      <div className='min-h-screen bg-darkGray-900'>
        {/*<Header HandleOpenSideBar={HandleOpenSideBar} />*/}
        <SideBarMobile position={position} handleCloseSideBar={handleCloseSideBar} />
        <SideBar shouldAnimate={shouldAnimate} />
        {setting?.banner && (
          <div className='mainContainerHome mx-auto flex h-full w-full justify-between'>
            <div className='placeSideBar bg-darkGray-900'></div>
            <div className='mainHomeContent'>
              <div className='ButtonGoDown'>
                <ButtonGoDown />
              </div>
              <Element id='Home'>
                <Section id='Home'>
                  <Home shouldAnimate={shouldAnimate || isMobile} />
                </Section>
              </Element>
              <Element id='Portfolio'>
                <Section id='Portfolio'>
                  <Portfolio />
                </Section>
              </Element>
              {/*<Element id='Portfolio1'>*/}
              {/*  <Section id='Portfolio1'>*/}
              {/*    <SliderPortfolio />*/}
              {/*  </Section>*/}
              {/*</Element>*/}
              <Element id='Blogs'>
                <Section id='Blogs'>
                  <Blogs />
                </Section>
              </Element>
              <Element id='News'>
                <Section id='News'>
                  <Articles />
                </Section>
              </Element>
              <Element id='About_Us'>
                <Section id='About_Us'>
                  <AboutUs />
                </Section>
              </Element>
              <Element id='Services'>
                <Section id='Services'>
                  <Services />
                </Section>
              </Element>
              <Element id='Value'>
                <Section id='Value'>
                  <Value />
                </Section>
              </Element>
              <Element id='Team'>
                <Section id='Team'>
                  <Teams />
                </Section>
              </Element>
              <Element id='Feedback'>
                <Section id='Feedback'>
                  <ClientFeedback />
                </Section>
              </Element>
              <Element id='CompanyInfo'>
                <Section id='CompanyInfo'>
                  <CompanyInfo />
                </Section>
              </Element>
              <Element id='Contact_Us'>
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
