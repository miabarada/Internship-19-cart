import { NavLink } from 'react-router-dom'
import styles from './AdminNavbar.module.scss'
import { routes } from '../../../routes/routes'
import { useAuth } from '../../../hooks/useAuth'

export function AdminNavbar() {
   const { logout } = useAuth()

   return (
      <div className={styles.navbar}>
         <p>ADMIN PANEL</p>
         <div className={styles.links}>
            <NavLink to={routes.ADMIN_HOME} className={({ isActive }) => isActive ? styles.active : styles.inactive}>PROIZVODI</NavLink>
            <NavLink to={routes.ADMIN_ORDERS} className={({ isActive }) => isActive ? styles.active : styles.inactive}>NARUDŽBE</NavLink>
            <NavLink to={routes.ADMIN_CATEGORIES} className={({ isActive }) => isActive ? styles.active : styles.inactive}>KATEGORIJE</NavLink>
            <NavLink onClick={logout} to={routes.LOGIN_PAGE} className={({ isActive }) => isActive ? styles.active : styles.inactive}>LOGOUT</NavLink>
         </div>
      </div>
   )
}