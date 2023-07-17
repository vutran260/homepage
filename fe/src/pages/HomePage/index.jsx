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
import {useEffect, useRef, useState} from 'react'
import {useAnimation, motion, useInView} from 'framer-motion'
// import {useInView} from 'react-intersection-observer'
import Footer from '../../components/Footer'
import ClientFeedback from '../../components/HomePage/ClientFeedback'
import {Element} from 'react-scroll'
import {SideBarMobile} from "src/components/HomePage/SideBarMobile.jsx";

const boxVariant = {
  visible: {opacity: 1, right: 0, transition: {duration: 0.75}},
  hidden: {opacity: 0.5, right: 110}
}

function Section({ children }) {
  const ref = useRef(null);
  // const {inView} = useInView({
  //   threshold: 0
  // });
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
  );
}

// const AnimationHome = ({isActive, children}) => {
//   const control = useAnimation()
//   const [ref, inView] = useInView({threshold: 0.2})
//   useEffect(() => {
//     console.log(control);
//     if (inView) {
//       control.start('visible')
//     } else {
//       control.start('hidden')
//     }
//   }, [control, inView])
//   console.log('23');
//   return (
//     <motion.div
//       className={`box ${isActive ? 'active' : ''}`}
//       ref={ref}
//       variants={boxVariant}
//       initial='hidden'
//       animate={control}
//       transition={{ duration: 0.5, type: 'tween', ease: 'linear' }}
//     >
//       {children}
//     </motion.div>
   
//   )
// }

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
        <Header HandleOpenSideBar={HandleOpenSideBar}/>
        <SideBar/>
        <SideBarMobile position={position} handleCloseSideBar={handleCloseSideBar}/>
        <div className='mainContainerHome flex h-full w-full justify-between pt-24 mx-auto'>
          <div className='placeSideBar bg-darkGray-900'></div>
          <div className='mainHomeContent'>
            <Element id="Home">
              <Section>
                <Home/>
              </Section>
            </Element>
            <Element id="Portfolio">
              <Section>
                <Portfolio/>
              </Section>
            </Element>
            <Element id="Portfolio1">
              <Section>
                <SliderPortfolio/>
              </Section>
            </Element>
            <Element id="News">
              <Section>
                <News/>
              </Section>
            </Element>
            <Element id="About Us">
              <Section>
                <AboutUs/>
              </Section>
            </Element>
            <Element id="Our Skill">
              <Section>
                <OurSkill/>
              </Section>
            </Element>
            <Element id="Services">
              <Section>
                <Services/>
              </Section>
            </Element>
            <Element id="Value">
              <Section>
                <Value/>
              </Section>
            </Element>
            <Element id="Team">
              <Section>
                <Teams/>
              </Section>
            </Element>
            <Element id="Feedback">
              <Section>
                <ClientFeedback/>
              </Section>
            </Element>
            <Element id="Contact Us">
              <Section>
                <Footer/>
              </Section>
            </Element>
          </div>
        </div>
      </div>
    </>
  )
}
