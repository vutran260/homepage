import React from 'react'
import { ButtonBase } from './ButtonBase'
import styles from 'src/scss/components/buttonNormal.module.scss'

const ButtonNormal = ({
  children,
  onClick,
  className = '',
  width = 60,
  height = 60,
  fontSize,
  radius = 30,
  active = false,
  ...props
}) => {
  const buttonStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    '--radius': typeof radius === 'number' ? `${radius}px` : radius,
    '--fontSize': typeof fontSize === 'number' ? `${fontSize}px` : fontSize
  }

  return (
    <ButtonBase
      onClick={onClick}
      className={`${styles.normalButton} ${active ? styles.active : ''} ${className}`}
      style={buttonStyle}
      {...props}
    >
      <span className={styles.buttonText}>{children}</span>
    </ButtonBase>
  )
}

export default ButtonNormal
