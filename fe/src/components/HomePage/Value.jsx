import "../../scss/components/value.scss"
import ButtonGoDown from "src/components/Button";
import background from "src/assets/images/Rectangle35.png"

export function Value() {
  return (
    <div className="wrap-value relative heightSection">
      <div className="w-4/5">
        <img src={background} alt=""/>
      </div>
      <div className="bg-darkGray-900 rounded-md absolute wrap-text flex flex-col">
        <span className="textLarge text-white mb-4">Our Value</span>
        <div className="text-white">私たちは最先端のIT技術を駆使し、トレンドに合わせたアプリ開発に特化しております。
          豊富な実績から、ライブ配信アプリ開発には特に強みを持っており、
          多方面からアプローチ可能な企画提案や、よく使われている機能などを速やかに実装可能です。 開発だけではなく、保守に関してもフレキシブルに対応をしております。
          <br/>
          <br/>
          "ユーザーに長く愛されるアプリにしたい" "アプリ開発を知り尽くしたプロフェッショナルと一緒につくりたい" "新しい技術で開発したい"
          そんな法人様・個人様に要件定義から運用保守までお応えすることが可能です。
          <br/>
          <br/>
          また、近年流行しているアプリの特性を一早く理解し、テストとして似たような アプリを制作するよう心掛けておりますので、 その実績上、質の高い提案が出来る自負があります。
        </div>
      </div>
      <div className="ButtonGoDown">
        <ButtonGoDown target="Team"/>
      </div>
    </div>
  )
}