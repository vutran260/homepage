import React, { useContext } from 'react'
import { AboutUs } from 'src/components/HomePage/AboutUs'
import { Home } from 'src/components/HomePage/Home'
import { Portfolio } from 'src/components/HomePage/Portfolio'
import { Services } from 'src/components/HomePage/Services'
import { Teams } from 'src/components/HomePage/Teams'
import { Value } from 'src/components/HomePage/Value'
import { SideBar } from 'src/components/SideBar/SideBar'
import 'src/scss/components/homePage.scss'
import { SideBarMobile } from 'src/components/SideBar/SideBarMobile.jsx'
import Footer from 'src/components/Footer'
import ClientFeedback from 'src/components/HomePage/ClientFeedback'
import { isMobile } from 'react-device-detect'

import { Element } from 'react-scroll'
import { AppContext } from 'src/contexts/app.context'
import CompanyInfo from 'src/components/HomePage/CompanyInfo'
import { Articles } from 'src/components/HomePage/Articles'
import VideoIntro from 'src/components/VideoIntro/VideoIntro.jsx'
import { Blogs } from 'src/components/HomePage/Blogs.jsx'
import useResponsiveScale from 'src/hooks/useResponsiveScale.jsx'
import useIntroVideo from 'src/components/VideoIntro/useIntroVideo.jsx'
import useScrollToSection from 'src/hooks/useScrollToSection.jsx'
import { Section } from 'src/components/HomeSection/HomeSection.jsx'
import http from 'src/utils/http.js'
import infoCompanyApi from 'src/apis/infoCompany.api.js'

export default function HomePage() {
  const { setting } = useContext(AppContext)
  const { showIntroVideo, shouldAnimate, handleVideoEnd } = useIntroVideo()
  useScrollToSection()
  const scale = useResponsiveScale()

  const fetchPortfolios = async () => {
    return http.get(`portfolios?populate=*`)
  }

  const fetchBlogs = async () => {
    return await http.get(`posts?populate=*&pagination[page]=1&pagination[pageSize]=10&sort=createdAt:desc`)
  }

  const fetchNews = async () => {
    return await http.get(`articles?populate=*&pagination[page]=1&pagination[pageSize]=3&sort=createdAt:desc`)
  }

  const fetchTeams = async () => {
    return await http.get(`teams?populate=*`)
  }

  const fetchFeedbacks = async () => {
    return await http.get(`feedbacks?populate=*`)
  }

  const fetchCompanyInfo = async () => {
    return await infoCompanyApi.getInfoCompany()
  }

  return (
    <>
      {!isMobile && showIntroVideo && <VideoIntro onEnd={handleVideoEnd} />}
      <div className='min-h-screen'>
        <SideBarMobile />
        <SideBar shouldAnimate={shouldAnimate} />
        <div className='flex'>
          <div className='mainHomeContent'>
            <Element id='Home'>
              <Section id='Home'>
                <Home shouldAnimate={shouldAnimate || isMobile} />
              </Section>
            </Element>
            <Element id='Portfolio' style={{ transform: `scale(${scale})` }}>
              <Section id='Portfolio' loadData={fetchPortfolios} bgLoadingClass='bg-dark-1'>
                <Portfolio />
              </Section>
            </Element>
            <Element id='Blogs' style={{ transform: `scale(${scale})` }}>
              <Section id='Blogs' loadData={fetchBlogs} bgLoadingClass='bg-light-1'>
                <Blogs />
              </Section>
            </Element>
            <Element id='News' style={{ transform: `scale(${scale})` }}>
              <Section id='News' loadData={fetchNews} bgLoadingClass='bg-light-2'>
                <Articles />
              </Section>
            </Element>
            <Element id='About_Us' style={{ transform: `scale(${scale})` }}>
              <Section id='About_Us' bgLoadingClass='bg-aboutUs'>
                <AboutUs />
              </Section>
            </Element>
            <Element id='Services' style={{ transform: `scale(${scale})` }}>
              <Section id='Services' bgLoadingClass='bg-dark-1'>
                <Services />
              </Section>
            </Element>
            <Element id='Value' style={{ transform: `scale(${scale})` }}>
              <Section id='Value' bgLoadingClass='bg-aboutUs'>
                <Value />
              </Section>
            </Element>
            <Element id='Team' style={{ transform: `scale(${scale})` }}>
              <Section id='Team' loadData={fetchTeams} bgLoadingClass=' bg-light-2'>
                <Teams />
              </Section>
            </Element>
            <Element id='Feedback' style={{ transform: `scale(${scale})` }}>
              <Section id='Feedback' loadData={fetchFeedbacks} bgLoadingClass='bg-light-2'>
                <ClientFeedback />
              </Section>
            </Element>
            <Element id='CompanyInfo' style={{ transform: `scale(${scale * 0.9})` }}>
              <Section id='CompanyInfo' loadData={fetchCompanyInfo} bgLoadingClass='bg-light-2'>
                <CompanyInfo />
              </Section>
            </Element>
            <Element id='Contact_Us' style={{ transform: `scale(${scale})` }}>
              <Section id='Contact_Us' bgLoadingClass='bg-light-2'>
                <Footer />
              </Section>
            </Element>
          </div>
        </div>
      </div>
    </>
  )
}
