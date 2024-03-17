import { Link } from 'react-router-dom'
import '../../scss/components/newCard.scss'
import Rectangle from '../../assets/images/Rectangle26.png'
import { AnimationInViewToTop } from '../Animation'

export function NewCard(datum) {
  const obj = {
    id: datum?.id,
    title: datum?.attributes?.title,
    image: datum.attributes.thumpnail.data?.attributes.url,
    nameCategory: datum?.attributes?.category?.data?.attributes?.name
  }
  return (
    <>
      <Link
        to={datum.isArticle ? `/articles/${obj.id}?home=true` : `/posts/${obj.id}?home=true`}
        className='newCard-mobile flex w-full flex-col'
        key={obj.id}
      >
        <div className='newCard-mobile-image grayscale-image overflow-hidden rounded-md'>
          {obj.image ? (
            <img
              src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${obj.image}`}
              alt=''
              className='h-full w-full object-cover'
            />
          ) : (
            <img src={Rectangle} className='h-full w-full object-cover' alt='' />
          )}
        </div>
        <div className='wrap-text-right mt-5'>
          <span className='text-textBlueCustom-900'>{obj.nameCategory}</span>
          <p className='text-custom mt-2 font-medium text-white '>{obj.title}</p>
        </div>
      </Link>
    </>
  )
}
