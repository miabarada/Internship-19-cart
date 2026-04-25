const baseUrl = (import.meta as any).env.API_URL

export function useCheckout() {
   const checkoutOrder = async (orderId: number, payload: any) => {
      const res = await fetch(`${baseUrl}/orders/${orderId}/checkout`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
         },
         body: JSON.stringify(payload)
      })

      const data = await res.json()
      return data
   }

   return { checkoutOrder }
}