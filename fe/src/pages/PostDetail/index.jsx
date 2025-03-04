import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import postApi from '../../apis/post.api'
import  './style.css'
import convertDateFormat from '../../utils/convertDateTime'
import { AnimationWrap } from '../../components/Animation'
import LogoFixed from '../../components/LogoFixed'
import Vector14 from '../../assets/images/Vector14.svg'
import CloseIcon from '../../components/Icon/CloseIcon'

export default function PostsList() {
  const [post, setPost] = useState()
  let { id } = useParams()
  let [searchParams] = useSearchParams()
  useEffect(() => {
    async function fetchPostDetail() {
      const data = await postApi.getPostDetail(id)
      setPost(data.data.data.attributes)
    }
    fetchPostDetail()
  }, [])

  return (
    <div className='page-detail-container bg-dark-1'>
      <CloseIcon pathName={searchParams.get('home') ? `/` : `/posts`} redirect={`Blogs`} />
      {post && (
        <AnimationWrap>
          <div className='mx-auto max-w-[754px]'>
            <h3 className='mb-10 text-left text-5xl text-white'>{post.title}</h3>
            <div className='text-sm text-white text-opacity-50'>{convertDateFormat(post.createdAt)}</div>
            <div className='description mt-10 whitespace-pre-line text-white'>
              <img src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${post?.thumpnail?.data.attributes.url}`} alt=''/>
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