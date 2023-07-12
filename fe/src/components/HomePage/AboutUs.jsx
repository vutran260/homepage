import ButtonGoDown from '../Button'
import '../../scss/components/aboutUs.scss'
import Rectangle30 from '../../assets/images/Rectangle30.png'
export const AboutUs = () => {
  return (
    <>
      <div className='aboutUS flex flex-col bg-darkGray-900'>
        <div className='ButtonGoDown absolute'>
          <ButtonGoDown />
        </div>
        <div className='flex h-full'>
          <div className='wrap-img h-5/6 w-full'>
            <img src={Rectangle30} alt='' className='h-full w-full' />
          </div>
          <div className='aboutUS-wrap-text flex flex-col text-white'>
            <span className='mb-3'>About us</span>
            <span className='text-large mb-4'>私たちについて</span>
            <span className='text-medium mb-8'>7 Years OfExperience</span>
            <p>
              CETのアプリ開発はエンジニアリングだけに特化せず、プロジェクトの初動からデザインプロセスを連動し、デザインとエンジニアリングを両立させた開発を実現しています。
              <br />
              <br />
              アプリを利用していただくユーザーに最高の体験を提供できることがCETの強みであり、ご依頼いただくお客様への最大の提供価値だと考えています。{' '}
              <br />
              <br />
              ユーザー体験を中心としたコンセプトデザインと、300以上のアプリ開発/制作実績で培ったアプリ開発手法により、使い続けられるアプリケーションの実装を可能に。UX/CX視点でコンサルティングからデザイン・開発/制作の依頼・委託・サポートまで一貫して対応します。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
