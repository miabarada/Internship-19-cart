import { useEffect, useState } from "react";

export function useCart() {
   const [cart, setCart] = useState<any>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchCart = async () => {
         try {
            const res = await fetch('http://localhost:3000/orders/cart', {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
               }
            })

            const data = await res.json()
            setCart(data.data)
         } catch (err){
            console.error('Failed to fetch cart', err)
            setCart(null)
         } finally {
            setLoading(false)
         }
      }

      fetchCart()
   }, [])

   return { cart, setCart, loading }
}