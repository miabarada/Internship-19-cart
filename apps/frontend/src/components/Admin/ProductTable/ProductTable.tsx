import styles from './ProductTable.module.scss'

export function ProductTable ({ products, onEdit, onDelete }: any) {
   return (
      <table className={styles.table}>
         <thead>
            <tr>
               <th>Name</th>
               <th>Price</th>
               <th>Description</th>
               <th>Category</th>
               <th>Actions</th>
            </tr>
         </thead>

         <tbody>
            {products.map((p: Product) => (
               <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}€</td>
                  <td>{p.description}</td>
                  <td>{p.category?.name}</td>
                  <td className={styles.buttons}>
                     <button onClick={() => onEdit(p)} className={styles.button}>Edit</button>
                     <button onClick={() => onDelete(p.id)} className={styles.button}>Delete</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}