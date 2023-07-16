import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import postApi from '../../apis/post.api'
import './style.css'
import convertDateFormat from '../../utils/convertDateTime'
import { AnimationWrap } from '../../components/Animation'
import LogoFixed from '../../components/LogoFixed'
import Vector14 from '../../assets/images/Vector14.png'

export default function PostsList() {
  const [post, setPost] = useState({})
  let { id } = useParams()
  useEffect(() => {
    async function fetchPostDetail() {
      const data = await postApi.getPostDetail(id)
      setPost(data.data.data.attributes)
    }
    fetchPostDetail()
  }, [])

  const mainBackgroundClasses = `bg-mainBackground bg-[url("/images/Vector14.png")] bg-contain bg-left-top bg-no-repeat pb-[80px] min-h-screen post-detail max-sm:px-5`

  return (
    <div style={{ backgroundImage: `url(${Vector14})` }} className={mainBackgroundClasses}>
      <LogoFixed />
      <AnimationWrap>
        <div className='mx-auto max-w-[754px]'>
          <h3 className='mb-10 text-left text-5xl text-white'>{post.title}</h3>
          <div className='text-sm text-white text-opacity-50'>{convertDateFormat(post.createdAt)}</div>
          <div className='description mt-10 text-white'>
            <ReactMarkdown
              transformImageUri={(uri) =>
                uri.startsWith('http') ? uri : `${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${uri}`
              }
            >
              {post.description}
            </ReactMarkdown>
          </div>
        </div>
      </AnimationWrap>
    </div>
  )
}
