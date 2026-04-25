import { useEffect, useState } from "react"
const baseUrl = (import.meta as any).env.VITE_API_URL

export function useProducts() {
   const [products, setProducts] = useState<Product[]>([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchProducts = async () => {
         const res = await fetch(`${baseUrl}/products`)
         const data = await res.json()

         setProducts(data.data ?? data)
         setLoading(false)
      }

      fetchProducts()
   }, [])

   return { products, loading }
}