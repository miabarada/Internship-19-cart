import { Outlet } from 'react-router-dom'
import { AdminNavbar } from '../AdminNavbar/AdminNavbar'
import styles from './AdminLayout.module.scss'

export function AdminLayout() {
   return (
      <div>
         <AdminNavbar />
         <Outlet />
      </div>
   )
}