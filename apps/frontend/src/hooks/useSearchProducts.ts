import { useEffect, useState } from "react";

export function useSearchProducts(search: string, categoryId: number | null) {
   const [products, setProducts] = useState<Product[]>([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      const fetchProducts = async () => {
         setLoading(true)
         const params = new URLSearchParams()

         if (search) params.append('search', search)
         if (categoryId) params.append('categoryId', String(categoryId))

         const res = await fetch(`http://localhost:3000/products?${params.toString()}`)
         const data = await res.json()

         setProducts(data.data)
         setLoading(false)
      }
      
      fetchProducts()
   }, [search, loading])

   return { products, loading }
}