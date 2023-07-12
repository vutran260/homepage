import React from 'react'
import Slider, {Settings} from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/clientFeedback.scss'
import Rec37 from '../../assets/images/Rectangle37.png'
import Rec39 from '../../assets/images/Rectangle39.png'
import ButtonGoDown from "src/components/Button";


const ClientFeedback = () => {
  const settings = {
    customPaging: function (i) {
      return <span className='dot'></span>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
    dotsClass: 'slick-slide-feedback',
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className='section-nine section-ten section flex flex-col wrap-clientFeedback relative'>
      <div className="pb-20">
        <div className='text-white flex justify-center'>Feedback</div>
        <h2 className='title flex justify-center textLarge text-white'>Client Voices</h2>
      </div>
      <div className='wrap-person text-white'>
        <Slider {...settings}>
          <div className='person'>
            <img className='overlay' src={Rec37} alt=''/>
            <p className='fs-14 '>
              クオリティ、スピード、価格、信頼性、何をとっても満足しております。
              <br/>
              <br/>
              nまた、こちらの状況を充分に考慮していただき、とても親身になっていただきました。nマッチングサイトの１からの構築という、大掛かりな作業になったかと思います。
              <br/>
              <br/>
              n御社との出会いに感謝しております。n今後ともよろしくお願い致します。
            </p>
            <div className='avatar'>
              <div className='left'>
                <img src='images/Ellipse 8.png' alt=''/>
              </div>
              <div className='right'>
                <div className='text-orange'>株式会社ぶどうの樹</div>
                <p className='fs-14'>Grapevine Ltd.</p>
              </div>
            </div>
          </div>
          <div className='person'>
            <img className='overlay' src={Rec37} alt=''/>
            <p className='fs-14'>
              クオリティ、スピード、価格、信頼性、何をとっても満足しております。
              <br/>
              <br/>
              nまた、こちらの状況を充分に考慮していただき、とても親身になっていただきました。nマッチングサイトの１からの構築という、大掛かりな作業になったかと思います。
              <br/>
              <br/>
              n御社との出会いに感謝しております。n今後ともよろしくお願い致します。
            </p>
            <div className='avatar'>
              <div className='left'>
                <img src='images/Ellipse 8.png' alt=''/>
              </div>
              <div className='right'>
                <div className='text-orange'>株式会社ぶどうの樹</div>
                <p className='fs-14'>Grapevine Ltd.</p>
              </div>
            </div>
          </div>
          <div className='person'>
            <img className='overlay' src={Rec37} alt=''/>
            <p className='fs-14'>
              クオリティ、スピード、価格、信頼性、何をとっても満足しております。
              <br/>
              <br/>
              nまた、こちらの状況を充分に考慮していただき、とても親身になっていただきました。nマッチングサイトの１からの構築という、大掛かりな作業になったかと思います。
              <br/>
              <br/>
              n御社との出会いに感謝しております。n今後ともよろしくお願い致します。
            </p>
            <div className='avatar'>
              <div className='left'>
                <img src='images/Ellipse 8.png' alt=''/>
              </div>
              <div className='right'>
                <div className='text-orange'>株式会社ぶどうの樹</div>
                <p className='fs-14'>Grapevine Ltd.</p>
              </div>
            </div>
          </div>
          <div className='person'>
            <img className='overlay' src={Rec37} alt=''/>
            <p className='fs-14'>
              クオリティ、スピード、価格、信頼性、何をとっても満足しております。
              <br/>
              <br/>
              nまた、こちらの状況を充分に考慮していただき、とても親身になっていただきました。nマッチングサイトの１からの構築という、大掛かりな作業になったかと思います。
              <br/>
              <br/>
              n御社との出会いに感謝しております。n今後ともよろしくお願い致します。
            </p>
            <div className='avatar'>
              <div className='left'>
                <img src='images/Ellipse 8.png' alt=''/>
              </div>
              <div className='right'>
                <div className='text-orange'>株式会社ぶどうの樹</div>
                <p className='fs-14'>Grapevine Ltd.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="ButtonGoDown">
        <ButtonGoDown/>
      </div>
    </div>
  )
}

export default ClientFeedback
