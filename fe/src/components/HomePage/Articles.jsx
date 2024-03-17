import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from 'src/utils/http.js'
import iconRow from '../../assets/images/iconRow.png'
import '../../scss/components/news.scss'
import { AnimationInViewToTop } from '../Animation'
import { NewCard } from './NewCard'

export function Articles() {
  const [data, setData] = useState([])
  const fetchNews = async () => {
    const res = await http.get(`articles?populate=*&pagination[page]=1&pagination[pageSize]=3&sort=createdAt:desc`)

    setData(res.data.data)
  }

  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <>
      {data.length && (
        <div className='news b heightSection flex flex-col bg-darkGray-900'>
          <div className='wrap-text flex flex-col'>
            <AnimationInViewToTop className='LastPost-text mb-2 flex justify-center text-white'>
              Last Post
            </AnimationInViewToTop>
            <AnimationInViewToTop className='ourNews flex justify-center text-white'>記事一覧</AnimationInViewToTop>
          </div>
          <div className='relative'>
            <div className='wap-item grid w-full grid-cols-3 gap-12 pt-8 '>
              {data?.map((datum) => (
                <AnimationInViewToTop delay={0} key={datum.id}>
                  <NewCard {...datum} isArticle={true} />
                </AnimationInViewToTop>
              ))}
            </div>
            <div className='wrap-buttonCardNew'>
              <div className='flex items-center'>
                <Link to='/articles' className='mr-3'>
                  <img src={iconRow} alt='' />
                </Link>
                <span className='top-2 text-xs text-white opacity-40'>もっと見る</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
