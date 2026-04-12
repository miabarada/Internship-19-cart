import styles from './OrderDetails.module.scss'

export function OrderDetails({ order }: any) {
   if (!order) return <p>Odaberi narudžbu</p>

   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Narudžba broj {order.id}</h1>

         <div className={styles.row}>
            <h3 >Korisnik</h3>
            <p>{order.user?.email}</p>
         </div>

         <div className={styles.row}>
            <h3 className={styles.subtitle}>Adresa dostave</h3>
            <p>{order.shippingAddress}</p>
         </div>

         <h3 className={styles.subtitle}>Proizvodi</h3>
         <ul className={styles.list}>
            {order.items?.map((item: any) => (
               <li key={item.id}>
                  {item.product?.name} * {item.quantity}
               </li>
            ))}
         </ul>

         <div className={styles.row}>
            <h3 className={styles.subtitle}>Ukupno</h3>
            <p>{order.totalPrice}€</p>
         </div>
      </div>
   )
}