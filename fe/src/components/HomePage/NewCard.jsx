import 'src/scss/components/newCard.scss'

export function NewCard({ date, title, imageSrc }) {
  return (
    <div className='group w-full cursor-pointer'>
      <div className='from-blue-500 rounded-3xl bg-gradient-to-r via-purple-500 to-red-500 p-1'>
        <div className='h-full rounded-3xl'>
          {/* Image Section with Gradient Overlay */}
          <div className='relative h-[200px] overflow-hidden rounded-t-2xl'>
            <img
              src={imageSrc}
              alt={title}
              className='h-full w-full transition-transform duration-300 group-hover:scale-105'
            />
            {/* Gradient Overlay using the exact values */}
            <div
              className='absolute inset-0'
              style={{
                background: 'linear-gradient(179.77deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 90%, #000000 100%)'
              }}
            />
          </div>

          {/* Content Section */}
          <div className='relative space-y-3 rounded-b-3xl bg-black p-6'>
            <p className='text-sm text-whiteGray-200'>{date}</p>
            <h3 className='text-lg font-medium text-white line-clamp-2'>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
