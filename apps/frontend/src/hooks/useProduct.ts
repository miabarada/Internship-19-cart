import { useEffect, useState } from "react";
const baseUrl = (import.meta as any).env.VITE_API_URL

export function useProduct(id: string | undefined) {
   const [product, setProduct] = useState<Product>()
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchProduct = async() => {
         try {
            setLoading(true)
            const res = await fetch(`${baseUrl}/products/${id}`)
            const data = await res.json()
            setProduct(data.data)
         } catch (err) {
            console.error(err)
         } finally {
            setLoading(false)
         }
      }

      if (id)
         fetchProduct()
   }, [id])

   return { product, loading }
}