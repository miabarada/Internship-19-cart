import { NavLink } from 'react-router-dom'
import { NotificationIcon } from '../../icons/NotificationIcon/NotificationIcon'
import styles from './Header.module.scss'
import { routes } from '../../routes/routes'

export function Header() {
   return (
      <div className={styles.container}>
         <div className={styles.logo}></div>
         <NavLink to={routes.NOTIFICATION_PAGE}>
            <NotificationIcon />
         </NavLink>
      </div>
   )
}