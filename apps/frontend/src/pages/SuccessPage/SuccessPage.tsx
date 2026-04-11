import { useEffect } from 'react'
import styles from './SuccesPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'

export function SuccessPage() {
   const navigate = useNavigate()

   useEffect(() => {
      const timer = setTimeout(() => {
         navigate(routes.HOME)
      }, 5000) 

      return () => clearTimeout(timer)
   }, [navigate])
   
   return ( 
      <div className={styles.container}>
         <div className={styles.visual}></div>
      </div>
   )
}