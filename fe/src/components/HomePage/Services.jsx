import React, { useRef } from 'react'
import serviceUIUXData from 'src/assets/jsons/serviceUIUX.json'
import serviceDevelopment from 'src/assets/jsons/serviceDevelopment.json'
import serviceResearch from 'src/assets/jsons/serviceResearch.json'
import serviceDesign from 'src/assets/jsons/serviceDesign.json'
import servicePMQC from 'src/assets/jsons/servicePMQC.json'
import serviceAI from 'src/assets/jsons/serviceAI.json'
import 'src/scss/components/services.scss'
import Slider from 'react-slick'

import FlexibleGradient from 'src/components/Gradient/FlexibleGradient.jsx'
import { ButtonGradient } from 'src/components/Button/index.js'
import PreviousArrow from 'src/components/CustomArrow/PreviousArrow.jsx'
import NextArrow from 'src/components/CustomArrow/NextArrow.jsx'
import { AnimationFadeInUp } from 'src/components/Animation/index.jsx'
import LottieAnimation from 'src/components/LottieAnimation/index.jsx'
import NavigationButtons from 'src/components/NavigationButtons/index.jsx'

export function Services() {
  const sliderRef = useRef(null)

  // const [data, setData] = useState([])
  // const fetchPortfolios = async () => {
  //   const res = await http.get(`services?populate=*`)
  //   setData(res.data.data)
  // }

  // useEffect(() => {
  //   fetchPortfolios()
  // }, [])

  const data = [
    {
      id: 2,
      attributes: {
        title: 'UI/UX設計',
        description: `プランニングで定義されたユーザ体験やサービス機能に基づき、<span class="text-white font-sansBlack">アプリ全体の画面フローや各画面のUIデザイン設計</span>を実施します。また早い段階でプロトタイプでのテストを実施。 プロジェクトメンバー間のイメージ共有を進めるとともに、スクラップ＆ビルド方式で理想のUIを形にしていきます。`,
        background: 'bg-gradient-green',
        createdAt: '2023-07-21T07:11:21.858Z',
        updatedAt: '2023-08-07T15:43:14.964Z',
        icon: {
          data: {
            id: 10,
            attributes: {
              name: 'graphic-design 1.png',
              alternativeText: null,
              caption: null,
              width: 36,
              height: 36,
              formats: null,
              hash: 'graphic_design_1_ea66cebe6b',
              ext: '.png',
              mime: 'image/png',
              size: 0.43,
              url: '/uploads/graphic_design_1_ea66cebe6b.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2023-08-07T15:43:12.301Z',
              updatedAt: '2023-08-07T15:43:12.301Z'
            }
          }
        }
      }
    },
    {
      id: 4,
      attributes: {
        title: '開発・デベロップメント',
        description: `私たちの強みは『<span class="text-white font-sansBlack">エンジニアリング力</span>』です。お客様がそのアプリに求める特性（動作速度、ネイティブ機能との密接度、オフラインでの利用頻度など）やネイティブアプリ、ハイブリッドアプリの違いと各々のメリット・デメリットを踏まえ、<span class="text-white font-sansBlack">最もふさわしい種類のアプリを提案</span>させていただきます。 ライブ配信アプリを始めとした、動画配信アプリ、音声SNSアプリ、その他多数のアプリ制作に自負があります。`,
        background: 'bg-gradient-lightblue',
        createdAt: '2023-07-21T07:11:53.497Z',
        updatedAt: '2023-08-26T08:47:17.243Z',
        icon: {
          data: {
            id: 83,
            attributes: {
              name: 'web-development 1.png',
              alternativeText: null,
              caption: null,
              width: 36,
              height: 36,
              formats: null,
              hash: 'web_development_1_91c24b215c',
              ext: '.png',
              mime: 'image/png',
              size: 0.41,
              url: '/uploads/web_development_1_91c24b215c.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2023-08-26T08:47:14.359Z',
              updatedAt: '2023-08-26T11:55:26.179Z'
            }
          }
        }
      }
    },
    {
      id: 3,
      attributes: {
        title: 'デザイン',
        description:
          'iOS/Androidアプリの開発では、設計段階での顧客体験（UX）やイメージ（UI）の認識共有が重要です。プロトタイピングによりスクラップアンドビルド方式にて、スピーディーにお客様の依頼イメージを形にします。 またアプリのUI開発に精通したスタッフが、効果的なインタラクションの実装もごサポート致します。',
        background: 'bg-gradient-lightpurple',
        createdAt: '2023-07-21T07:11:49.111Z',
        updatedAt: '2023-08-09T14:22:53.758Z',
        icon: {
          data: {
            id: 11,
            attributes: {
              name: 'design 1.png',
              alternativeText: null,
              caption: null,
              width: 36,
              height: 36,
              formats: null,
              hash: 'design_1_685760aa91',
              ext: '.png',
              mime: 'image/png',
              size: 0.5,
              url: '/uploads/design_1_685760aa91.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2023-08-07T15:44:07.937Z',
              updatedAt: '2023-08-21T22:51:00.493Z'
            }
          }
        }
      }
    },
    {
      id: 5,
      attributes: {
        title: 'プロジェクト管理・品質管理',
        description:
          'お客様とのコミュニケーションやタスク管理には、クラウドのプロジェクト管理ツールを利用。リアルタイム、かつ密接なコミュニケーションにより、スムーズなプロジェクト運営をお約束します。 また、アプリ開発において最も重要な要素のひとつである検証作業には、各種端末やOSのバージョンを備えた専門の部隊が対応いたします。',
        background: 'bg-gradient-darkblue',
        createdAt: '2023-08-09T14:21:40.296Z',
        updatedAt: '2023-08-10T15:32:19.789Z',
        icon: {
          data: {
            id: 25,
            attributes: {
              name: 'Group (3).png',
              alternativeText: null,
              caption: null,
              width: 72,
              height: 64,
              formats: null,
              hash: 'Group_3_bd11f95f00',
              ext: '.png',
              mime: 'image/png',
              size: 0.7,
              url: '/uploads/Group_3_bd11f95f00.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2023-08-10T15:32:17.251Z',
              updatedAt: '2023-08-10T15:32:17.251Z'
            }
          }
        }
      }
    },
    {
      id: 6,
      attributes: {
        title: 'メンテナンス・システム保守（AI保守）',
        description:
          'ご要望にスムーズに対応するためのスピード、効率性、正確性が重要であるメンテナンス/運用保守。ジークスでは専任部門を設け、経験とノウハウを持ってこれらを実現しています。お客様とのタスク管理にはメンテナンス/運用保守業務用の管理アプリケーションを活用し情報共有を徹底することで、ミスの無い運用サービスを行います。',
        background: 'bg-gradient-lightpurple',
        createdAt: '2023-08-21T23:04:41.107Z',
        updatedAt: '2024-06-03T08:43:24.756Z',
        icon: {
          data: {
            id: 26,
            attributes: {
              name: 'web-settings 1.png',
              alternativeText: null,
              caption: null,
              width: 72,
              height: 72,
              formats: null,
              hash: 'web_settings_1_36d2fa5367',
              ext: '.png',
              mime: 'image/png',
              size: 0.88,
              url: '/uploads/web_settings_1_36d2fa5367.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2023-08-10T15:33:10.785Z',
              updatedAt: '2023-08-21T23:04:36.606Z'
            }
          }
        }
      }
    },
    {
      id: 1,
      attributes: {
        title: 'リサーチ・プランニング',
        description:
          'お客様のご要望を踏まえ、競合リサーチ、ユーザビリティテストなどの定性分析を実施し、目指すべきアプリサービスのターゲットニーズを模索します。 分析結果をもとに過去のアプリの実績からユーザ体験をまとめ、アプリの方針や必要な機能を策定し、要件をプロジェクトチームに共有します。',
        background: 'bg-gradient-darkblue',
        createdAt: '2023-07-21T07:11:01.441Z',
        updatedAt: '2023-08-21T23:31:09.548Z',
        icon: {
          data: {
            id: 12,
            attributes: {
              name: 'planning 1.png',
              alternativeText: null,
              caption: null,
              width: 36,
              height: 36,
              formats: null,
              hash: 'planning_1_17adadcc97',
              ext: '.png',
              mime: 'image/png',
              size: 0.54,
              url: '/uploads/planning_1_17adadcc97.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2023-08-07T15:44:43.920Z',
              updatedAt: '2023-08-21T23:31:04.563Z'
            }
          }
        }
      }
    }
  ]

  const animationData = {
    2: serviceUIUXData,
    4: serviceDevelopment,
    1: serviceResearch,
    3: serviceDesign,
    5: servicePMQC,
    6: serviceAI
  }

  const settings = {
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '20px',
          prevArrow: false,
          nextArrow: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '20px',
          prevArrow: false,
          nextArrow: false
        }
      }
    ]
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <div className='wrap-services page-container bg-dark-1 pt-[20px]'>
      <div className='pb-2 text-center md:pb-8'>
        <div>
          <AnimationFadeInUp shouldAnimate={true} index={0}>
            <FlexibleGradient text='私たちの仕事' className='mb-5 text-3xl' />
          </AnimationFadeInUp>
          <AnimationFadeInUp shouldAnimate={true} index={1}>
            <h2 className='page-title'>当社のサービス</h2>
          </AnimationFadeInUp>
        </div>
        <AnimationFadeInUp shouldAnimate={true} index={2} className='mx-auto mt-2 w-full md:w-[80%]'>
          <p className='font-sansBlack text-sm tracking-normal text-white md:text-xl md:tracking-widest'>
            クリエイティブ × プランニング ×エンジニアリング
          </p>
          <p className='text-sm tracking-normal text-whiteGray-600 md:text-2xl  md:tracking-wider'>
            企画戦略・デザイン・開発・保守まで、ITに関するあらゆる課題に対応
          </p>
        </AnimationFadeInUp>
      </div>
      <AnimationFadeInUp shouldAnimate={true} index={3} className='wrap-sliderServices w-full'>
        {data.length && (
          <Slider ref={sliderRef} {...settings} className='overflow-hidden'>
            {data?.map((service, i) => {
              return (
                <div key={service.id}>
                  <div
                    className={`h-[350px] rounded-2xl border border-solid border-darkGray-600 p-4 md:h-[400px] md:p-6 ${service.attributes.background}`}
                  >
                    <div className='relative flex h-full flex-col'>
                      {/* Content container with adjusted padding for mobile button */}
                      <div className='flex flex-col pb-16 md:pb-0'>
                        <span className='mb-2 text-center text-xl font-bold tracking-widest line-clamp-1'>
                          {service.attributes.title}
                        </span>
                        <p
                          className='z-10 text-sm font-normal tracking-wider text-whiteGray-500 md:text-base md:leading-[34px]'
                          dangerouslySetInnerHTML={{ __html: service.attributes.description }}
                        ></p>
                        {/* Button for desktop view */}
                        <ButtonGradient
                          className='z-10 mt-2 hidden w-full md:flex md:w-[160px]'
                          height={50}
                          radius={16}
                          fontSize={16}
                        >
                          続きを読む
                        </ButtonGradient>
                      </div>

                      {/* Button for mobile view - fixed at bottom */}
                      <ButtonGradient
                        className='absolute bottom-0 left-1/2 z-10 w-[200px] -translate-x-1/2 md:hidden'
                        height={50}
                        radius={16}
                        fontSize={20}
                      >
                        続きを読む
                      </ButtonGradient>

                      {/* Image container */}
                      <div className='absolute bottom-0 right-0 z-0 w-full opacity-20 md:w-1/2 md:opacity-100'>
                        <LottieAnimation animationData={animationData[service.id]} className='h-auto w-full' />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        )}
      </AnimationFadeInUp>
      <AnimationFadeInUp shouldAnimate={true} index={4}>
        <div className='mt-2 flex justify-center gap-2 pb-2 lg:hidden'>
          <NavigationButtons onNext={handleNext} onPrev={handlePrev} />
        </div>
      </AnimationFadeInUp>
    </div>
  )
}
