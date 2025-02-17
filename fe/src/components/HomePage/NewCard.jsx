import { Link } from 'react-router-dom'
import '../../scss/components/newCard.scss'
import Rectangle from '../../assets/images/Rectangle26.png'

export function NewCard(datum) {
  const obj = {
    id: datum?.id,
    title: datum?.attributes?.title,
    description: datum?.attributes?.description,
    image: datum.attributes.thumpnail.data?.attributes.url,
    nameCategory: datum?.attributes?.category?.data?.attributes?.name
  }

  return (
    <Link
      to={datum.isArticle ? `/articles/${obj.id}?home=true` : `/posts/${obj.id}?home=true`}
      className='newCard-mobile group flex w-full flex-col'
      key={obj.id}
    >
      <div
        className='card-wrapper relative overflow-hidden'
        style={{
          padding: '4px',
          background: 'linear-gradient(102.02deg, #1E87D3 3.78%, #6751B5 53.06%, #C75F48 96.77%)',
          borderRadius: '24px',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className='card-content relative h-full rounded-[20px]'>
          {/* Image container with overlay */}
          <div className='relative h-[450px] md:h-[400px]'>
            {obj.image ? (
              <img
                src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${obj.image}`}
                alt=''
                className='h-full w-full  object-cover  duration-300'
                style={{
                  borderRadius: '24px'
                }}
              />
            ) : (
              <img
                src={Rectangle}
                className='h-full w-full rounded-t-2xl object-cover  duration-300 '
                alt=''
                style={{
                  borderRadius: '24px'
                }}
              />
            )}

            {/* Gradient Overlay */}
            <div
              className='absolute inset-0'
              style={{
                background: 'linear-gradient(179.77deg, rgba(0, 0, 0, 0) 0.2%, #000000 82.25%)',
                backdropFilter: 'blur(0px)',
                borderRadius: '24px'
              }}
            />
          </div>

          {/* Content */}
          <div className='absolute bottom-0 left-0 right-0 space-y-3 p-6 text-center'>
            <p className='text-lg font-medium text-white drop-shadow-lg line-clamp-1'>{obj.title}</p>
            <div
              className='text-sm line-clamp-2  [&>*]:!text-whiteGray-500 [&_span]:!text-whiteGray-500 [&_p]:!text-whiteGray-500'
              dangerouslySetInnerHTML={{ __html: obj.description }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
