import React from 'react'
import { ButtonBase } from './ButtonBase'
import styles from 'src/scss/components/buttonGradient.module.scss'

const ButtonGradient = ({ children, onClick, className = '', width, height, radius, ...props }) => {
  const buttonStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    '--radius': typeof radius === 'number' ? `${radius}px` : radius
  }

  return (
    <ButtonBase onClick={onClick} className={`${styles.gradientButton} ${className}`} style={buttonStyle} {...props}>
      <span className={styles.buttonText}>{children}</span>
    </ButtonBase>
  )
}

export default ButtonGradient
