import React from 'react'
import styles from 'src/scss/components/buttonBase.module.scss'

export const ButtonBase = ({ children, onClick, className = '', type = 'button', disabled = false, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
