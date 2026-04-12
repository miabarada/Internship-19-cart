import { useState } from 'react'
import styles from './CategoryForm.module.scss'

export function CategoryForm({ onCreate }: any) {
   const [name, setName] = useState("")

   const handleSubmit = (e: any) => {
      e.preventDefault()

      if(!name.trim()) return
      onCreate(name)
      setName("")
   }

   return (
      <form onSubmit={handleSubmit} className={styles.container}>
         <h2 className={styles.title}>Stvori kategoriju</h2>
         <input
            placeholder='Naziv kategorije'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
         />

         <button type='submit' className={styles.button}>Spremi</button>
      </form>
   )
}