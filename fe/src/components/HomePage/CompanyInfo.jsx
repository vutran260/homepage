import { useEffect, useState } from 'react'
import 'src/scss/components/InfoCompany.scss'
import infoCompanyApi from '../../apis/infoCompany.api'
function CompanyInfo() {
  const [data, setData] = useState([])
  const getInfoCompany = async () => {
    const result = await infoCompanyApi.getInfoCompany()
    setData(result.data.data)
  }
  useEffect(() => {
    getInfoCompany()
  }, [])
  console.log(data)
  return (
    <div className='info-company'>
      <h2 className='title textLarge my-10 text-white'>会社概要</h2>
      <div className='wrap-info'>
        {data.map((info) => {
          return (
            <div className='flex border-b' key={info.id}>
              <div className='left font-semibold'>{info.attributes.title}</div>
              <div
                className='right'
                dangerouslySetInnerHTML={{
                  __html: info.attributes.description
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CompanyInfo
