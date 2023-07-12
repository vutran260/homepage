import React from 'react'
import hand from "../../assets/images/hand.png"
import text1 from "../../assets/images/text1.png"
import text2 from "../../assets/images/text2.png"
import "../../scss/components/services.scss"
import ButtonGoDown from "src/components/Button";

export function Services() {
  return (
    <div className="wrap-services relative">
      <div className="flex justify-between pb-8 pl-2">
        <div className="w-1/3">
          <span className="text-white flex flex-col mb-3">What we do</span><span className="textLarge text-white">Our services</span>
        </div>
        <div className="flex items-center w-2/3">
          <p className="text-white">クリエイティブ × プランニング × エンジニアリング企画戦略・デザイン・開発・保守まで、ITに関するあらゆる課題に対応</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center">
          <img src={hand} alt=""/>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <div className="absolute w-full backgroundLiner h-full"></div>
            <div className="flex flex-col mb-8">
              <span className="text-orange font-bold opacity-40 fontText mb-4">リサーチ・プランニング</span>
              <p
                className="text-white opacity-40 font-normal text-font">お客様のご要望を踏まえ、競合リサーチ、ユーザビリティテストなどの定性分析を実施し、目指すべきアプリサービスのターゲットニーズを模索します。
                分析結果をもとに過去のアプリの実績からユーザ体験をまとめ、アプリの方針や必要な機能を策定し、要件をプロジェクトチームに共有します。</p>
            </div>
          </div>
          <div>
            <div></div>
            <div className="flex flex-col mb-8">
              <span className="text-orange font-bold fontText mb-4">UI/UX設計・プランニング</span>
              <p
                className="text-white opacity-40 font-normal text-font">プランニングで定義されたユーザ体験やサービス機能に基づき、アプリ全体の画面フローや各画面のUIデザイン設計を実施します。また早い段階でプロトタイプでのテストを実施。
                プロジェクトメンバー間のイメージ共有を進めるとともに、スクラップ＆ビルド方式で理想のUIを形にしていきます。</p>
            </div>
          </div>
          <div className="relative">
            <div className="backgroundLinearBottom absolute w-full h-full"></div>
            <div className="flex flex-col mb-8">
              <span className="text-orange font-bold opacity-40 fontText mb-4">デザイン</span>
              <p
                className="text-white opacity-40 font-normal text-font">iOS/Androidアプリの開発では、設計段階での顧客体験（UX）やイメージ（UI）の認識共有が重要です。プロトタイピングによりスクラップアンドビルド方式にて、スピーディーにお客様の依頼イメージを形にします。
                またアプリのUI開発に精通したスタッフが、効果的なインタラクションの実装もごサポート致します。</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ButtonGoDown">
        <ButtonGoDown/>
      </div>
    </div>
  )
}
