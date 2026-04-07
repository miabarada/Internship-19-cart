import { useNavigate } from 'react-router-dom'
import styles from './WelcomePage.module.scss'
import { useEffect } from 'react'
import { routes } from '../../routes/routes'

export function WelcomePage() {
   const navigate = useNavigate()

   useEffect(() => {
      const timer = setTimeout(() => {
         const token = localStorage.getItem("token")

         if(token) {
            navigate(routes.HOME)
         } else {
            navigate(routes.LOGIN_PAGE)
         }
      }, 2000)

      return () => clearTimeout(timer)
   }, [navigate])

   return (
      <div className={styles.container}>
         <div className={styles.logo}></div>
         <div className={styles.title}></div>
      </div>
   )
}