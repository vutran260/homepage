import React from 'react'
import styles from 'src/scss/components/buttonBase.module.scss'
import { InteractiveMotion } from 'src/components/Animation/index.jsx'

export const ButtonBase = ({ children, onClick, className = '', type = 'button', disabled = false, ...props }) => {
  return (
    <InteractiveMotion>
      <button className={`${styles.button} ${className}`} onClick={onClick} type={type} disabled={disabled} {...props}>
        {children}
      </button>
    </InteractiveMotion>
  )
}
