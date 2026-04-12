import { useEffect, useState } from "react";

export function useProducts(search: string, category: string) {
   const [products, setProducts] = useState<Product[]>([])

   const fetchProducts = async () => {
      const params = new URLSearchParams()

      if (search) params.append("search", search)
      if (category) params.append("category", category)

         const res = await fetch(`http://localhost:3000/products?${params}`)
         const data = await res.json()

         setProducts(data.data ?? data)
   }

   useEffect(() => {
      fetchProducts()
   }, [search, category])

   const deleteProduct = async (id: number) => {
      await fetch(`http://localhost:3000/products/${id}`, {
         method: "DELETE",
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
      })

      fetchProducts()
   }

   return { products, fetchProducts, deleteProduct}
}