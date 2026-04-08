import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import styles from './MobileLayout.module.scss'

export function Layout({children}: LayoutProps) {
   return (
      <div className={styles.container}>
         <Header />
         <Navbar />
         <main className={styles.main}>{children}</main>
      </div>
   )
}