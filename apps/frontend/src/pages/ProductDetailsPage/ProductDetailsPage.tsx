import { useNavigate, useParams } from 'react-router-dom'
import styles from './ProductDetailsPage.module.scss'
import { useFavorites } from '../../hooks/useFavorites'
import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import { useEffect, useState } from 'react'
import { useProduct } from '../../hooks/useProduct'
import { useAddToCart } from '../../hooks/useAddtoCart'
import { LoadingPage } from '../LoadingPage/LoadingPage'
import { SizeButton } from '../../components/SizeButton/SizeButton'

export function ProductDetailsPage() {
   const { id } = useParams()
   const navigate = useNavigate()

   const { product, loading } = useProduct(id)
   const { addToCart } = useAddToCart() 
   const { favorites, setFavorites } = useFavorites()
   const { toggleFavorite } = useToggleFavorite(favorites, setFavorites)

   const [size, setSize] = useState("")
   const [color, setColor] = useState("")

   const isFavorite = favorites.some(
      (f: Favorite) => f.productId === Number(id)
   )

   const handleAddToCart = async() => {
      if (!size || !color || !product)
         return

      await addToCart({
         productId: product.id,
         size,
         color,
         quantity: 1
      })

      alert("Added to cart!")
   }

   if (loading)
      return <LoadingPage />
   if (!product)
      return <div>Proizvod nije pronađen</div>

   return (
      <div className={styles.container}>
         <div className={styles.imageContainer}>
               <img src={product.images[0]} />
         </div>
         <div className={styles.information}>
            <h1>{product.name}</h1>
            <h1>{product.price} $</h1>
            <div className={styles.colors}>
               {product.colors?.map((c: string) => (
                  <button
                     key={c}
                     onClick={() => setColor(c)}
                     className={styles.color}
                     style={{
                        backgroundColor: c,
                        border: color === c ? "2px solid black" : "2px solid gray"
                     }}>
                  </button>
               ))}
            </div>

            <h2>Izaberi veličinu:</h2>
            <div className={styles.sizes}>
               {product.sizes?.map((s: string) => (
                  <SizeButton 
                     key={s}
                     size={s}
                     selected={size === s}
                     onSelect={setSize}
                  />
               ))}
            </div>

            <div className={styles.buttons}>
               <button
                  onClick={handleAddToCart}
                  disabled={!size || !color}
                  className={styles.addToCartButton}
               >
                  DODAJ U KOŠARICU
               </button>
               <button
                  onClick={() => toggleFavorite(Number(id))}
                  className={`${isFavorite ? styles.favorite : styles.notFavorite}`}
               >
               </button>
            </div>
         </div>
         
         <button onClick={() => navigate(-1)} className={styles.exit}></button>
      </div>
   )
}