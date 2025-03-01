import { useState } from 'react'
import { ButtonNormal } from 'src/components/Button/index.js'
import styles from 'src/scss/components/buttonNormal.module.scss'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import NextIcon from 'src/components/Icon/NextIcon/index.jsx'

const NavigationButtons = ({ onPrev, onNext }) => {
  const [activeButton, setActiveButton] = useState(null) // null, 'prev', or 'next'

  const handlePrevClick = () => {
    setActiveButton('prev')
    onPrev?.()
  }

  const handleNextClick = () => {
    setActiveButton('next')
    onNext?.()
  }

  return (
    <>
      <ButtonNormal width={40} height={40} active={activeButton === 'prev'} onClick={handlePrevClick}>
        <span className={styles.iconWrapper}>
          <PrevIcon />
        </span>
      </ButtonNormal>
      <ButtonNormal width={40} height={40} active={activeButton === 'next'} onClick={handleNextClick}>
        <span className={styles.iconWrapper}>
          <NextIcon />
        </span>
      </ButtonNormal>
    </>
  )
}

export default NavigationButtons