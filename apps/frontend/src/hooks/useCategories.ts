import { useEffect, useState } from "react";

export function useCategories() {
   const [categories, setCategories] = useState<Category[]>([])

   useEffect(() => {
      fetch('http://localhost:3000/categories')
         .then(res => res.json())
         .then(data => setCategories(data.data))
   }, [])

   return { categories }
}