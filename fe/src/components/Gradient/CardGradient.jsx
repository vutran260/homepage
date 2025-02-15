import React from 'react'

const CardGradient = ({ children, className = '', rounded = 'rounded-lg' }) => {
  return (
    <div
      className={`${rounded} ${className} relative overflow-hidden`}
      style={{
        background: 'linear-gradient(0deg, #002975 0%, #000000 77.24%)'
      }}
    >
      {/* Content container - z-index: 1 */}
      <div className='relative z-[1] h-full'>{children}</div>

      {/* Bottom gradient overlay - z-index: 2 */}
      <div
        className='absolute bottom-0 left-0 right-0 z-[2]'
        style={{
          height: '33.333%',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #003699 100%)'
        }}
      />
    </div>
  )
}

export default CardGradient
