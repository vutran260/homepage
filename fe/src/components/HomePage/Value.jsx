import background from "src/assets/images/ourValue.png";
import "../../scss/components/value.scss";
import { AnimationInViewToTop } from "../Animation";

export function Value() {
  return (
    <div className='wrap-value heightSection relative'>
      <AnimationInViewToTop className='grayscale-image w-4/5'>
        <img src={background} alt='' />
      </AnimationInViewToTop>
      <div className='wrap-text absolute flex flex-col rounded-md bg-darkGray-900'>
        <AnimationInViewToTop className='textLarge mb-4 text-white'>Our Value</AnimationInViewToTop>
        <AnimationInViewToTop className='font-extralight leading-normal text-white'>
          私たちは最先端のIT技術を駆使し、トレンドに合わせたアプリ開発に特化しております。
          豊富な実績から、ライブ配信アプリ開発には特に強みを持っており、
          多方面からアプローチ可能な企画提案や、よく使われている機能などを速やかに実装可能です。
          開発だけではなく、保守に関してもフレキシブルに対応をしております。
          <br />
          <br />
          <b className='font-extrabold text-sky-500'>
            "ユーザーに長く愛されるアプリにしたい" "アプリ開発を知り尽くしたプロフェッショナルと一緒につくりたい"
            "新しい技術で開発したい"
          </b>{' '}
          そんな法人様・個人様に要件定義から運用保守までお応えすることが可能です。
          <br />
          <br />
          また、近年流行しているアプリの特性を一早く理解し、テストとして似たような
          アプリを制作するよう心掛けておりますので、 その実績上、質の高い提案が出来る自負があります。
        </AnimationInViewToTop>
      </div>
    </div>
  )
}