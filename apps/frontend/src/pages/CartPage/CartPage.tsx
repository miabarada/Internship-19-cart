import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { LoadingPage } from '../LoadingPage/LoadingPage'
import styles from './CartPage.module.scss'
import { CartItemCard } from '../../components/CartItemCard/CartItemCard'
import { routes } from '../../routes/routes'
import { Navbar } from '../../components/Navbar/Navbar'

export function CartPage() {
   const { cart, loading } = useCart()
   const navigate = useNavigate()

   if (loading)
      return <LoadingPage />

   const items = cart?.data.items || []

   const total = items.reduce((sum: number, item: any) => {
      return sum + item.price * item.quantity
   }, 0)

   return (
      <div className={styles.cartPage}>
         <div className={styles.header}>
            <h1>Košarica</h1>
         </div>
         <div className={styles.warning}></div>
         {items.length === 0 ? (
            <div className={styles.empty}>Košarica je prazna!</div>
         ) : (
            <div className={styles.items}>
               {items.map((item: any) => (
                  <CartItemCard 
                     key={item.id}
                     id={item.id}
                     quantity={item.quantity}
                     size={item.size}
                     color={item.color}
                     price={item.price}
                     product={item.product}
                  />
               ))}
            </div>
         )}
         <div className={styles.summary}>
            <div className={styles.orderInfo}>
               <h2>Ti plaćaš</h2>
               <h2>{total} $</h2>
            </div>
            <button className={styles.checkout} onClick={() => navigate(`${routes.CHECKOUT_PAGE}`)}>Nastavi na blagajnu</button>
         </div>
         <Navbar />
      </div>
   )
}