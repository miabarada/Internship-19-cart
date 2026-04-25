import { useEffect, useState } from "react";
const baseUrl = (import.meta as any).env.API_URL

export function useSearchProducts(search: string, categoryId: number | null) {
   const [products, setProducts] = useState<Product[]>([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      const fetchProducts = async () => {
         setLoading(true)
         const params = new URLSearchParams()

         if (search) params.append('search', search)
         if (categoryId) params.append('categoryId', String(categoryId))

         const res = await fetch(`${baseUrl}/products?${params.toString()}`)
         const data = await res.json()

         setProducts(data.data)
         setLoading(false)
      }
      
      fetchProducts()
   }, [search, categoryId])

   return { products, loading }
}