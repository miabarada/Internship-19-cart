import { CategoryForm } from "../../../components/Admin/CategoryForm/CategoryForm";
import { CategoryTable } from "../../../components/Admin/CategoryTable/CategoryTable";
import { useCategories } from "../../../hooks/Admin/useCategories";
import styles from './CategoriesPage.module.scss'

export function AdminCategories() {
   const { categories, createCategory, deleteCategory, loading } = useCategories()

   return (
      <div className={styles.container}>
         <CategoryForm onCreate={createCategory} />

         {loading ? (
            <p>Loading...</p>
         ) : (
            <CategoryTable
               categories={categories}
               onDelete={deleteCategory}
            />
         )}
      </div>
   )
}