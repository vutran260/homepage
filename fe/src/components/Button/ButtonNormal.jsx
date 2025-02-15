import React from 'react'
import { ButtonBase } from './ButtonBase'
import styles from 'src/scss/components/buttonGradient.module.scss'

const ButtonNormal = ({ children, onClick, className = '', ...props }) => {
  return (
    <ButtonBase onClick={onClick} className={`${className} border border-solid border-whiteGray-100`} {...props}>
      <span className={styles.buttonText}>{children}</span>
    </ButtonBase>
  )
}

export default ButtonNormal
