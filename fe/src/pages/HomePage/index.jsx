// import { useInView } from 'framer-motion'
import  React, { useContext, useEffect, useRef, useState } from 'react'
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
import { AppContext } from '../../contexts/app.context'

function Section({ children, id }) {
  // const ref = useRef(null)
  // const ref = useRef(null);
  const { inView, ref } = useInView({
    /* Optional options */
    threshold: 0.5
  })
  const {setMenuActive} = useContext(AppContext)
  if(inView) {
    setMenuActive(id)
  }
  return (
    <section ref={ref}>
      <div
        style={{
          transform: inView ? 'none' : 'translateY(200px)',
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
        <div className='mainContainerHome mx-auto flex h-full w-full justify-between'>
          <div className='placeSideBar bg-darkGray-900'></div>
          <div className='mainHomeContent'>
              <Element id='Home'>
                <Section id='Home'>
                  <Home />
                </Section>
              </Element>
              <Element id='Portfolio'>
                <Section id='Portfolio'>
                  <Portfolio />
                </Section>
              </Element>
              <Element id='Portfolio'>
                <Section id='Portfolio'>
                  <SliderPortfolio />
                </Section>
              </Element>
              <Element id='News'>
                <Section id='News'>
                  <News />
                </Section>
              </Element>
              <Element id='About_Us'>
                <Section id='About_Us'>
                  <AboutUs />
                </Section>
              </Element>
              <Element id='Our_Skill'>
                <Section id='Our_Skill'>
                  <OurSkill />
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
              <Element id='Contact_Us'>
                <Section id='Contact_Us'>
                  <Footer />
                </Section>
              </Element>
          </div>
        </div>
      </div>
    </>
  )
}
