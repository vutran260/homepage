import React from 'react'

const TextGradient = ({ text = 'Hello World', className }) => {
  return (
    <div
      className={`inline-block bg-gradient-to-r from-[#1E87D3] to-[#C75F48] bg-clip-text tracking-widest text-transparent ${className}`}
    >
      {text}
    </div>
  )
}

export default TextGradient
