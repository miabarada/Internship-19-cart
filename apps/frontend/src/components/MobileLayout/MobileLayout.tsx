import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import styles from './MobileLayout.module.scss'

export function MobileLayout() {
   return (
      <div className={styles.container}>
         <Header />
         <main className={styles.main}><Outlet /></main>
         <Navbar />
      </div>
   )
}