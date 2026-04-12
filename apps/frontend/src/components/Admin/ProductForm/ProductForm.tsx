import { useProductForm } from '../../../hooks/Admin/useProductForm'
import styles from './ProductForm.module.scss'

export function ProductForm({ selected, onSuccess }: any) {
   const { form, handleChange, submit } = useProductForm(selected, onSuccess)
   
   return (
      <div className={styles.container}>
         <h2 className={styles.title}>{selected ? "Uredi" : "Novi proizvod"}</h2>

         <div className={styles.form}>
            <input
               placeholder='Ime'
               value={form.name}
               onChange={(e) => handleChange("name", e.target.value)}
               className={styles.input}
            />
            <input
               placeholder='Opis'
               value={form.description}
               onChange={(e) => handleChange("description", e.target.value)}
               className={styles.input}
            />
            <input
               placeholder='Cijena'
               value={form.price}
               onChange={(e) => handleChange("price", e.target.value)}
               className={styles.input}
            />
            <input
               placeholder='Brand'
               value={form.brand}
               onChange={(e) => handleChange("brand", e.target.value)}
               className={styles.input}
            />
            <input
               placeholder='ID kategorije'
               value={form.categoryId}
               onChange={(e) => handleChange("categoryId", e.target.value)}
               className={styles.input}
            />
            <input
               placeholder='Veličine'
               value={form.sizes}
               onChange={(e) => handleChange("sizes", e.target.value)}
               className={styles.input}
            />
            <input
               placeholder='Boje'
               value={form.colors}
               onChange={(e) => handleChange("colors", e.target.value)}
               className={styles.input}
            />
            <label className={styles.input}>
               <input
                  type="checkbox"
                  checked={form.inStock}
                  onChange={(e) =>
                     handleChange("inStock", e.target.checked)
                  }
               />
               In stock
            </label>
         </div>
         <button onClick={submit} className={styles.button}>Spremi</button>
      </div>
   )
}