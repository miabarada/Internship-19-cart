import styles from './CartItemCard.module.scss'

export function CartItemCard({ id, quantity, size, color, price, product }: CartItemProps) {
   return (
      <div className={styles.container}>
         <div className={styles.imageContainer}>
            <img src={product.images?.[0]} />
         </div>
         <div className={styles.info}>
            <h1>{product.name}</h1>
            <h2>Size: {size}</h2>
            <h1>{price} $</h1>
         </div>
      </div>
   )
}