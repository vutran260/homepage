import React from 'react'
import { ButtonBase } from './ButtonBase'
import styles from 'src/scss/components/buttonNormal.module.scss'

const ButtonNormal = ({ children, onClick, className = '', width, height, fontSize, radius, ...props }) => {
  const buttonStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    '--radius': typeof radius === 'number' ? `${radius}px` : radius,
    '--fontSize': typeof fontSize === 'number' ? `${fontSize}px` : fontSize
  }
  return (
    <ButtonBase
      onClick={onClick}
      className={`${styles.normalButton} ${className} border border-solid border-whiteGray-100`}
      style={buttonStyle}
      {...props}
    >
      <span className={styles.buttonText}>{children}</span>
    </ButtonBase>
  )
}

export default ButtonNormal
