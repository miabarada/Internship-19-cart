import { useMemo, useState } from 'react'
import styles from './SearchPage.module.scss'
import { useCategories } from '../../hooks/useCategories'
import { useSearchProducts } from '../../hooks/useSearchProducts'
import { SearchIcon } from '../../icons/SearchIcon/SearchIcon'
import { CategoryButton } from '../../components/CategoryButton/CategoryButon'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../../hooks/useFavorites'
import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import { LoadingPage } from '../LoadingPage/LoadingPage'

export function SearchPage() {
   const [search, setSearch] = useState<string>('')
   const [categoryId, setCategoryId] = useState<number | null>(null)

   const { products, loading } = useSearchProducts(search, categoryId)
   const { categories } = useCategories()

   const navigate = useNavigate()

   const { favorites, setFavorites, loading: favoritesLoading } = useFavorites()
   const { toggleFavorite } = useToggleFavorite(favorites, setFavorites)

   const favoriteIds = useMemo(() => {
         return new Set(favorites.map(f => f.productId))
      }, [favorites])

   return (
      <div className={styles.container}>
         <div className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
               <div className={styles.searchIcon}><SearchIcon /></div>
               <input 
                  type="text"
                  placeholder='Search for...'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}/>
            </div>
         </div>
         <div className={styles.categories}>
            <CategoryButton 
               label="Sve"
               active={categoryId === null}
               onClick={() => setCategoryId(null)}/>

            {categories.map((cat) => (
               <CategoryButton 
                  key={cat.id}
                  label={cat.name}
                  active={categoryId === cat.id}
                  onClick={() => setCategoryId(prev => prev === cat.id ? null : cat.id)}/>
            ))}
         </div>

         <div>
            {loading || favoritesLoading ? (
               <LoadingPage />
            ) : (
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
            )}         
         </div>
      </div>
   )

}
