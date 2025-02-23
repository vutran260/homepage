import { useEffect, useState } from 'react'
import 'src/scss/components/InfoCompany.scss'
import infoCompanyApi from 'src/apis/infoCompany.api'
import bgCompanyCert from 'src/assets/images/bgCompanyCert.png'

function CompanyInfo() {
  const [data, setData] = useState([])
  const getInfoCompany = async () => {
    const result = await infoCompanyApi.getInfoCompany()
    setData(result.data.data)
  }

  useEffect(() => {
    getInfoCompany()
  }, [])

  return (
    // <div className='info-company'>
    //   <h2 className='title textLarge my-10 text-white'>会社概要</h2>
    //   <div className='wrap-info'>
    //     {data.map((info) => {
    //       return (
    //         <div className='flex border-b' key={info.id}>
    //           <div className='left font-semibold'>{info.attributes.title}</div>
    //           <div
    //             className='right'
    //             dangerouslySetInnerHTML={{
    //               __html: info.attributes.description
    //             }}
    //           />
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
    <div className='page-container bg-light-2'>
      <div className='mx-auto max-w-6xl'>
        {/* Title */}
        <h1 className='mb-6 text-center text-4xl font-bold'>会社概要</h1>

        {/* Content Grid */}
        <div className='grid gap-8 md:grid-cols-2'>
          {/* Left Card - Company Details */}
          <div className='rounded-3xl bg-gradient-blue p-8 shadow-lg'>
            <table className='w-full'>
              <tbody className='space-y-5'>
                <TableRow label='社名' value='株式会社CET' />
                <TableRow label='本社所在地' value={<>〒163-0532 東京都新宿区西新宿1丁目26-2 新宿野村ビル 32階</>} />
                <TableRow label='設立' value='2022年1月11日' />
                <TableRow label='資本金' value='5,000千円' />
                <TableRow label='代表' value='朴 鐘和' />
                <TableRow
                  label='事業内容'
                  value={
                    <>
                      アプリ制作、Web・アプリを中心としたコンサルティング業務、システム開発およびサイト制作、UI・UXデザイン、デザインコンサルティング業務
                    </>
                  }
                />
                <TableRow label='社員数' value='48名' />
                <TableRow
                  label='取引先銀行'
                  value={
                    <>
                      みずほ銀行 新宿支店
                      <br />
                      三菱UFJ銀行 新宿支店
                      <br />
                      三井住友銀行 新宿通支店
                    </>
                  }
                />
              </tbody>
            </table>
          </div>

          {/* Right Card - Partners & Certification */}
          <div className='flex flex-col gap-5'>
            {/* Partners Section */}
            <div className='rounded-3xl bg-gradient-purple p-8 shadow-lg'>
              <table className='w-full'>
                <tbody className='space-y-4'>
                  <TableRow
                    label='主要取引先'
                    value={
                      <ul className='space-y-2'>
                        <li>株式会社いつも</li>
                        <li>株式会社サイバーエージェント</li>
                        <li>Agora Inc.,</li>
                        <li>株式会社フィキューブ</li>
                        <li>株式会社モバイルムーブメント</li>
                        <li>株式会社イースリー</li>
                        <li>株式会社MIT Corporate Advisory Services</li>
                        <li>株式会社アシックス</li>
                      </ul>
                    }
                  />
                  <TableRow
                    label='グループ会社'
                    value={
                      <ul>
                        <li>(주)케이닥 care doc inc.,</li>
                      </ul>
                    }
                  />
                </tbody>
              </table>
            </div>

            {/* Certification Section */}
            <div className='flex justify-center rounded-3xl bg-gradient-pink p-6'>
              <img src={bgCompanyCert} alt='ISO 27001:2013 認証取得' className='max-h-48' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TableRow = ({ label, value }) => (
  <tr className='block md:flex md:gap-4'>
    <td className='text-base text-gray-400 md:w-28 md:flex-shrink-0'>{label}</td>
    <td className='block text-xl md:mt-0 md:flex-1'>{value}</td>
  </tr>
)

export default CompanyInfo
