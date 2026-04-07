import styles from './WelcomePage.module.scss'

export function WelcomePage() {
   return (
      <div className={styles.container}>
         <div className={styles.logo}></div>
         <div className={styles.title}></div>
      </div>
   )
}