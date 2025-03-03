import { Link } from 'react-router-dom'
import './styles.scss'
import PrevIcon from 'src/components/Icon/PrevIcon/index.jsx'
import styles from 'src/scss/components/buttonNormal.module.scss'
import { ButtonNormal } from 'src/components/Button/index.js'
import { useState } from 'react'
export default function CloseIcon({ redirect, pathName }) {
  const [activeButton, setActiveButton] = useState(null) // null, 'prev', or 'next'
  return (
    <Link
      to={{
        pathname: pathName ? pathName : '/'
      }}
      state={{ redirect: redirect }}
      className='fixed top-[30px] flex cursor-pointer flex-row items-center justify-center gap-4'
    >
      <ButtonNormal width={60} height={60} active={activeButton === 'prev'} className='block'>
        <span className={styles.iconWrapper}>
          <PrevIcon />
        </span>
      </ButtonNormal>
      <span className='text-2xl text-whiteGray-600'>戻る</span>
    </Link>
  )
}
