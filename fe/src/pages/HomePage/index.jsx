// import { useInView } from 'framer-motion'
import  React, { useEffect, useRef, useState } from 'react'
import PageScroll from 'react-page-scroll'
import Header from '../../components/Header'
import { AboutUs } from '../../components/HomePage/AboutUs'
import { Home } from '../../components/HomePage/Home'
import { News } from '../../components/HomePage/News'
import { OurSkill } from '../../components/HomePage/OurSkill'
import { Portfolio } from '../../components/HomePage/Portfolio'
import { Services } from '../../components/HomePage/Services'
import { SliderPortfolio } from '../../components/HomePage/SliderPortfolio.jsx'
import { Teams } from '../../components/HomePage/Teams'
import { Value } from '../../components/HomePage/Value'
import { SideBar } from '../../components/SideBar/SideBar'
import { useInView } from 'react-intersection-observer'
import '../../scss/components/homePage.scss'
// import { Element } from 'react-scroll'
import { SideBarMobile } from "src/components/HomePage/SideBarMobile.jsx"
import Footer from '../../components/Footer'
import ClientFeedback from '../../components/HomePage/ClientFeedback'

import { Element, scroller } from 'react-scroll'

function Section({ children }) {
  // const ref = useRef(null)
  // const ref = useRef(null);
  const { inView, ref } = useInView({
    /* Optional options */
    threshold: 0.5
  })
  // console.log(inView)
  return (
    <section ref={ref}>
      <div
        style={{
          transform: inView ? 'none' : 'translateX(200px)',
          opacity: inView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default function HomePage() {
  const [position, setPosition] = useState("-100%");
  const HandleOpenSideBar = () => {
    setPosition("0")

  }
  const handleCloseSideBar = () => {
    setPosition("-100%")
  }
  return (
    <>
      <div className='min-h-screen bg-darkGray-900'>
        <Header HandleOpenSideBar={HandleOpenSideBar} />
        <SideBar />
        <SideBarMobile position={position} handleCloseSideBar={handleCloseSideBar} />
        <div className='mainContainerHome mx-auto flex h-full w-full justify-between pt-24'>
          <div className='placeSideBar bg-darkGray-900'></div>
          <div className='mainHomeContent'>
            {/* <PageScroll height='calc(100vh)' width='auto'> */}
              <Element id='Home'>
                <Section>
                  <Home />
                </Section>
              </Element>
              <Element id='Portfolio'>
                <Section>
                  <Portfolio />
                </Section>
              </Element>
              <Element id='Portfolio1'>
                <Section>
                  <SliderPortfolio />
                </Section>
              </Element>
              <Element id='News'>
                <Section>
                  <News />
                </Section>
              </Element>
              <Element id='About Us'>
                <Section>
                  <AboutUs />
                </Section>
              </Element>
              <Element id='Our Skill'>
                <Section>
                  <OurSkill />
                </Section>
              </Element>
              <Element id='Services'>
                <Section>
                  <Services />
                </Section>
              </Element>
              <Element id='Value'>
                <Section>
                  <Value />
                </Section>
              </Element>
              <Element id='Team'>
                <Section>
                  <Teams />
                </Section>
              </Element>
              <Element id='Feedback'>
                <Section>
                  <ClientFeedback />
                </Section>
              </Element>
              <Element id='Contact Us'>
                <Section>
                  <Footer />
                </Section>
              </Element>
            {/* </PageScroll> */}
          </div>
        </div>
      </div>
    </>
  )
}
