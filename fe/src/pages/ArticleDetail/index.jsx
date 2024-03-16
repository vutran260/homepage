import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import postApi from '../../apis/post.api'
import  './style.css'
import convertDateFormat from '../../utils/convertDateTime'
import { AnimationWrap } from '../../components/Animation'
import LogoFixed from '../../components/LogoFixed'
import Vector14 from '../../assets/images/Vector14.svg'
import CloseIcon from '../../components/Icon/CloseIcon'
import articleApi from '../../apis/articles.api'

export default function ArticleDetail() {
  const [post, setPost] = useState()
  let { id } = useParams()
  useEffect(() => {
    async function fetchPostDetail() {
      const data = await articleApi.getArticleDetail(id)
      setPost(data.data.data.attributes)
    }
    fetchPostDetail()
  }, [])

  const mainBackgroundClasses = `bg-mainBackground bg-[url("/images/Vector14.svg")] bg-contain bg-left-top bg-no-repeat pb-[80px] min-h-screen post-detail max-sm:px-5`

  return (
    <div style={{ backgroundImage: `url(${Vector14})` }} className={mainBackgroundClasses}>
      <LogoFixed />
      <CloseIcon pathName={`/posts`} />
      {post && (
        <AnimationWrap>
          <div className='mx-auto max-w-[754px]'>
            <h3 className='mb-10 text-left text-5xl text-white'>{post.title}</h3>
            <div className='text-sm text-white text-opacity-50'>{convertDateFormat(post.createdAt)}</div>
            <div className='description mt-10 whitespace-pre-line text-white'>
              <img src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${post?.thumpnail?.data.attributes.url}`} alt='' />
              {/* <ReactMarkdown
                transformImageUri={(uri) =>
                  uri.startsWith('http') ? uri : `${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${uri}`
                }
              >
                {post.description}
              </ReactMarkdown> */}
              <div
                className='leading-normal'
                dangerouslySetInnerHTML={{
                  __html: processImagesInDescription(post.description, import.meta.env.VITE_REACT_IMAGE_BASE_URL)
                }}
              />
            </div>
          </div>
        </AnimationWrap>
      )}
    </div>
  )
}

function processImagesInDescription(description, imageBaseUrl) {
  // Chuyển đổi các đường dẫn hình ảnh tương đối thành đường dẫn đầy đủ
  const processedDescription = description.replace(/<img src="([^"]+)"([^>]*)>/g, (match, src, rest) => {
    const fullImageUrl = `${imageBaseUrl}${src}`
    return `<img src="${fullImageUrl}"${rest}>`
  })

  return processedDescription
}