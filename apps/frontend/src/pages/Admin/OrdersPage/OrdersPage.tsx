import { OrderDetails } from '../../../components/Admin/OrderDetails/OrderDetails'
import { OrdersTable } from '../../../components/Admin/OrdersTable/OrdersTable'
import { useOrders } from '../../../hooks/Admin/useOrders'
import styles from './OrdersPage.module.scss'

export function AdminOrders() {
   const { orders, setStatusFilter, selectedOrder, setSelectedOrder, updateStatus } = useOrders()

   return (
      <div className={styles.container}>
         <select onChange={(e) => setStatusFilter(e.target.value)} className={styles.dropdown}>
            <option value="">Sve</option>
            <option value="PENDING">PENDING</option>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="SHIPPED">SHIPPED</option>
            <option value="DELIVERED">DELIVERED</option>
         </select>

         <OrdersTable
            orders={orders}
            onSelect={setSelectedOrder}
            onStatusChange={updateStatus}
         />

         <OrderDetails order={selectedOrder} />
      </div>
   )
}