import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../../hooks/useFavorites'
import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import styles from './FavoritesPage.module.scss'
import { useMemo } from 'react'
import { LoadingPage } from '../LoadingPage/LoadingPage'
import { routes } from '../../routes/routes'
import { ProductCard } from '../../components/ProductCard/ProductCard'

export function FavoritesPage() {
   const { favorites, setFavorites, loading } = useFavorites()
   const { toggleFavorite } = useToggleFavorite(favorites, setFavorites)
   const navigate = useNavigate()

   const favoriteIds = useMemo(() => {
      return new Set(favorites.map(f => f.productId))
   }, [favorites])

   if (loading)
      return <LoadingPage />

   return (
      <div>
         {favorites.length === 0 ? (
            <div className={styles.empty}>
               Još nema favorita!
            </div>
         ) : (
            <div className={styles.container}>
               {favorites.map(fav => (
                  <div
                     key={fav.productId}
                     onClick={() => navigate(`/products/${fav.product.id}`)}>
                        <ProductCard
                           {...fav.product}
                           isFavorite={favoriteIds.has(fav.product.id)}
                           onToggleFavorite={toggleFavorite}
                        />
                  </div> 
               ))}
            </div>
         )}
      </div>
   )
}