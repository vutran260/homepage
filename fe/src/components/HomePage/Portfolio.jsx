import 'src/scss/components/portfolio.scss'
import portfolioAdminScreen from 'src/assets/images/portfolioAdminScreen.png'
import projectLogo from 'src/assets/images/projectLogo.png'
import projectMapScreen from 'src/assets/images/projectMapScreen.png'
import technical1 from 'src/assets/images/technical1.png'
import technical2 from 'src/assets/images/technical2.png'
import technical3 from 'src/assets/images/technical3.png'
import technical4 from 'src/assets/images/technical4.png'
import technical5 from 'src/assets/images/technical5.png'
import technical6 from 'src/assets/images/technical6.png'
import { ButtonGradient, ButtonNormal } from 'src/components/Button/index.js'
import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import CardGradient from 'src/components/Gradient/CardGradient.jsx'
import NextIcon from 'src/components/Icon/NextIcon/index.jsx'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import { useMediaQuery } from 'react-responsive'

export function Portfolio() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const technicalSkills = [
    {
      name: 'tech 1',
      image: technical1
    },
    {
      name: 'tech 2',
      image: technical2
    },
    {
      name: 'tech 3',
      image: technical3
    },
    {
      name: 'tech 4',
      image: technical4
    },
    {
      name: 'tech 5',
      image: technical5
    },
    {
      name: 'tech 6',
      image: technical6
    }
  ]

  return (
    <div className='page-container bg-dark-1 !pr-0'>
      {isMobile && <NavigationButtons isMobile={true} />}
      <div className='mb-2 flex flex-col gap-4 md:flex-row md:justify-between'>
        <div className='order-1 w-full md:w-auto'>
          <div className='section1 rounded-lg p-4 text-center md:text-left'>
            <AnimationFadeInUp shouldAnimate={true} index={isMobile ? 0 : 0}>
              <FlexibleGradient text='配車アプリ' className='mb-5 text-3xl' />
            </AnimationFadeInUp>
            <AnimationFadeInUp
              shouldAnimate={true}
              index={isMobile ? 0 : 0}
              className='flex justify-center md:!justify-start'
            >
              <img src={projectLogo} width={200} height={70} className='mb-5' alt='' />
            </AnimationFadeInUp>
            <AnimationFadeInUp shouldAnimate={true} index={isMobile ? 0 : 1}>
              <p className='mb-5 text-5xl text-white'>運転代行アプリ</p>
            </AnimationFadeInUp>
            <AnimationFadeInUp shouldAnimate={true} index={isMobile ? 0 : 2}>
              <p className='mb-5 text-xl text-whiteGray-600'>期間：5ヶ月（要件定義～納品）</p>
            </AnimationFadeInUp>
            <AnimationFadeInUp shouldAnimate={true} index={isMobile ? 0 : 3}>
              <p className='mb-2 text-xl text-whiteGray-600'>テクノロジー</p>
            </AnimationFadeInUp>
            <AnimationFadeInUp
              shouldAnimate={true}
              index={isMobile ? 0 : 3}
              className='flex justify-center md:!justify-start'
            >
              <div className='mb-10 grid w-[218px] grid-cols-3 gap-2 md:flex md:flex-wrap'>
                {technicalSkills.map((item, index) => (
                  <div
                    key={index}
                    className='border-1 inline-block w-[66px] items-center justify-center rounded-[10px] border border-solid border-whiteGray-100 p-2'
                  >
                    <img src={item.image} alt={item.name} />
                  </div>
                ))}
              </div>
            </AnimationFadeInUp>
            <AnimationFadeInUp shouldAnimate={true} index={isMobile ? 0 : 6}>
              <ButtonGradient className='h-[80px] w-full px-[40px] py-[10px] md:w-[320px]'>
                プロジェクト情報
              </ButtonGradient>
            </AnimationFadeInUp>
          </div>
        </div>
        <AnimationFadeInUp className='section2 order-2 w-full md:w-auto' shouldAnimate={true} index={isMobile ? 1 : 4}>
          <CardGradient className='h-[600px] w-full rounded-lg border border-solid border-darkGray-600 px-4 pt-6 text-center md:w-[455px] md:px-6'>
            <p className='mb-6 text-2xl text-white'>STEP① 出発地を指定</p>
            <div>
              <img src={projectMapScreen} className='h-full w-full object-contain' alt='' />
            </div>
          </CardGradient>
        </AnimationFadeInUp>
        <AnimationFadeInUp className='section3 order-3 w-full md:w-auto' shouldAnimate={true} index={isMobile ? 1 : 5}>
          <CardGradient className='h-[600px] w-full rounded-lg border border-solid border-darkGray-600 px-4 pt-6 text-center md:w-[500px] md:pl-8 md:pr-0'>
            <p className='mb-6 text-xl text-white'>お迎え希望の位置をマップ上で指定。「ここに呼ぶ」</p>
            <img src={portfolioAdminScreen} className='h-full w-full' alt='' />
          </CardGradient>
        </AnimationFadeInUp>
      </div>
      {!isMobile && <NavigationButtons isMobile={false} />}
    </div>
  )
}

const NavigationButtons = ({ isMobile }) => {
  return (
    <AnimationFadeInUp
      shouldAnimate={true}
      index={isMobile ? 0 : 7}
      className='flex justify-center gap-2 pb-2 md:mt-2 md:pb-0'
    >
      <ButtonNormal width={40} height={40}>
        <PrevIcon />
      </ButtonNormal>
      <ButtonGradient width={40} height={40}>
        <NextIcon />
      </ButtonGradient>
    </AnimationFadeInUp>
  )
}
