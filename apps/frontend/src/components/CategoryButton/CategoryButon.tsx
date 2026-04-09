import styles from './CategoryButton.module.scss'

export function CategoryButton({ label, active, onClick }: CategoryButtonProps) {
   return (
      <button
         className={`${styles.button} ${active ? styles.active : ''}`}
         onClick={onClick}>
            {label}
      </button>
   )
}