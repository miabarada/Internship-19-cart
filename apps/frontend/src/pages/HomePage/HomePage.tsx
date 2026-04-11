import { useMemo } from 'react'
import { useFavorites } from '../../hooks/useFavorites'
import { useProducts } from '../../hooks/useProducts'
import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import styles from './HomePage.module.scss'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { routes } from '../../routes/routes'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '../../icons/SearchIcon/SearchIcon'
import { LoadingPage } from '../LoadingPage/LoadingPage'

export function HomePage() {
   const { products, loading: productsLoading } = useProducts()
   const { favorites, setFavorites, loading: favoritesLoading } = useFavorites()

   const { toggleFavorite } = useToggleFavorite(favorites, setFavorites)
   const navigate = useNavigate()

   const favoriteIds = useMemo(() => {
      return new Set(favorites.map(f => f.productId))
   }, [favorites])

   if (productsLoading || favoritesLoading) {
      return <LoadingPage />
   }

   return (
      <div className={styles.container}>
         <div 
            className={styles.searchBarContainer}
            onClick={() => navigate(routes.SEARCH_PAGE)}>
            <div className={styles.searchBar}>
               <div className={styles.searchIcon}><SearchIcon /></div>
               <input 
                  type="text"
                  placeholder='Search for...'
                  readOnly />
            </div>
         </div>
         <div className={styles.products}>
            {products.map(product => (
               <div
                  key={product.id}
                  onClick={() => navigate(`/products/${product.id}`)}>
                  <ProductCard
                     {...product}
                     isFavorite={favoriteIds.has(product.id)}
                     onToggleFavorite={toggleFavorite}
                  />
               </div> 
            ))}
         </div>
      </div>
   )
}