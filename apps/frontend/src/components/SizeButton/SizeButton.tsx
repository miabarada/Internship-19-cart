import { useState } from 'react'
import styles from './SizeButton.module.scss'

export function SizeButton({ size, selected, onSelect }: SizeButtonProps) {
   return (
      <button
         onClick={() => onSelect(size)}
         className={`${styles.size} ${selected ? styles.active : ''}`}>
         {size}
      </button>
   )
}