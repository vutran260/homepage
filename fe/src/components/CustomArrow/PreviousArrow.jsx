import PrevIconV2 from 'src/components/Icon/PrevIconV2/index.jsx'
import React from 'react'

const PreviousArrow = (props) => (
  <button {...props} className='slick-arrow slick-prev' aria-label='Previous'>
    <PrevIconV2 />
  </button>
)

export default PreviousArrow
