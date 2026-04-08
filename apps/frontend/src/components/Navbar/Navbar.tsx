import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { routes } from '../../routes/routes'
import { HomeIcon } from '../../icons/HomeIcon/HomeIcon'
import { SearchIcon } from '../../icons/SearchIcon/SearchIcon'
import { HeartIcon } from '../../icons/HeartIcon/HeartIcon'
import { CartICon } from '../../icons/CartIcon/CartIcon'
import { ProfileIcon } from '../../icons/ProfileIcon/ProfileIcon'

export function Navbar() {
   return (
      <div className={styles.navbar}>
         <NavLink to={routes.HOME} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            <HomeIcon />
         </NavLink>
         <NavLink to={routes.SEARCH_PAGE} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            <SearchIcon />
         </NavLink>
         <NavLink to={routes.FAVORITES_PAGE} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            <HeartIcon />
         </NavLink>
         <NavLink to={routes.CHECKOUT_PAGE} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            <CartICon />
         </NavLink>
         <NavLink to={routes.PROFILE_PAGE} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
            <ProfileIcon />
         </NavLink>
      </div>
   )
}