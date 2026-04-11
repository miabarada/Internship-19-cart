export function useCheckout() {
   const checkoutOrder = async (orderId: number, payload: any) => {
      const res = await fetch(`http://localhost:3000/orders/${orderId}/checkout`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
         },
         body: JSON.stringify(payload)
      })

      const data = await res.json()
      console.log("CART RESPONSE:", data)
      return data
   }

   return { checkoutOrder }
}