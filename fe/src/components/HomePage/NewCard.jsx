import {Link} from 'react-router-dom'
import '../../scss/components/newCard.scss'
import Rectangle from '../../assets/images/Rectangle26.png'

export function NewCard(datum) {
  const obj = {
    id: datum?.id,
    title: datum?.attributes?.title,
    image: datum.attributes.thumpnail.data.attributes.url,
    nameCategory: datum?.attributes?.category?.data?.attributes?.name
  }
  return (
    <>
      <div className='flex w-full flex-col newCard-mobile' key={obj.id}>
        <div className='overflow-hidden rounded-md newCard-mobile-image'>
          {
            obj.image ? <img src={`${import.meta.env.VITE_REACT_IMAGE_BASE_URL}${obj.image}`} alt=''
                             className='w-full object-cover h-full'/> :
              <img src={Rectangle} className='w-full object-cover h-full' alt=''/>
          }

        </div>
        <div className='mt-5 wrap-text-right'>
          <span className='text-textBlueCustom-900'>
            {obj.nameCategory}
          </span>
          <p className='text-custom mt-2 font-medium text-white '>
            {obj.title}
          </p>
        </div>
      </div>
    </>
  )
}
