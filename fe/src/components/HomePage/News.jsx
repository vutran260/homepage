import ButtonGoDown from '../Button'
import portfolio from '../../assets/images/portfolio.png'
import '../../scss/components/news.scss'
import {NewCard} from './NewCard'
import {Link} from 'react-router-dom'
import iconRow from '../../assets/images/iconRow.png'
import {useEffect, useState} from "react";
import http from "src/utils/http.js";

export function News() {
  const [data, setData] = useState([])
  const fetchNews = async () => {
    const res = await http.get(`posts?populate=*&pagination[page]=1&pagination[pageSize]=3&sort[0]&sort[1]=createdAt`)

    setData(res.data.data)
  }

  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <>
      <div className='news b heightSection flex flex-col bg-darkGray-900'>
        <div className='wrap-text flex flex-col'>
          <span className='LastPost-text mb-2 flex justify-center text-white'>Last post</span>
          <span className='ourNews flex justify-center text-white'>Our News</span>
        </div>
        <div>
          <div className='wap-item grid w-full grid-cols-3 gap-12 pt-8 '>
            {
              data.map((datum) => (
                <NewCard key={datum.id} {...datum}/>
              ))
            }
          </div>
          <div className='wrap-buttonCardNew'>
            <div className='flex items-center'>
              <Link to='/posts' className='mr-3'>
                <img src={iconRow} alt=''/>
              </Link>
              <span className='top-2 text-xs text-white opacity-40'>ニュース一覧</span>
            </div>
          </div>
        </div>
        <div className='ButtonGoDown'>
          <ButtonGoDown target='About_Us'/>
        </div>
      </div>
    </>
  )
}
