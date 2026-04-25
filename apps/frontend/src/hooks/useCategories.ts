import { useEffect, useState } from "react";
const baseUrl = (import.meta as any).env.VITE_API_URL

export function useCategories() {
   const [categories, setCategories] = useState<Category[]>([])

   useEffect(() => {
      fetch(`${baseUrl}/categories`)
         .then(res => res.json())
         .then(data => setCategories(data.data))
   }, [])

   return { categories }
}