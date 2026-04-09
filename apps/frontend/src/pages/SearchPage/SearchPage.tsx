import { useState } from 'react'
import styles from './SearchPage.module.scss'
import { useCategories } from '../../hooks/useCategories'
import { useSearchProducts } from '../../hooks/useSearchProducts'
import { SearchIcon } from '../../icons/SearchIcon/SearchIcon'
import { CategoryButton } from '../../components/CategoryButton/CategoryButon'
import { ProductCard } from '../../components/ProductCard/ProductCard'

export function SearchPage() {
   const [search, setSearch] = useState<string>('')
   const [categoryId, setCategoryId] = useState<number | null>(null)

   const { products, loading } = useSearchProducts(search, categoryId)
   const { categories } = useCategories()

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

         <div className={styles.products}>
            {loading ? (
               <div>Loading...</div>
            ) : (
               products.map((product: Product) => (
                  <ProductCard
                  key={product.id}
                  {...product} />
               ))
            )}         
         </div>
      </div>
   )

}
