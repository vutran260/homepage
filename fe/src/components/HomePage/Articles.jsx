import { useEffect, useState } from 'react'
import http from 'src/utils/http.js'
import 'src/scss/components/news.scss'
import bgFeatureImage from 'src/assets/images/bgFeatureImage.png'
import bgNewCard from 'src/assets/images/bgNewCard.png'
import LogoNew from 'src/assets/images/LogoNew.png'
import newImage1 from 'src/assets/images/newImage1.png'
import newImage2 from 'src/assets/images/newImage2.png'
import newImage3 from 'src/assets/images/newImage3.png'
import { AnimationFadeInUp } from '../Animation'
import { NewCard } from './NewCard'
import { ButtonGradient } from 'src/components/Button/index.js'

export function Articles() {
  const [data, setData] = useState([])
  const fetchNews = async () => {
    const res = await http.get(`articles?populate=*&pagination[page]=1&pagination[pageSize]=3&sort=createdAt:desc`)

    setData(res.data.data)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className='page-container bg-light-2'>
      {/* Header */}
      <AnimationFadeInUp shouldAnimate={true} index={0}>
        <header className='between mb-8 flex-col md:mb-4 md:flex-row'>
          <h1 className='text-5xl font-bold tracking-widest md:text-4xl'>最新ニュース</h1>
          <ButtonGradient className='mt-8 w-full md:mt-0 md:w-[160px]' height={50} radius={16} fontSize={20}>
            もっと見る
          </ButtonGradient>
        </header>
      </AnimationFadeInUp>
      <div className='grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-6'>
        {/* Featured News Card - Takes 1 column */}
        <AnimationFadeInUp
          shouldAnimate={true}
          index={1}
          className='flex cursor-pointer flex-col rounded-2xl bg-cover bg-center bg-no-repeat p-4'
          style={{ backgroundImage: `url(${bgNewCard})` }}
        >
          <div className='mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-darkGray-600 px-4 py-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
            <div className='h-2 w-2 rounded-full bg-green-400'></div>
            <span className='text-sm font-bold text-gray-300'>最も閲覧されたニュース</span>
          </div>
          <p className='mb-2 text-sm text-whiteGray-200'>1st January 2025</p>
          <p className='mb-4 flex-grow text-xl line-clamp-3'>
            2022年、デートアプリ業界は引き続き躍進を放っています。年初からすでに前年比17%の成年初からすでに前年比17%の成
          </p>
          <ButtonGradient className='w-full md:w-[160px]' height={50} radius={16} fontSize={16}>
            続きを読む
          </ButtonGradient>
        </AnimationFadeInUp>
        {/* Featured Image Card - Takes 2 columns */}
        <AnimationFadeInUp
          shouldAnimate={true}
          index={2}
          className='col-span-2 flex cursor-pointer items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat px-4 pt-4 pb-8 md:justify-start md:pb-4 md:pt-0'
          style={{ backgroundImage: `url(${bgFeatureImage})` }}
        >
          <div className='flex flex-col items-center justify-start md:items-start'>
            <img src={LogoNew} width={50} height={50} alt='' />
            <h2 className='mt-5 font-secondBold text-6xl font-bold'>2025</h2>
            <p className='mt-5 text-4xl font-bold tracking-widest text-purple-400 md:text-5xl'>注目のニュース</p>
          </div>
        </AnimationFadeInUp>
      </div>

      <AnimationFadeInUp shouldAnimate={true} index={3}>
        <div className='mt-4 grid grid-cols-1 gap-2 md:mt-6 md:grid-cols-3 md:gap-6'>
          {/* News Cards */}
          <NewCard imageSrc={newImage1} date='1st January 2025' title='SNSアプリのリリース' />
          <NewCard imageSrc={newImage2} date='1st January 2025' title='今話題のAIチャットアプリ' />
          <NewCard imageSrc={newImage3} date='1st January 2025' title='アップデートリリース' />
        </div>
      </AnimationFadeInUp>
    </div>
  )
}
