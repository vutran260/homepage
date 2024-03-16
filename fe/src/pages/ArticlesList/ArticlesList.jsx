import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { createSearchParams, Link } from 'react-router-dom'
import articleApi from '../../apis/articles.api'
import Vector14 from '../../assets/images/Vector14.svg'
import Footer from '../../components/Footer'
import CloseIcon from '../../components/Icon/CloseIcon'
import LogoFixed from '../../components/LogoFixed'
import useQueryParams from '../../hooks/useQueryParams'
import http from '../../utils/http'
import './index.css'

const AnimationWrap = ({ children }) => (
  <motion.div
    className='hover:scale-102 transform hover:-translate-y-1'
    style={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
)

export default function ArticlesList() {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(1)
  const [disabled, setDisabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const navigate = useNavigate()
  const queryParams = useQueryParams()
  const fetchData = async () => {
    const response = await articleApi.getArticles({
      pagination: {
        page: page || '1',
        pageSize: queryParams.pageSize || '9'
      },
      filters: {
        category: queryParams.category
      }
    })
    const newData = response.data.data
    setDisabled(false)
    if (
      response.data.meta.pagination.page === response.data.meta.pagination.pageCount ||
      !response.data.meta.pagination.pageCount
    ) {
      setDisabled(true)
    }
    setData([...data, ...newData])
  }
  const fetchCategories = async () => {
    const response = await http.get(`/categories`)
    setCategories(response.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [page, queryParams.category])
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchCategories()
  }, [])

  const handleSortCategory = (id) => {
    setPage(1)
    setSelectedCategory(id)
    setData([])
    navigate({
      pathname: '/articles',
      search: createSearchParams([['category', id.toString()]]).toString()
    })
  }

  const handleSearchAll = () => {
    setData([])
    setPage(1)
    setSelectedCategory(null)
    navigate({
      pathname: '/articles'
    })
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const mainBackgroundClasses = `our-news text-wite bg-mainBackground  bg-contain bg-left-top bg-no-repeat min-h-screen h-[100vh]`

  const location = useLocation()

  const isCategoryActive = (categoryId) => {
    const searchParams = new URLSearchParams(location.search)
    const categoryParam = searchParams.get('category')
    if (categoryParam === null && categoryId === null) {
      return true // Thêm lớp active nếu không có tham số tìm kiếm và categoryId là null (All)
    }
    return categoryParam === categoryId?.toString()
  }
  
  const formatDate = (date) => {
    const dateObject = new Date(date)

    // Lấy các thành phần ngày, tháng và năm từ đối tượng Date
    const year = dateObject.getFullYear()
    const month = String(dateObject.getMonth() + 1).padStart(2, '0')
    const day = String(dateObject.getDate()).padStart(2, '0')

    // Tạo chuỗi mới trong định dạng mong muốn
    return `${year}.${month}.${day}`
  }

  return (
    <div style={{ backgroundImage: `url(${Vector14})` }} className={mainBackgroundClasses}>
      <LogoFixed />
      <CloseIcon redirect={`News`} />
      <div className='mx-auto max-w-[1600px] px-5 pt-[40px] pb-4 text-white max-lg:px-4 min-[1200px]:px-[147px]'>
        <h3 className='mb-10 text-center text-5xl'>記事一覧</h3>
        <div
          className='flex justify-center gap-10 pb-10 max-md:gap-4 max-sm:justify-start'
          style={{ overflowX: 'auto' }}
        >
          <button className={classNames({ 'active text-blue': isCategoryActive(null) })} onClick={handleSearchAll}>
            All
          </button>
          {categories.map((category) => (
            <button
              className={classNames('whitespace-nowrap', {
                'active text-blue': isCategoryActive(category.id),
                active: selectedCategory === category.id
              })}
              onClick={() => handleSortCategory(category.id)}
              key={category.id}
            >
              {category.attributes.name}
            </button>
          ))}
        </div>
        <div className='mx-auto min-h-[300px]'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {data.map((post) => (
              <motion.div
                className='hover:scale-102 transform hover:-translate-y-1'
                style={{ y: 50, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                key={post.id}
              >
                <Link to={post.id.toString()} key={post.id}>
                  <div className='mb-2'>
                    <img
                      className='grayscale-image h-72 w-full object-cover'
                      src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${
                        post?.attributes.thumpnail?.data?.attributes.url
                      }`}
                      alt='Thumbnail'
                    />
                  </div>
                  <div className='mt-3 mb-2 text-blue'>{post.attributes.category.data?.attributes.name}</div>
                  <h3 className='text-xl font-bold'>{post.attributes.title}</h3>
                  <div className='text-sm text-white text-opacity-50'>{formatDate(post.attributes.createdAt)}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='width-full mt-5 flex'>
          {!disabled && (
            <button
              onClick={handleLoadMore}
              className={classNames(
                'mx-auto transform rounded-[100px] border-r border-none bg-[#36AAFA] px-6 py-3 text-base hover:-translate-y-1 hover:scale-105',
                { 'pointer-events-none': disabled }
              )}
            >
              Load More
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
