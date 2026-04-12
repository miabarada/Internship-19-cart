import styles from './CategoryTable.module.scss'

export function CategoryTable({ categories, onDelete }: any) {
   const handleDelete = (id: number) => {
      const confirmDelete = confirm("Izbriši kategoriju\nAko kategorija ima proizvode, ova radnja neće uspjeti")

      if(!confirmDelete) 
         return

      onDelete(id)
   }

   return (
      <table className={styles.table}>
         <thead>
            <tr>
               <th>ID</th>
               <th>Naziv</th>
               <th>Radnje</th>
            </tr>
         </thead>

         <tbody>
            {categories.map((c: any) => (
               <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>
                     <button onClick={() => handleDelete(c.id)} className={styles.button}>Izbriši</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}