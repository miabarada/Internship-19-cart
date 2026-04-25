import { useEffect, useRef, useState } from "react";
const baseUrl = (import.meta as any).env.API_URL

export function useCart() {
   const [cart, setCart] = useState<any>(null)
   const [loading, setLoading] = useState(true)
   const didFetch = useRef(false)

   useEffect(() => {
      if (didFetch.current) return
      didFetch.current = true
      
      console.log("1. useCart mounted")
      const fetchCart = async () => {
         console.log("2. fetch start")
         try {
            const res = await fetch(`${baseUrl}/orders/cart`, {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
               }
            })
            console.log("3. status:", res.status)

            const data = await res.json()
             console.log("4. json:", data)
            setCart(data.data)
         } catch (err){
            console.error('Failed to fetch cart', err)
            setCart(null)
         } finally {
            console.log("5. finally - loading false")

            setLoading(false)
         }
      }

      fetchCart()
   }, [])

   return { cart, setCart, loading }
}