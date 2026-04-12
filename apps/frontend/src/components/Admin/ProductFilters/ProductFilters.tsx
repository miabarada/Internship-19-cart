import styles from './ProductFilters.module.scss'

export function ProductFilters({ search, setSearch, category, setCategory }: any) {
   return (
      <div className={styles.container}>
         <input
            placeholder="Pretraži proizvode"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
         />

         <input
            placeholder="Kategorija"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.input}
         />
      </div>
   );
}