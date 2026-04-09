import { useEffect, useState } from "react"

export function useProducts() {
   const [products, setProducts] = useState<Product[]>([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchProducts = async () => {
         const res = await fetch('http://localhost:3000/products')
         const data = await res.json()

         setProducts(data.data)
         setLoading(false)
      }

      fetchProducts()
   }, [])

   return { products, loading }
}