import styles from './ProductCard.module.scss'

export function ProductCard({ id, name, description, price, images, colors, isFavorite, onToggleFavorite }: ProductCard) {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onToggleFavorite?.(id)
   }

   return (
      <div className={styles.productCard}>
         <img src={images[0]} className={styles.image} />
         <div className={styles.information}>
            <div className={styles.title}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{price} $</div>
            <div className={styles.colors}>
               {colors.map((color, index) => (
                  <div 
                     key={index}
                     className={styles.color}
                     style={{ backgroundColor: color }}/>
               ))}
            </div>
         </div>
         {isFavorite !== undefined && (
            <button 
               onClick={handleClick}
               className={`${isFavorite ? styles.favorite : styles.notFavorite}`}></button>
         )}
      </div>
   )
}