import { useEffect, useState } from "react"
const baseUrl = (import.meta as any).env.VITE_API_URL

export function useCategories() {
   const [categories, setCategories] = useState<any[]>([])
   const [loading, setLoading] = useState(false)

   const fetchCategories = async () => {
      setLoading(true)

      try {
         const res = await fetch(`${baseUrl}/categories`)
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

      await fetch(`${baseUrl}/categories`, {
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
         const res = await fetch(`${baseUrl}categories/${id}`, {
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