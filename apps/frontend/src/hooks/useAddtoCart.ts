const baseUrl = (import.meta as any).env.VITE_API_URL

export function useAddToCart() {
   const addToCart = async (data: {
      productId: number, 
      size: string,
      color: string,
      quantity: number
   }) => {
      try {
         await fetch(`${baseUrl}/orders`, {
            method: 'POST',
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            }, 
            body: JSON.stringify(data)
         })
      } catch (err) {
         console.error(err)
      }
   }

   return { addToCart }
}