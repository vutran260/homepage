import React, { useMemo } from 'react'

const TextGradient = ({ text = 'Hello World', className }) => {
  const style = {
    background: 'linear-gradient(90deg, #1E87D3 0%, #C75F48 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    width: 'fit-content'
  }

  return (
    <div style={style} className={className}>
      {text}
    </div>
  )
}

export default TextGradient
