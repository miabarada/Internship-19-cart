import { useEffect, useState } from "react"

export function useCategories() {
   const [categories, setCategories] = useState<any[]>([])
   const [loading, setLoading] = useState(false)

   const fetchCategories = async () => {
      setLoading(true)

      try {
         const res = await fetch('http://localhost:3000/categories')
         const data = await res.json()

         setCategories(data.data ?? data)
      } finally {
         setLoading(false)
      }
   } 

   useEffect(() => {
      fetchCategories()
   }, [])

   const createCategory = async (name: string) => {
      const token = localStorage.getItem('token')

      await fetch('http://localhost:3000/categories', {
         method: "POST", 
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         },
         body: JSON.stringify({ name })
      })

      fetchCategories()
   }

   const deleteCategory = async (id: number) => {
      const token = localStorage.getItem('token')

      try {
         const res = await fetch(`http://localhost:3000/categories/${id}`, {
            method: "DELETE", 
            headers: {
               Authorization: `Bearer ${token}`
            },
         })

         if (!res.ok) {
            const data = await res.json();
            throw new Error(data.message || "Delete failed");
         }

         fetchCategories();
      } catch (err: any) {
         alert(err.message)
      }
   }

   return { categories, loading, createCategory, deleteCategory }
}