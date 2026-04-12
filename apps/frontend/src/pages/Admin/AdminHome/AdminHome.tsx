import { useState } from 'react'
import styles from './AdminHome.module.scss'
import { useProducts } from '../../../hooks/Admin/useProducts'
import { ProductFilters } from '../../../components/Admin/ProductFilters/ProductFilters'
import { ProductTable } from '../../../components/Admin/ProductTable/ProductTable'
import { ProductForm } from '../../../components/Admin/ProductForm/ProductForm'

export function AdminHome() {
   const [search, setSearch] = useState("")
   const [category, setCategory] = useState("")
   const [selected, setSelected] = useState<any>(null)

   const { products, deleteProduct, fetchProducts } = useProducts(search, category)

   return (
      <div className={styles.container}>
         <ProductFilters 
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
         />

         <div className={styles.form}>
            <ProductTable
               products={products}
               onEdit={setSelected}
               onDelete={deleteProduct}
            />

            <ProductForm
               selected={selected}
               onSuccess={() => {
                  setSelected(null);
                  fetchProducts();
               }}
            />
         </div>
      </div>
   )
}