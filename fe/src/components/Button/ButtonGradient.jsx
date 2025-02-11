import React from 'react'
import { ButtonBase } from './ButtonBase'
import styles from 'src/scss/components/ButtonGradient.module.scss'

const ButtonGradient = ({ children, onClick, className = '', ...props }) => {
  return (
    <ButtonBase onClick={onClick} className={`${styles.gradientButton} ${className}`} {...props}>
      <span className={styles.buttonText}>{children}</span>
    </ButtonBase>
  )
}

export default ButtonGradient
