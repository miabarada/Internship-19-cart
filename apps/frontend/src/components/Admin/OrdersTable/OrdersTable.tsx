import styles from './OrdersTable.module.scss'

export function OrdersTable({ orders, onSelect, onStatusChange }: any) {
   return (
      <table className={styles.table}>
         <thead>
            <tr>
               <th>ID</th>
               <th>Korisnik</th>
               <th>Ukupno</th>
               <th>Status</th>
               <th>Radnje</th>
            </tr>
         </thead>

         <tbody>
            {orders.map((o: any) => (
               <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.user?.email}</td>
                  <td>{o.totalPrice}$</td>

                  <td>
                     <select
                        value={o.status}
                        onChange={(e) => onStatusChange(o.id, e.target.value)}
                        className={styles.button}
                     >
                        <option value="PENDING">PENDING</option>
                        <option value="CONFIRMED">CONFIRMED</option>
                        <option value="SHIPPED">SHIPPED</option>
                        <option value="DELIVERED">DELIVERED</option>
                     </select>
                  </td>

                  <td>
                     <button onClick={() => onSelect(o)} className={styles.button}>Detalji</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}