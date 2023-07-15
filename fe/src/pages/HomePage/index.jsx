import Header from '../../components/Header'
import {Home} from '../../components/HomePage/Home'
import {SideBar} from '../../components/SideBar/SideBar'
import {Portfolio} from '../../components/HomePage/Portfolio'
import {SliderPortfolio} from '../../components/HomePage/SliderPortfolio.jsx'
import {News} from '../../components/HomePage/News'
import {AboutUs} from '../../components/HomePage/AboutUs'
import {OurSkill} from '../../components/HomePage/OurSkill'
import {Services} from '../../components/HomePage/Services'
import {Value} from '../../components/HomePage/Value'
import {Teams} from '../../components/HomePage/Teams'
import '../../scss/components/homePage.scss'
import {useEffect, useState} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Footer from '../../components/Footer'
import ClientFeedback from '../../components/HomePage/ClientFeedback'
import {Element} from 'react-scroll'
import {SideBarMobile} from "src/components/HomePage/SideBarMobile.jsx";

const boxVariant = {
  visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
  hidden: {opacity: 0, scale: 0}
}

const AnimationHome = ({num, scrollToNextSection, isActive, children}) => {
  const control = useAnimation()
  const [ref, inView] = useInView({threshold: 0.5})

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      className={`box ${isActive ? 'active' : ''}`}
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const scrollToNextSection = () => {
    setActiveSection((prevSection) => prevSection + 1);
    const nextSectionOffset = (activeSection + 1) * window.innerHeight;
    window.scrollTo({top: nextSectionOffset, behavior: 'smooth'});
  };

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
        <Header HandleOpenSideBar={HandleOpenSideBar}/>
        <SideBar/>
        <SideBarMobile position={position} handleCloseSideBar={handleCloseSideBar}/>
        <div className='mainContainerHome flex h-full w-full justify-between pt-24'>
          <div className='placeSideBar bg-darkGray-900'></div>
          <div className='mainHomeContent'>
            <Element id="Home">
              <AnimationHome>
                <Home/>
              </AnimationHome>
            </Element>
            <Element id="Portfolio">
              <AnimationHome>
                <Portfolio/>
              </AnimationHome>
            </Element>
            <Element id="Portfolio1">
              <AnimationHome>
                <SliderPortfolio/>
              </AnimationHome>
            </Element>
            <Element id="News">
              <AnimationHome>
                <News/>
              </AnimationHome>
            </Element>
            <Element id="About Us">
              <AnimationHome>
                <AboutUs/>
              </AnimationHome>
            </Element>
            <Element id="Our Skill">
              <AnimationHome>
                <OurSkill/>
              </AnimationHome>
            </Element>
            <Element id="Services">
              <AnimationHome>
                <Services/>
              </AnimationHome>
            </Element>
            <Element id="Value">
              <AnimationHome>
                <Value/>
              </AnimationHome>
            </Element>
            <Element id="Team">
              <AnimationHome>
                <Teams/>
              </AnimationHome>
            </Element>
            <Element id="Feedback">
              <AnimationHome>
                <ClientFeedback/>
              </AnimationHome>
            </Element>
            <Element id="Contact Us">
              <AnimationHome>
                <Footer/>
              </AnimationHome>
            </Element>
          </div>
        </div>
      </div>
    </>
  )
}
